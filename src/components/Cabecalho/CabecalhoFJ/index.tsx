import React from 'react';
import styles from './CabecalhoFJ.module.scss';

const CabecalhoFJ = () => {
    return (
        <div className={styles.fotoVisualizarContainer}>
        <header className={styles.header}>
            <h1>FOTOS</h1>
            <p>Aqui temos as fotos do pessoal da Tropa do Juízo Final</p>
            </header>
        </div>
    );
  };
  
export default CabecalhoFJ;

