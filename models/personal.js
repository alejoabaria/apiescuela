const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Personal = sequelize.define('Personal', {
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  tipo_doc: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  domicilio: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  cp: {
    type: DataTypes.MEDIUMINT,
    allowNull: false,
  },
  fechan: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING(40),
    defaultValue: '1234',
  },
  id_localidades: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'personal',
  timestamps: false,
});

module.exports = Personal;
