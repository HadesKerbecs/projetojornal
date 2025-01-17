import { gapi } from "gapi-script";

const CLIENT_ID = ""; // Do arquivo credentials.json
const API_KEY = ""; // Gerada no Google Cloud Console
const SCOPES = ""; // Permissão para gerenciar arquivos criados pelo app
const DISCOVERY_DOCS = [""];

/**
 * Inicializa a API do Google
 */
export const initializeGoogleAPI = () => {
  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: DISCOVERY_DOCS,
      })
      .then(() => {
        console.log("Google API inicializada com sucesso.");
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("Erro ao inicializar a Google API:", error.message);
        } else {
          console.error("Erro desconhecido ao inicializar a Google API");
        }
      });
  });
};

/**
 * Autentica o usuário
 */
export const authenticateUser = async () => {
  try {
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      await authInstance.signIn();
      console.log("Usuário autenticado com sucesso.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao autenticar o usuário:", error.message);
    } else {
      console.error("Erro desconhecido ao autenticar o usuário");
    }
  }
};

/**
 * Faz upload de um arquivo para uma pasta específica no Google Drive
 * @param file O arquivo que será enviado
 * @param folderId ID da pasta onde o arquivo será salvo
 * @returns URL para acessar o arquivo enviado
 */
export const uploadFileToDrive = async (file: File, folderId: string) => {
  try {
    // Obtém o token de autenticação
    const accessToken = gapi.auth.getToken()?.access_token;
    if (!accessToken) {
      throw new Error("Token de acesso não encontrado. Verifique se o usuário está autenticado.");
    }

    // Define os metadados do arquivo, incluindo o ID da pasta
    const metadata = {
      name: file.name, // Nome do arquivo
      parents: [folderId], // ID da pasta
    };

    // Configura o formulário de dados para o envio
    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    // Faz a requisição para o Google Drive
    const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      body: form,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro ao fazer upload:", errorText);
      throw new Error("Erro ao fazer upload do arquivo.");
    }

    // Retorna o link para acessar o arquivo enviado
    const data = await response.json();
    return `https://drive.google.com/uc?id=${data.id}`;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro no upload do arquivo:", error.message);
    } else {
      console.error("Erro desconhecido no upload do arquivo");
    }
    throw error; // Re-lança o erro após tratá-lo
  }
};
