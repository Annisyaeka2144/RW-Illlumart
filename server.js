const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const authRoutes = require('./routes/auth');
const karyaRoutes = require('./routes/karya');
const transaksiRoutes = require('./routes/transaksi');
const downloadRoutes = require('./routes/download'); // ✅

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/karya', karyaRoutes);
app.use('/api/transaksi', transaksiRoutes);
app.use('/api/download', downloadRoutes);

// ✅ Notifikasi dummy endpoint
app.get("/api/notifikasi", (req, res) => {
  const notifikasi = [
    { id: 1, message: "Karya anda 'Novel Tentang Kamu' berhasil dibeli" },
    { id: 2, message: "Karya anda 'Senja di Ufuk Timur' berhasil dibeli" }
  ];
  res.json(notifikasi);
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Terjadi kesalahan di server', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
