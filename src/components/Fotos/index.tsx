import React, { useState } from 'react';
import styles from './Fotos.module.scss';
import addFotos from '../../assets/addFotos/AddFotos.jpg';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { cardsNomes } from '../State/atom';

interface FotosProps {
  onAddPhoto: (id: string, photo: string) => void;
}

const Fotos: React.FC<FotosProps> = ({ onAddPhoto }) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const ids = useRecoilValue(cardsNomes)
  .map((card) => card.name)
  .sort();  

  const handleFileUpload = async (file: File, selectedId: string) => {
    if (!file || !selectedId) {
      alert('Selecione um ID e uma foto.');
      return;
    }
  
    const normalizedId = selectedId
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/\s+/g, "") 
      .toLowerCase(); 

    const normalizedFileName = file.name
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/\s+/g, "") 
      .toLowerCase(); 
  
      const publicId = `${normalizedId}_${normalizedFileName}`;

      const formData = new FormData();
      formData.append('file', file)
      formData.append('upload_preset', 'default_preset');
      formData.append('public_id', publicId);
      formData.append('folder', 'ProjetoJornal');
      formData.append('tags', normalizedId);
    
      console.log('Enviando foto com public_id:', publicId);
    
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dcrj3oqcw/image/upload',
        formData
      );
      const photoUrl = response.data.secure_url;
      alert(`Foto enviada com sucesso!`);
      onAddPhoto(normalizedId, photoUrl);
      setSelectedId('');
      setFile(null);
    } catch (error) {
      console.error('Erro ao enviar a foto:', error);
      alert('Erro ao enviar a foto. Envie uma foto!');
    }
  };
  

  return (
    <section className={styles.selecaoFoto}>
      <div className={styles.textContainer}>
        <h2>Adicionar Fotos</h2>
        <p>Selecione um ID abaixo e clique na imagem ao lado para adicionar uma foto ao perfil correspondente.</p>
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

      <div className={styles.fotoPlaceholder}>
      <input
          type="file"
          id="uploadFoto"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
              if (selectedId) {
                handleFileUpload(selectedFile, selectedId); 
              } else {
                alert('Selecione um ID antes de fazer o upload.');
              }
            }
          }}
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