const express = require('express');
const axios = require('axios');
const app = express();

// Rota principal para buscar imagens do Cloudinary
app.get('/api/images', async (req, res) => {
  const { prefix } = req.query; // Prefixo enviado pelo frontend

  if (!prefix) {
    console.error('Erro: Prefix não enviado pelo frontend.');
    return res.status(400).json({ error: 'O parâmetro "prefix" é obrigatório' });
  }

  console.log(`Prefix recebido: ${prefix}`);

  try {
    // Requisição para o Cloudinary
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/dcrj3oqcw/resources/image`,
      {
        params: { prefix, type: 'upload'}, // Filtra imagens pelo prefixo
        auth: {
          username: process.env.CLOUDINARY_API_KEY, // Credenciais do Cloudinary
          password: process.env.CLOUDINARY_API_SECRET,
        },
      }
    );

    console.log('Resposta completa do Cloudinary:', response.data);
    console.log('Imagens encontradas:', response.data.resources.map((r) => r.secure_url));
    res.json(response.data); // Envia as imagens para o frontend
  } catch (error) {
    console.error('Erro ao buscar imagens do Cloudinary:', error.message);
    if (error.response) {
      console.error('Detalhes do erro (Cloudinary):', error.response.data);
    }

    // Resposta de erro mais detalhada para o cliente
    res.status(500).json({
      error: 'Erro ao buscar imagens do Cloudinary',
      details: error.response?.data || 'Nenhuma resposta detalhada do Cloudinary',
    });
  }
});

// Rota de teste (opcional)
app.get('/', (req, res) => {
  res.send('Servidor funcionando! Use a rota /api/images para buscar imagens.');
});

// Configuração do servidor
const PORT = process.env.PORT || 5000; // Porta configurável
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
