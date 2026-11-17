
import React from 'react';
import styles from './Rodape.module.scss';
import LogoTJF from '../../assets/logoTJF/LogoTJF.png';
import { useRecoilValue } from 'recoil';
import { cardsNomes } from '../State/atom';

const Rodape = () => {
  const integrantes = useRecoilValue(cardsNomes);

  return (
    <footer className={styles.rodape}>
      <div className={styles.footerMain}>

        <div className={styles.brand}>
          <img
            src={LogoTJF}
            alt="Logo da Tropa do Juízo Final"
          />

          <div>
            <h2>Tropa do Juízo Final</h2>
            <p>O arquivo oficial dos acontecimentos da tropa.</p>
          </div>
        </div>

        <div className={styles.team}>
          <span className={styles.teamLabel}>
            OS PERSONAGENS DESSA HISTÓRIA
          </span>

          <div className={styles.membersList}>
            {integrantes.map((integrante) => (
              <span key={integrante.id}>
                {integrante.name}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div>
          <span>Cuidado, os brothers estão lhe vendo.</span>
          <p>Diagnósticos e especialistas dizem que as imagens podem lhe levar à loucura.</p>
          <p>Não lhe garanto quando lança essas merdas.</p>
        </div>

        <span className={styles.copyright}>
          © {new Date().getFullYear()} • Tropa do Juízo Final
        </span>
      </div>
    </footer>
  );
};

export default Rodape;
