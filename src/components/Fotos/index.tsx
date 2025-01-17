import React, { useState } from 'react';
import styles from './Fotos.module.scss';
import addFotos from '../../assets/addFotos/AddFotos.jpg';
import { uploadFileToDrive } from "../../googleDriveConfig";

interface FotosProps {
  onAddPhoto: (id: string, photo: string) => void;
  onRemovePhoto: (id: string) => void;
  folderID: string;
}

const Fotos: React.FC<FotosProps> = ({ onAddPhoto, folderID }) => {
  const [selectedId, setSelectedId] = useState<string>('');

  // Lista de IDs (mantida fixa por enquanto)
  const ids = [
    "Gustavo", "João Vitor", "Murilo", "Eduardo", 
    "Luiz Felipe", "Gabriel", "Matheus", "Kelvi", 
    "Luiz Henrique", "Lucas", "Arthur", "Elias", 
    "Lucas2", "Nathan", "Jorge Vitor", "Vinicius"
  ];

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && selectedId) {
      try {
        const photoURL = await uploadFileToDrive(file, folderID);
        onAddPhoto(selectedId, photoURL);
        alert("Foto enviada com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar foto:", error);
        alert("Erro ao enviar foto.");
      }
    } else {
      alert("Selecione um ID antes de adicionar uma foto.");
    }
  };

  return (
<section className={styles.selecaoFoto}>
    {/* Título e Subtítulo */}
    <div className={styles.textContainer}>
      <h2>Adicionar Fotos</h2>
      <p>Selecione um ID abaixo e clique na imagem ao lado para adicionar uma foto ao perfil correspondente.</p>

    {/* Seletor de IDs */}
    <select
      value={selectedId}
      onChange={(e) => setSelectedId(e.target.value)}
      className={styles.selectId}
    >
      <option value="" disabled>
        Selecione um ID
      </option>
      {ids.map((id) => (
        <option key={id} value={id}>
          {id}
        </option>
      ))}
    </select>
    </div>

    {/* Imagem de Upload */}
    <div className={styles.fotoPlaceholder}>
      <input
        type="file"
        id="uploadFoto"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="uploadFoto">
        <img src={addFotos} alt="Adicionar Foto" />
      </label>
    </div>
  </section>
  );
};

export default Fotos;
