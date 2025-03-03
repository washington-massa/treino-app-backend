const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const Treino = require('./models/Treino');
const Exercicio = require('./models/Exercicio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco de dados!');
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error);
  }
});

// Rota para listar todos os treinos
app.get('/treinos', async (req, res) => {
    const treinos = await Treino.findAll({ include: Exercicio });
    res.json(treinos);
  });
  
  // Rota para criar um treino
  app.post('/treinos', async (req, res) => {
    const { nome } = req.body;
    const treino = await Treino.create({ nome });
    res.json(treino);
  });
  
  // Rota para deletar um treino
  app.delete('/treinos/:id', async (req, res) => {
    const { id } = req.params;
    await Treino.destroy({ where: { id } });
    res.json({ message: 'Treino deletado' });
  });
  
  // Rota para criar um exercício dentro de um treino
  app.post('/treinos/:treinoId/exercicios', async (req, res) => {
    const { treinoId } = req.params;
    const { nome, series, repeticoes, peso } = req.body;
    const exercicio = await Exercicio.create({ nome, series, repeticoes, peso, TreinoId: treinoId });
    res.json(exercicio);
  });
  
  // Rota para deletar um exercício
  app.delete('/exercicios/:id', async (req, res) => {
    const { id } = req.params;
    await Exercicio.destroy({ where: { id } });
    res.json({ message: 'Exercício deletado' });
  });
  