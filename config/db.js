const { Sequelize } = require('sequelize');
require('dotenv').config(); // pastikan env dibaca jika dipakai secara terpisah

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false, // set true kalau mau debug query
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL database (Sequelize)');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); // berhenti jika gagal connect
  }
};

module.exports = { sequelize, connectDB };
