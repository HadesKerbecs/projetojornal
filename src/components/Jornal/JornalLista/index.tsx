import { Link } from 'react-router-dom';
import styles from './JornalLista.module.scss';

const JornalLista = () => {
  return (
    <div className={styles.journalGrid}>
      <Link to="/journal/1" className={styles.journalCard}>Jornal 1</Link>
      <Link to="/journal/2" className={styles.journalCard}>Jornal 2</Link>
      {/* Adicione mais links conforme necessário */}
    </div>
  );
};

export default JornalLista;
