const sequelize = require('./config/database');
const Treino = require('./models/Treino');
const Exercicio = require('./models/Exercicio');

async function syncDatabase() {
  try {
    console.log('Iniciando sincronização do banco de dados...'); // Adicionado para debug
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado com sucesso!');
    process.exit();
  } catch (error) {
    console.error('Erro ao sincronizar o banco:', error);
  }
}

syncDatabase();

