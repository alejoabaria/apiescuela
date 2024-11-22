const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  division: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  ano: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  turno: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
}, {
  tableName: 'cursos',
  timestamps: false,
});

module.exports = Curso;
