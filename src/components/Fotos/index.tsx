import React, { useState } from 'react';
import styles from './Fotos.module.scss';
import addFotos from '../../assets/addFotos/AddFotos.jpg';

interface FotosProps {
  onAddPhoto: (id: string, photo: string) => void; // Propriedade esperada
}

const pessoas = [
  { id: "eduardo", name: "Eduardo" },
  { id: "gustavo", name: "Gustavo" },
  { id: "murilo", name: "Murilo" },
  { id: "joaovitor", name: "João Vitor" },
  { id: "luizfelipe", name: "Luiz Felipe" },
  { id: "gabriel", name: "Gabriel" },
  { id: "matheus", name: "Matheus" },
  { id: "wallison", name: "Wallison" },
  { id: "kelvi", name: "Kelvi" },
  { id: "luizhenrique", name: "Luiz Henrique" },
  { id: "lucas", name: "Lucas" },
  { id: "arthur", name: "Arthur" },
  { id: "elias", name: "Elias" },
  { id: "lucas2", name: "Lucas2" },
  { id: "nathan", name: "Nathan" },
  { id: "jorgevitor", name: "Jorge Vitor" },
  { id: "vinicius", name: "Vinicius" }
];

const Fotos: React.FC<FotosProps> = ({ onAddPhoto }) => {
  const [selectedId, setSelectedId] = useState<string>(pessoas[0].id);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && selectedId) {
          onAddPhoto(selectedId, reader.result as string); // Adiciona foto ao ID
        }
      };
      reader.readAsDataURL(file); // Converte a imagem para Base64
    }
  };

  return (
    <section className={styles.selecaoFoto}>
      <div className={styles.textContainer}>
        <h2>Adicionar Fotos</h2>
        <p>Selecione um ID e clique para adicionar uma foto ao perfil correspondente.</p>
      </div>

      {/* Selecionar ID */}
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className={styles.selectId}
      >
        {pessoas.map((pessoa) => (
          <option key={pessoa.id} value={pessoa.id}>
            {pessoa.name}
          </option>
        ))}
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
