const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Treino = sequelize.define('Treino', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  concluido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Treino;
