import { useParams } from 'react-router-dom';
import styles from './Jornal.module.scss';
import Rodape from '../Rodape';
import CabecalhoFJ from '../Cabecalho/CabecalhoFJ';

interface JornalImagens {
    [key: string]: string[];
}

const Jornal = () => {
  const { jornalId } = useParams<{ jornalId: string }>();

  // Simulação de imagens dinâmicas
  const jornalImagens: JornalImagens = {
    1: ['/images/palms1.jpg', '/images/palms2.jpg', '/images/palms3.jpg'],
    2: ['/images/beach1.jpg', '/images/beach2.jpg'],
  };

  const images = jornalId ? jornalImagens[jornalId] || [] : [];

  return (
    <div>
        <CabecalhoFJ />
    <div className={styles.journalPage}>
      <h1>Jornal {jornalId}</h1>
      <div className={styles.imageCarousel}>
        {images.map((image: string, index: number) => (
          <div key={index} className={styles.imageCard}>
            <img src={image} alt={`Journal ${jornalId} - Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
        <Rodape />
    </div>
  );
};

export default Jornal;
