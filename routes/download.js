const express = require('express');
const router = express.Router();
const Download = require('../models/download');
const Karya = require('../models/karya');

// GET: Ambil semua log + relasi ke karya
router.get('/logs', async (req, res) => {
  try {
    const logs = await Download.findAll({
      include: [
        {
          model: Karya,
          as: 'karya',
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json({ logs });
  } catch (err) {
    console.error('Gagal mengambil log:', err);
    res.status(500).json({ message: 'Gagal mengambil log download' });
  }
});

module.exports = router;
