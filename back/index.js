const express = require('express');
const cors = require('cors');

// Criação da aplicação Express
const app = express();
const port = 3000;

// Configura o middleware de CORS e para receber JSON
app.use(cors());
app.use(express.json());

const sequelize = require('./config/database');
const Subscription = require('./models/Subscription');

// Sincroniza os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });

// Rotas
app.get('/', (req, res) => {
  res.send('Olá, você está tentando consultar minha API!');
});

app.post('/subscribe', require('./functions/subscribe'));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
