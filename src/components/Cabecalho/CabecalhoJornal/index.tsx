import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CabecalhoJornal.module.scss';
import LogoTJF from '../../../assets/logoTJF/LogoTJF.png';

interface LocationState {
  name?: string;
}

const CabecalhoJornal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | null;
  const nomeJornal = state?.name || 'Edição do Jornal';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src={LogoTJF}
            alt="Tropa do Juízo Final"
          />

          <div className={styles.brandInfo}>
            <span>ARQUIVO HISTÓRICO</span>
            <h1>{nomeJornal}</h1>
            <p>Arquivo oficial das edições da Tropa do Juízo Final</p>
          </div>
        </div>

        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          <span>←</span> VOLTAR
        </button>
      </div>
    </header>
  );
};

export default CabecalhoJornal;
