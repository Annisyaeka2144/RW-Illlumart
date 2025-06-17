const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Download = sequelize.define('Download', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_karya: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  karyaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'karyas',
      key: 'id',
    },
  },
}, {
  tableName: 'downloads',
  timestamps: true,
});

module.exports = Download;
