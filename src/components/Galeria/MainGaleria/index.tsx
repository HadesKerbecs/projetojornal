import { Link } from 'react-router-dom';
import styles from './MainGaleria.module.scss';


const MainGaleria = () => {
  return (
    <div className={styles.MainGaleria}>
      <h1>Galerias</h1>
      <div className={styles.imageGrid}>
        {/* Galeria 1 */}
        <Link to="/gallery/1" className={styles.imageCard}>
          <p>Galeria 1</p>
        </Link>

        {/* Galeria 2 */}
        <Link to="/gallery/2" className={styles.imageCard}>
          <p>Galeria 2</p>
        </Link>

        {/* Galeria 3 */}
        <Link to="/gallery/3" className={styles.imageCard}>
          <p>Galeria 3</p>
        </Link>
      </div>
    </div>
  );
};

export default MainGaleria;
