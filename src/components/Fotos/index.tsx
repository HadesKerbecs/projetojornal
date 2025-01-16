import React, { useState } from 'react';
import styles from './Fotos.module.scss';
import addFotos from '../../assets/addFotos/AddFotos.jpg';

interface GaleriaInterface {
  [key: string]: string[];
}

const Fotos = ({ onAddPhoto }: { onAddPhoto: (id: string, photo: string) => void }) => {
  const [selectedId, setSelectedId] = useState<string>('gustavo'); // ID padrão

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && selectedId) {
          onAddPhoto(selectedId, reader.result as string); // Adiciona foto ao ID
        }
      };
      reader.readAsDataURL(file); // Converte para Base64
    }
  };

  return (
    <section className={styles.selecaoFoto}>
      <div className={styles.textContainer}>
        <h2>Adicionar Fotos</h2>
        <p>
          Selecione um ID e clique para adicionar uma foto.
        </p>
      </div>

      {/* Selecionar ID */}
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className={styles.selectId}
      >
        <option value="gustavo">Gustavo</option>
        <option value="joaovitor">João Vitor</option>
        <option value="eduardo">Eduardo</option>
        {/* Adicione mais IDs conforme necessário */}
      </select>

      {/* Input de Upload */}
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
