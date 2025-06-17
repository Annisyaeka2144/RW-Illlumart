const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('../config/db');
const models = require('../models');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

models.sequelize.sync({ alter: true })
  .then(() => console.log('✅ Database synchronized (altered)'))
  .catch(err => console.error('❌ Sync failed:', err));

app.use(cors());
app.use(express.json());

// API Routes
const authRoutes = require('../routes/auth');
const karyaRoutes = require('../routes/karya');
const transaksiRoutes = require('../routes/transaksi');
const downloadRoutes = require('../routes/download');

app.use('/api/auth', authRoutes);
app.use('/api/karya', karyaRoutes);
app.use('/api/transaksi', transaksiRoutes);
app.use('/api/download', downloadRoutes);

// Test route
app.get('/test', (req, res) => res.send('Server hidup ✅'));

// Serve frontend
const clientPath = path.join(__dirname, '../client/build');
app.use(express.static(clientPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
