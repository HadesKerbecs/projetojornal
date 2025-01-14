import React from 'react';
import styles from './Rodape.module.scss';

const Rodape= () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.team}>
        <p>Eduardo | Luiz Felipe | Gustavo | Murilo</p>
        <p>Gabriel | Matheus | João Vitor | Wallison</p>
        <p>Kelvi | Luiz Henrique | Vinicius | Lucas</p>
        <p>Lucas2 | Nathan | Jorge Vitor | Arthur</p>
      </div>
    </footer>
  );
};

export default Rodape;
