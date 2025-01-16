import React from 'react';
import styles from './Fotos.module.scss';
import addFotos from '../../assets/addFotos/AddFotos.jpg'

const Fotos = () => {
  return (
    <section className={styles.selecaoFoto}>
      <div className={styles.textContainer}>
        <h2>Adicionar Fotos</h2>
        <p>
          Caso queira guardar fotos do pessoal, do grupo para termos guardados, 
          clique na foto ao lado {'->'}
        </p>
      </div>
      <div className={styles.fotoPlaceholder}>
        <img 
          src={addFotos} 
          alt="Placeholder para fotos" 
        />
      </div>
    </section>
  );
};

export default Fotos;
