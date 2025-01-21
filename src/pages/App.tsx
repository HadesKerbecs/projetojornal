import React, { useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import PaginaCentral from '../components/PaginaCentral';
import Rodape from '../components/Rodape';
import Jornal from '../components/Jornal';
import Galeria from '../components/Galeria';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';

export interface GaleriaInterface {
  [key: string]: string[];
}

const AppContent = () => {
  const location = useLocation();

  const [galerias, setGalerias] = useState<GaleriaInterface>({
    gustavo: [], joaovitor: [], eduardo: [], murilo: [],
    luizfelipe: [], gabriel: [], matheus: [], wallison: [],
    kelvi: [], luizhenrique: [], lucas: [], lucas2: [],
    arthur: [], elias: [], nathan: [], jorgevitor: [],
    vinicius: [],
  });

  const handleAddPhoto = (id: string, photo: string) => {
    setGalerias((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), photo],
    }));
  };

  const RotasSemCabecalho = ['/galeria/:galleryId', '/jornal/:jornalId'];
  const RotasComCabecalho = () => {
    return !RotasSemCabecalho.some((rota) => {
      const rotaRegex = new RegExp(`^${rota.replace(/:\w+/g, '\\w+')}$`);
      return rotaRegex.test(location.pathname);
    });
  };

  return (
    <div className={styles.app}>
      {RotasComCabecalho() && <Cabecalho />}
      <main className={styles.content}>
      <Routes>
        <Route path="/" element={<PaginaCentral onAddPhoto={handleAddPhoto}/>} />
        <Route path="/galeria/:galleryId" element={<Galeria galerias={galerias} />} />
        <Route path="/jornal/:jornalId" element={<Jornal />} />
      </Routes>
      </main>
      <Rodape />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename='/projetojornal'>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
