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
  
      try {
        const response = await axios.get(
          `http://localhost:5000/api/images?prefix=ProjetoJornal/${galleryId}_`
        );
  
        const imageUrls = response.data.resources.map((img: { secure_url: any; }) => img.secure_url);
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };
  
    fetchImages();
  }, [galleryId]);  

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
