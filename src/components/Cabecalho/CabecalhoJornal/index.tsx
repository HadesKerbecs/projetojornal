import React from 'react';
import styles from './CabecalhoJornal.module.scss';
import { useNavigate, Location, useLocation} from 'react-router-dom';
import LogoTJF from '../../../assets/logoTJF/LogoTJF.png';

interface LocationState {
    name: string;
  }
const CabecalhoJornal = () => {
    const navigate = useNavigate();

    const voltarPagina = () => {
        navigate(-1);
    }
    const location = useLocation() as Location<LocationState>;
    const journalName = location.state?.name || 'Jornal Desconhecido';

    return (
        <div className={styles.fotoVisualizarContainer}>
        <header className={styles.header}>
            <img 
                src={LogoTJF}
                alt="Logo da empresa" 
            />
            <div className='text-container'>
                <h1>Jornal</h1>
                <p>Aqui temos o jornal de {journalName} da Tropa do Juízo Final</p>
            </div>
            <button 
                    className={styles.voltarButton} 
                    onClick={voltarPagina}
            >
                    VOLTAR
            </button>
            </header>
        </div>
    );
  };
  
export default CabecalhoJornal;

