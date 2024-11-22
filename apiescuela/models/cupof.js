const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cupof = sequelize.define('Cupof', {
  cupof: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  turno: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  hsmodcar: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  id_materias: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cursos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  funcion: {
    type: DataTypes.STRING(4),
    defaultValue: '0',
  },
  cargo: {
    type: DataTypes.STRING(5),
    defaultValue: 'PF',
  },
  id_grupos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'cupof',
  timestamps: false,
});

module.exports = Cupof;
