const { sequelize } = require('../config/db');

const User = require('./users');
const Karya = require('./karya');
const Transaksi = require('./transaksi');
const Download = require('./download');

// Relasi: Download → Karya
Download.belongsTo(Karya, { foreignKey: 'karyaId', as: 'karya' });

module.exports = {
  sequelize,
  User,
  Karya,
  Transaksi,
  Download,
};
