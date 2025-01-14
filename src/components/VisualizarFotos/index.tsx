import styles from './VisualizarFotos.module.scss';
import Rodape from '../Rodape';
import CabecalhoFJ from '../Cabecalho/CabecalhoFJ';

const VisualizarFotos = () => {
  return (
    <div>
        <CabecalhoFJ />
      <div className={styles.photoGrid}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.photoCard}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.buttonGroup}>
              <button className={styles.downloadButton}>Baixar</button>
              <button className={styles.viewButton}>Visualizar</button>
            </div>
          </div>
        ))}

      </div>
        <Rodape />
    </div>
  );
};

export default VisualizarFotos;
