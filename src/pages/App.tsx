import React, { useState, useEffect } from 'react';
import Cabecalho from '../components/Cabecalho';
import PaginaCentral from '../components/PaginaCentral';
import Rodape from '../components/Rodape';
import Jornal from '../components/Jornal';
import Galeria from '../components/Galeria';
import { initializeGoogleAPI } from "../googleDriveConfig";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

export interface GaleriaInterface {
  [key: string]: string[];
}

const AppContent = () => {
  const location = useLocation();

  const [galerias, setGalerias] = useState<GaleriaInterface>({
    gustavo: [],
    joaovitor: [],
    eduardo: [],
    murilo: [],
    luizfelipe: [],
    gabriel: [],
    matheus: [],
    wallison: [],
    kelvi: [],
    luizhenrique: [],
    lucas: [],
    lucas2: [],
    arthur: [],
    elias: [],
    nathan: [],
    jorgevitor: [],
    vinicius: []
  });

  useEffect(() => {
    const initializeAPI = async () => {
      try {
        await initializeGoogleAPI();
      } catch (error) {
        console.error("Erro durante a inicialização da API:", error);
      }
    };
    initializeAPI();
  }, []);  

  const handleAddPhoto = (id: string, photo: string) => {
    setGalerias((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), photo],
    }));
  };

  const handleRemovePhoto = (id: string) => {
    setGalerias((prev) => {
      const updatedGalerias = { ...prev };
      updatedGalerias[id] = [];
      return updatedGalerias;
    });
  };

  const RotasSemCabecalho = ['/galeria/:galleryId', '/jornal/:jornalId'];

  const RotasComCabecalho = () => {
    return !RotasSemCabecalho.some((rota) => {
      const rotaRegex = new RegExp(`^${rota.replace(/:\w+/g, '\\w+')}$`);
      return rotaRegex.test(location.pathname);
    });
  };

  return (
    <div>
      {RotasComCabecalho() && <Cabecalho />}
      <Routes>
        <Route path="/" element={<PaginaCentral onAddPhoto={handleAddPhoto} onRemovePhoto={handleRemovePhoto} folderID="1kHwbljXKr5zV2Hf45RZ2JR-p6Wea-qEB"/>} />
        <Route path="/galeria/:galleryId" element={<Galeria galerias={galerias} />} />
        <Route path="/jornal/:jornalId" element={<Jornal />} />
      </Routes>
      <Rodape />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
