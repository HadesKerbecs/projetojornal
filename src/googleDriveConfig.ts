import { gapi } from 'gapi-script';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES = 'https://www.googleapis.com/auth/drive.file';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

export const initializeGoogleAPI = async () => {
  return new Promise<void>((resolve, reject) => {
    gapi.load('client:auth2', async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: DISCOVERY_DOCS,
        });
        resolve();
      } catch (error) {
        console.error('Erro ao inicializar Google API:', error);
        reject(error);
      }
    });
  });
};

export const authenticateUser = async () => {
  try {
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      await authInstance.signIn();
    }
    console.log('Usuário autenticado com sucesso.');
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error);
  }
};

export const uploadFileToDrive = async (file: File, folderId: string) => {
  try {
    const accessToken = gapi.auth.getToken()?.access_token;
    if (!accessToken) {
      throw new Error('Token de acesso não encontrado. Verifique se o usuário está autenticado.');
    }

    const metadata = {
      name: file.name,
      parents: [folderId],
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      body: form,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao fazer upload: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return `https://drive.google.com/uc?id=${data.id}`;
  } catch (error) {
    console.error('Erro no upload do arquivo:', error);
    throw error;
  }
};

export const authenticateUserWithRedirect = () => {
  const authInstance = gapi.auth2.getAuthInstance();
  authInstance.signIn({ prompt: 'select_account', ux_mode: 'redirect' });
};