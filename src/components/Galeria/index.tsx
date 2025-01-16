import { useParams } from 'react-router-dom';
import styles from './Galeria.module.scss';
import Cabecalho2 from '../../components/Cabecalho/CabecalhoFJ';
import capaImgGustavo from '../../assets/imgGustavo/Capa.jpg';

interface GaleriaInterface {
  [key: string]: string[];
}

const Galeria = () => {
  const { galleryId } = useParams<{ galleryId: string }>();

  const galleries: GaleriaInterface = {
    gustavo: [capaImgGustavo, 'https://via.placeholder.com/150'],
    joaovitor: ['https://via.placeholder.com/200', 'https://via.placeholder.com/250'],
    eduardo: ['https://via.placeholder.com/300', 'https://via.placeholder.com/350'],
  };

  const images = galleryId ? galleries[galleryId] || [] : [];

  return (
    <div>
      <Cabecalho2 />
      <div className={styles.galleryContainer}>
        {galleryId && images.length > 0 ? (
          <>
            <h1>Galeria de {galleryId.charAt(0).toUpperCase() + galleryId.slice(1)}</h1>
            <div className={styles.imageGrid}>
              {images.map((image: string, index: number) => (
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
