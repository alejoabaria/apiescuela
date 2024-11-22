const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PersonalCargo = sequelize.define('PersonalCargo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cargo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'personal_cargos',
  timestamps: false,
});

module.exports = PersonalCargo;
