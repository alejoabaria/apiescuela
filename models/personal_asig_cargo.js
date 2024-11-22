const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PersonalAsigCargo = sequelize.define('PersonalAsigCargo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  dni_personal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_personal_cargo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'personal_asig_cargo',
  timestamps: false,
});

module.exports = PersonalAsigCargo;
