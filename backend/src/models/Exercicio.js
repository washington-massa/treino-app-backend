const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Treino = require('./Treino');

const Exercicio = sequelize.define('Exercicio', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  series: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  repeticoes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  peso: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  concluido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Um treino pode ter vários exercícios
Treino.hasMany(Exercicio, { onDelete: 'CASCADE' });
Exercicio.belongsTo(Treino);

module.exports = Exercicio;
