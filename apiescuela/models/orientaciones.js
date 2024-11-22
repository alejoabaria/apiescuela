const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Orientacion = sequelize.define('Orientacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
}, {
  tableName: 'orientaciones',
  timestamps: false,
});

module.exports = Orientacion;
