const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AsignacionesAlumnos = sequelize.define('asignacionesalumnos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_cursosciclolectivo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dni_alumnos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_grupos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(1),
    allowNull: false
  }
}, {
  tableName: 'asignacionesalumnos',
  timestamps: false
});

module.exports = AsignacionesAlumnos;
