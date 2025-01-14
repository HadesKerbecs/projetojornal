import { useParams } from 'react-router-dom';
import styles from './Galeria.module.scss';

interface GaleriaInterface {
    [key: string]: string[];
}

const Galeria = () => {
  const { galleryId } = useParams<{ galleryId: string }>();

  // Exemplo de dados para diferentes galerias
  const galleries: GaleriaInterface = {
    1: ['Imagem 1A', 'Imagem 1B'],
    2: ['Imagem 2A', 'Imagem 2B'],
    3: ['Imagem 3A', 'Imagem 3B'],
  };

  const images = galleryId ? galleries[galleryId] || [] : [];

  return (
    <div className={styles.galleryContainer}>
      <h1>Galeria {galleryId}</h1>
      <div className={styles.imageGrid}>
        {images.map((image: string, index: number) => (
          <div key={index} className={styles.imageCard}>
            <p>{image}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
