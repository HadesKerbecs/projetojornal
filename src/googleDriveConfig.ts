import { gapi } from "gapi-script";

const CLIENT_ID = ""; // Do arquivo credentials.json
const API_KEY = ""; // Gerada no Google Cloud Console
const SCOPES = "https://www.googleapis.com/auth/drive.file"; // Permissão para gerenciar arquivos criados pelo app
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

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
        console.error(
          "Erro ao inicializar a Google API:",
          error instanceof Error ? error.message : "Erro desconhecido"
        );
      });
  });
};

export const authenticateUser = async () => {
  try {
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      await authInstance.signIn();
      console.log("Usuário autenticado com sucesso.");
    }
  } catch (error: unknown) {
    console.error(
      "Erro ao autenticar o usuário:",
      error instanceof Error ? error.message : "Erro desconhecido"
    );
  }
};

export const uploadFileToDrive = async (file: File, folderId: string) => {
  try {
    const accessToken = gapi.auth.getToken()?.access_token;
    if (!accessToken) {
      throw new Error("Token de acesso não encontrado. Verifique se o usuário está autenticado.");
    }

    const metadata = {
      name: file.name,
      parents: [folderId],
    };

    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    form.append("file", file);

    const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      body: form,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao fazer upload: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return `https://drive.google.com/uc?id=${data.id}`;
  } catch (error: unknown) {
    console.error(
      "Erro no upload do arquivo:",
      error instanceof Error ? error.message : "Erro desconhecido"
    );
    throw error;
  }
};

export const authenticateUserWithRedirect = () => {
  const authInstance = gapi.auth2.getAuthInstance();
  authInstance.signIn({ prompt: 'select_account', ux_mode: 'redirect' });
};

