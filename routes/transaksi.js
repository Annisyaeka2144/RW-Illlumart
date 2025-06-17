const express = require('express');
const router = express.Router();
const Karya = require('../models/karya');
const Transaksi= require('../models/transaksi');

// === ROUTE GET UNTUK NOTIFIKASI ===
router.get('/', async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll(); // ambil semua data transaksi
    res.json(transaksi);
  } catch (err) {
    console.error('Gagal mengambil data transaksi:', err);
    res.status(500).json({ message: 'Gagal mengambil data transaksi', error: err.message });
  }
});

// === ROUTE POST UNTUK PEMBAYARAN ===
router.post('/bayar', async (req, res) => {
  let { nama, email, metode_pembayaran, nama_karya } = req.body;

  nama = nama?.trim();
  email = email?.trim();
  metode_pembayaran = metode_pembayaran?.trim();
  nama_karya = nama_karya?.trim();

  if (!nama || !email || !metode_pembayaran || !nama_karya) {
    return res.status(400).json({ message: 'Semua data harus diisi.' });
  }

  try {
    const karya = await Karya.findOne({ where: { nama: nama_karya } });
    if (!karya) {
      return res.status(404).json({ message: 'Karya tidak ditemukan.' });
    }

    const allowedMethods = ['DANA', 'OVO', 'BCA', 'BRI'];
    if (!allowedMethods.includes(metode_pembayaran)) {
      return res.status(400).json({ message: 'Metode pembayaran tidak valid.' });
    }

    const transaksi = await Transaksi.create({
      nama,
      email,
      metode_pembayaran,
      nama_karya: karya.nama,
      harga: karya.harga,
      status_pembayaran: 'lunas',
    });

    return res.status(201).json({
      message: 'Transaksi berhasil dibuat.',
      data: {
        transaksi,
        kategori_karya: karya.kategori,
      }
    });
  } catch (err) {
    console.error('Gagal memproses transaksi:', err);
    return res.status(500).json({ message: 'Terjadi kesalahan di server.', error: err.message });
  }
});

module.exports = router;
