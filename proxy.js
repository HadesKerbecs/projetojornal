const express = require('express');
const axios = require('axios');
const app = express();

// Rota para buscar imagens do Cloudinary
app.get('/api/images', async (req, res) => {
  const { prefix } = req.query; // Prefixo enviado pelo frontend

  if (!prefix) {
    return res.status(400).json({ error: 'O parâmetro "prefix" é obrigatório' });
  }

  try {
    // Requisição para o Cloudinary
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/dcrj3oqcw/resources/image`,
      {
        params: { prefix }, // Prefixo para filtrar as imagens
        auth: {
          username: process.env.CLOUDINARY_API_KEY, // API Key do Cloudinary
          password: process.env.CLOUDINARY_API_SECRET, // API Secret do Cloudinary
        },
      }
    );

    // Retorna as imagens para o frontend
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar imagens:', error.message);
    res.status(500).json({ error: 'Erro ao buscar imagens do Cloudinary' });
  }
});

// Configura o servidor para rodar em uma porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
