const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CicloSuperior = sequelize.define('ciclosuperior', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_cursos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_orientaciones: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'ciclosuperior',
  timestamps: false
});

module.exports = CicloSuperior;
