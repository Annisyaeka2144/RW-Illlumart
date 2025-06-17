const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


const Transaksi = sequelize.define('Transaksi', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_karya: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metode_pembayaran: {
    type: DataTypes.ENUM('OVO', 'DANA', 'BCA', 'BRI'),
    allowNull: false,
  },
  status_pembayaran: {
    type: DataTypes.STRING,
    defaultValue: 'belum dibayar',
  },
}, {
  tableName: 'transaksis', // harus sesuai dengan nama tabel di database
  timestamps: false,
});

module.exports = Transaksi;
