const Subscription = require('../models/Subscription');

async function subscribe(req, res) {
  const { email, content } = req.body;

  // Validação simples para verificar se os campos estão preenchidos
  if (!email || !content) {
    return res.status(400).send('E-mail e conteúdo são obrigatórios.');
  }

  try {
    // Cria e salva um novo registro de inscrição no banco de dados
    const newSubscription = await Subscription.create({ email, content });

    res.send('Inscrição salva com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao salvar a inscrição.');
  }
}

module.exports = subscribe;
