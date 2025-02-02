import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";
import planeta from "../../assets/addFotos/Planeta.png"
import estrelas from "../../assets/addFotos/Estrelas.png";
import luz from "../../assets/addFotos/Luz.png";

const NotFound = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <img src={estrelas} alt="Estrelas" className={styles.estrelas}/>
            <img src={luz} alt="Brilhos" className={styles.luz}/>
            <div className={styles.texto}>
                <h1>Ops, esta página não foi encontrada</h1>
                <p>Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>

                <div className={styles.botoes}>
                    <button onClick={() => navigate(-1)}> VOLTAR </button>
                    <button onClick={() => navigate("/")}>IR PARA O HOME</button>
                </div>
            </div>

            <div className={styles.numeros404}>
                <span className={styles.numero}>4</span>
                <img src={planeta} alt="Planeta" className={styles.planeta} />
                <span className={styles.numero}>4</span>
            </div>
        </div>
    );
}

export default NotFound;