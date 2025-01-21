app.get('/api/images', async (req, res) => {
    const { prefix } = req.query; // Prefixo enviado pelo frontend
  
    if (!prefix) {
      console.error('Prefix não enviado!');
      return res.status(400).json({ error: 'O parâmetro "prefix" é obrigatório' });
    }
  
    console.log(`Prefix recebido: ${prefix}`);
  
    try {
      const response = await axios.get(
        `https://api.cloudinary.com/v1_1/dcrj3oqcw/resources/image`,
        {
          params: { prefix }, // Prefixo para filtrar as imagens
          auth: {
            username: process.env.CLOUDINARY_API_KEY, // API Key
            password: process.env.CLOUDINARY_API_SECRET, // API Secret
          },
        }
      );
  
      console.log('Resposta do Cloudinary:', response.data);
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao buscar imagens do Cloudinary:', error.message);
      res.status(500).json({ error: 'Erro ao buscar imagens do Cloudinary' });
    }
  });
  