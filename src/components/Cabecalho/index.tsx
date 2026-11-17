
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.scss';
import LogoTJF from '../../assets/logoTJF/LogoTJF.png';

const Cabecalho = () => {
  const rolarPara = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.cabecalho}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoArea}>
          <img
            src={LogoTJF}
            alt="Logo da Tropa do Juízo Final"
            className={styles.logo}
          />

          <div className={styles.identidade}>
            <span className={styles.subtitulo}>
              O PORTAL OFICIAL DA TROPA DO JUIZO FINAL
            </span>

            <h1>JORNAL DA TROPA</h1>

            <span className={styles.descricao}>
              TJF • DESDE SEMPRE
            </span>
          </div>
        </Link>

        <nav className={styles.navegacao}>
          <button type="button" onClick={() => rolarPara('integrantes')}>
            Integrantes
          </button>

          <button type="button" onClick={() => rolarPara('edicoes')}>
            Edições
          </button>

          <button type="button" onClick={() => rolarPara('fotos')}>
            Fotos
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Cabecalho;
