const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Materia = sequelize.define('Materia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  abreviatura: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(1),
    defaultValue: 'H',
  },
  resumen: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'materias',
  timestamps: false,
});

module.exports = Materia;
