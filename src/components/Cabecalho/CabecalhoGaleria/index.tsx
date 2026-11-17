
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CabecalhoGaleria.module.scss';
import LogoTJF from '../../../assets/logoTJF/LogoTJF.png';
import { useRecoilValue } from 'recoil';
import { cardsNomes } from '../../State/atom';

const CabecalhoGaleria = () => {
  const navigate = useNavigate();
  const { galleryId } = useParams<{ galleryId: string }>();

  const integrantes = useRecoilValue(cardsNomes);
  const integrante = integrantes.find((card) => card.id === galleryId);

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
            <span>ARQUIVO FOTOGRÁFICO</span>
            <h1>Galeria de Fotos</h1>
            <p>
              {integrante
                ? `Registros de ${integrante.name}`
                : 'Tropa do Juízo Final'}
            </p>
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

export default CabecalhoGaleria;
