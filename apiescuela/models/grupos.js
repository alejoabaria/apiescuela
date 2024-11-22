const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Grupo = sequelize.define('Grupo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  id_cursos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'grupos',
  timestamps: false,
});

module.exports = Grupo;
