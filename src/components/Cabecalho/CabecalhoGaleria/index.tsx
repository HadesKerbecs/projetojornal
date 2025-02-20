import React from 'react';
import styles from './CabecalhoGaleria.module.scss';
import { useNavigate } from 'react-router-dom';
import LogoTJF from '../../../assets/logoTJF/LogoTJF.png';

const CabecalhoGaleria = () => {
    const navigate = useNavigate();

    const voltarPagina = () => {
        navigate(-1);
    }
    return (
        <div className={styles.fotoVisualizarContainer}>
        <header className={styles.header}>
            <img 
                src={LogoTJF}
                alt="Logo da empresa" 
            />
            <div className='text-container'>
                <h1>FOTOS</h1>
                <p>Aqui temos as fotos do pessoal da Tropa do Juízo Final</p>
            </div>
            <button 
            className={styles.voltarButton}
            onClick={voltarPagina}
            >VOLTAR
            </button>
            </header>
        </div>
    );
  };
  
export default CabecalhoGaleria;

