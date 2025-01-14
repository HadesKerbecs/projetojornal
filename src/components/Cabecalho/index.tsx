import React from 'react';
import styles from './Cabecalho.module.scss';
import LogoTJF from '../../assets/logoTJF/LogoTJF.png';

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <img 
          src={LogoTJF}
          alt="Logo da empresa" 
        />
      <h1 className={styles.titulo}>JORNAL TROPA DO JUIZO FINAL
      </h1>
    </header>
  );
};

export default Cabecalho;
