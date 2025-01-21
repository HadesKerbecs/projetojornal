import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Galeria.module.scss';
import Cabecalho2 from '../../components/Cabecalho/CabecalhoFJ';
import axios from 'axios';
import { GaleriaInterface } from '../../pages/App';

interface GaleriaProps {
  galerias: GaleriaInterface;
}

const Galeria: React.FC<GaleriaProps> = ({ galerias }) => {
  const { galleryId } = useParams<{ galleryId: string }>();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!galleryId) return;
  
      // Normaliza o ID da galeria para o mesmo padrão usado no upload
      const normalizedGalleryId = galleryId
        .normalize("NFD")
        .replace(/[̀-\u036f]/g, "") // Remove acentos
        .replace(/\s+/g, "") // Remove espaços
        .toLowerCase(); // Converte para minúsculas
  
      const prefix = `ProjetoJornal/ProjetoJornal/${normalizedGalleryId}_`; // Ajuste o prefixo para refletir duplicação
      console.log(`Buscando imagens com prefixo: ${prefix}`);
    
      try {
        // Requisição para o backend com o prefixo correto
        const response = await axios.get(
          `https://projetojornal.onrender.com/api/images?prefix=${prefix}`
        );
  
        console.log('Imagens retornadas:', response.data.resources);
  
        // Extrai os URLs das imagens e os adiciona ao estado
        const imageUrls = response.data.resources.map((img: { secure_url: string }) => img.secure_url);
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };
  
    fetchImages(); // Chama a função para buscar imagens
  }, [galleryId]); // Dependência do ID da galeria

  return (
    <div>
      <Cabecalho2 />
      <div className={styles.galleryContainer}>
        {images.length > 0 ? (
          <>
            <h1>Galeria de {(galleryId ?? '').charAt(0).toUpperCase() + (galleryId ?? '').slice(1)}</h1>
            <div className={styles.imageGrid}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageCard}>
                  <img src={image} alt={`Imagem ${index + 1}`} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1>Galeria Não Encontrada</h1>
        )}
      </div>
    </div>
  );
};

export default Galeria;
