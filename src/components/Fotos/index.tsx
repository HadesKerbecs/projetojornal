import React, { useState } from 'react';
import styles from './Fotos.module.scss';
import addFotos from '../../assets/addFotos/AddFotos.jpg';
/*import { uploadFileToDrive } from "../../googleDriveConfig";*/
import { gapi } from 'gapi-script';

interface FotosProps {
  onAddPhoto: (id: string, photo: string) => void;
  onRemovePhoto: (id: string) => void;
  folderID: string;
}

const Fotos: React.FC<FotosProps> = ({ onAddPhoto, folderID }) => {
  const [selectedId, setSelectedId] = useState<string>('');

  const ids = [
    "Gustavo", "João Vitor", "Murilo", "Eduardo", 
    "Luiz Felipe", "Gabriel", "Matheus", "Kelvi", 
    "Luiz Henrique", "Lucas", "Arthur", "Elias", 
    "Lucas2", "Nathan", "Jorge Vitor", "Vinicius"
  ];

  const handleAuthClick = async () => {
    try {
      // Inicializando o cliente da API se ainda não estiver inicializado
      if (!gapi.auth2) {
        await gapi.load("auth2", async () => {
          gapi.auth2.init({
            client_id: "427223494579-5nfblhumpetfm34dkhhcm95pb5dqfshf.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/drive.file",
          });
        });
      }
  
      const authInstance = gapi.auth2.getAuthInstance();
  
      if (!authInstance.isSignedIn.get()) {
        await authInstance.signIn();
        alert("Autenticação concluída com sucesso!");
      } else {
        alert("Você já está autenticado.");
      }
    } catch (error: unknown) {  // Tipando o erro como unknown
      console.error("Erro durante a autenticação:", error);
  
      // Verificando se o tipo do erro é realmente Error
      if (error instanceof Error) {
        if (error.message === "popup_closed_by_user") {
          alert("A janela de autenticação foi fechada antes da conclusão. Tente novamente.");
        } else {
          alert("Erro ao autenticar. Verifique as configurações de segurança do navegador.");
        }
      } else {
        alert("Erro desconhecido.");
      }
    }
  };
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const fileContent = reader.result?.toString().split(",")[1];
  
        const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
  
        const response = await fetch("https://seu-backend.render.com/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: file.name,
            mimeType: file.type,
            folderId: folderID,
            fileContent,
            token,
          }),
        });
  
        const data = await response.json();
        if (data.success) {
          alert("Foto enviada com sucesso!");
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        console.error("Erro ao enviar foto:", error);
        alert("Erro ao enviar foto.");
      }
    };
  };  
  
  return (
    <section className={styles.selecaoFoto}>
      <div className={styles.textContainer}>
        <h2>Adicionar Fotos</h2>
        <p>Selecione um ID abaixo e clique na imagem ao lado para adicionar uma foto ao perfil correspondente.</p>

        <button onClick={handleAuthClick} className={styles.authButton}>
          Autenticar com Google
        </button>

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
