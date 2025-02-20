import React from 'react';
import styles from './Rodape.module.scss';
import LogoTJF from '../../assets/logoTJF/LogoTJF.png';


const Rodape= () => {
  return (
    <footer className={styles.rodape}>
      <img 
          src={LogoTJF}
          alt="Logo da empresa" 
        />
      <div className={styles.team}>
        <p>Cuidado, os brothers estão lhe vendo</p>
        <p>Diagnósticos e Especialistas dizem que as imagens podem lhe levar a loucura </p>
        <p>Não lhe garanto quando lança essas merdas</p>
        <p>Arthur | Eduardo | Gabriel | Gustavo | João Vitor | Jorge Vitor</p>
        <p>Kelvi | Luiz Felipe | Luiz Henrique | Lucas Chaves | Lucas Santos </p>
        <p>Matheus | Murilo | Nathan | Wallison | Vinicius</p>
      </div>
    </footer>
  );
};

export default Rodape;
