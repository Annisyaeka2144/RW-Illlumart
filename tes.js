const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const uploadKaryaRoutes = require('./routes/uploadKarya');
const transactionRoutes = require('./routes/transaksi'); 

// Inisialisasi aplikasi Express
const app = express();

// Middleware
app.use(cors());  // Mengaktifkan CORS (Cross-Origin Resource Sharing)
app.use(bodyParser.json());  // Memungkinkan aplikasi untuk menerima JSON dalam request body

// Connect ke database
connectDB();

// Gunakan routes untuk autentikasi
app.use('/api/auth', authRoutes);

// Gunakan routes untuk upload karya
app.use('/api/karya', uploadKaryaRoutes);


// Gunakan routes untuk transaksi pembelian karya
app.use('/api/transaction', transactionRoutes);

// Error handler middleware (untuk menangani error yang tidak terduga)
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Terjadi kesalahan di server' });
});

// Jalankan server pada port yang ditentukan
const PORT = process.env.PORT || 5000;  // Menentukan port, bisa diubah di environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
