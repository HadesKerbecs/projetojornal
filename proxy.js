const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors({
   origin: (origin, callback) => {
    if (origin && origin.startsWith('https://hadeskerbecs.github.io')){
      callback(null, true);
    }else{
      callback(new Error('Origin não permitida pelo CORS'));
    } 
  }
}));

app.get('/api/images', async (req, res) => {
  const { prefix } = req.query;

  if (!prefix) {
    console.error('Erro: Prefix não enviado pelo frontend.');
    return res.status(400).json({ error: 'O parâmetro "prefix" é obrigatório' });
  }

  console.log(`Prefix recebido: ${prefix}`);

  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/dcrj3oqcw/resources/image`,
      {
        params: { prefix, type: 'upload'},
        auth: {
          username: process.env.CLOUDINARY_API_KEY,
          password: process.env.CLOUDINARY_API_SECRET,
        },
      }
    );

    console.log('Resposta completa do Cloudinary:', response.data);
    console.log('Imagens encontradas:', response.data.resources.map((r) => r.secure_url));
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar imagens do Cloudinary:', error.message);
    if (error.response) {
      console.error('Detalhes do erro (Cloudinary):', error.response.data);
    }

    res.status(500).json({
      error: 'Erro ao buscar imagens do Cloudinary',
      details: error.response?.data || 'Nenhuma resposta detalhada do Cloudinary',
    });
  }
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando! Use a rota /api/images para buscar imagens.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
