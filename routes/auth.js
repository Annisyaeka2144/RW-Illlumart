const express = require('express');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Endpoint registrasi
router.post('/register', async (req, res) => {
  const { nama, email, no_hp, password, role } = req.body;

  console.log('Request POST /register:', req.body);

  try {
    if (!role) {
      return res.status(400).json({ message: 'Role harus diisi' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    const newUser = await User.create({
      nama,
      email,
      no_hp,
      password, // sudah dienkripsi otomatis di model
      role,
    });

    res.status(201).json({ message: 'Registrasi berhasil', user: newUser });
  } catch (error) {
    console.error('Error saat registrasi:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat registrasi', error });
  }
});

// ✅ Endpoint login
router.post('/login', async (req, res) => {
  const { nama, password } = req.body;

  console.log('Request POST /login:', req.body);

  try {
    const user = await User.findOne({ where: { nama } });

    if (!user) {
      return res.status(401).json({ message: 'Nama tidak ditemukan' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    res.status(200).json({ message: 'Login berhasil', user });
  } catch (error) {
    console.error('Error saat login:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat login' });
  }
});

module.exports = router;