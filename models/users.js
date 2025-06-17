const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const bcrypt = require('bcryptjs');

// Definisikan model untuk tabel 'users'
const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.ENUM('pembeli', 'penjual'),
    allowNull: false, // Validasi agar role tidak boleh null
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  no_hp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Enkripsi password sebelum disimpan ke database
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10); // Enkripsi password
  }
});

sequelize.sync().then(() => {
  console.log("Tabel 'Users' telah berhasil dibuat!");
});

module.exports = User;
