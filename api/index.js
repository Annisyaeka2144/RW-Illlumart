const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('../config/db');
const authRoutes = require('../routes/auth');
const karyaRoutes = require('../routes/karya');
const transaksiRoutes = require('../routes/transaksi');
const downloadRoutes = require('../routes/download');
const models = require('../models');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

models.sequelize.sync({ alter: true }) // sync model dengan DB
  .then(() => console.log('✅ Database synchronized (altered)'))
  .catch(err => console.error('❌ Sync failed:', err));

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/karya', karyaRoutes);
app.use('/api/transaksi', transaksiRoutes);
app.use('/api/download', downloadRoutes);

// Optional dummy endpoint
app.get('/api/notifikasi', (req, res) => {
  res.json([{ id: 1, message: 'Pesan dummy berhasil' }]);
});

// Serve frontend (React build)
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
