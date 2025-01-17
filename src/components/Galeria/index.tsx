import React from 'react';
import { useParams } from 'react-router-dom';
import { GaleriaInterface } from '../../pages/App';
import styles from './Galeria.module.scss';
import Cabecalho2 from '../../components/Cabecalho/CabecalhoFJ';

interface GaleriaProps {
  galerias: GaleriaInterface; // Propriedade que contém as imagens organizadas por ID
}

const Galeria: React.FC<GaleriaProps> = ({ galerias }) => {
  const { galleryId } = useParams<{ galleryId: string }>(); // Captura o ID da URL
  const images = galleryId ? galerias[galleryId] || [] : []; // Busca as imagens associadas ao ID
  
  return (
    <div>
      <Cabecalho2 />
      <div className={styles.galleryContainer}>
        {galleryId && images.length > 0 ? (
          <>
            <h1>Galeria de {galleryId.charAt(0).toUpperCase() + galleryId.slice(1)}</h1>
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
