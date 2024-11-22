const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Revista = sequelize.define('Revista', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cupof: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fd: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fh: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dni_personal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  secuencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  situacion: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  tableName: 'revista',
  timestamps: false,
});

module.exports = Revista;
