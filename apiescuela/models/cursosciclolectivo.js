const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const CursosCicloLectivo = sequelize.define('CursosCicloLectivo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  estado: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  id_cursos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ciclolectivo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'cursosciclolectivo',
  timestamps: false,
});

module.exports = CursosCicloLectivo;
