const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Estudiante = sequelize.define('Estudiante', {
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fechan: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: false,
    defaultValue: 'N',
  },
  id_localidades: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  domicilio: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  clave: {
    type: DataTypes.STRING(40),
    allowNull: false,
    defaultValue: '1234',
  },
}, {
  tableName: 'alumnos',
  timestamps: false, // La tabla 'alumnos' no usa timestamps.
});

module.exports = Estudiante;
