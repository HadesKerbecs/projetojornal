import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
>>>>>>> fc7a1f277c1c445a00e39d1875c744c468d0ffc5
import Cabecalho from '../components/Cabecalho';
import PaginaCentral from '../components/PaginaCentral';
import Rodape from '../components/Rodape';
import Jornal from '../components/Jornal';
import Galeria from '../components/Galeria';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
=======
>>>>>>> fc7a1f277c1c445a00e39d1875c744c468d0ffc5

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
    <div>
      {RotasComCabecalho() && <Cabecalho />}
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<PaginaCentral onAddPhoto={handleAddPhoto} onRemovePhoto={handleRemovePhoto}/>} />
=======
        <Route path="/" element={<PaginaCentral onAddPhoto={handleAddPhoto} onRemovePhoto={() => {}} />} />
>>>>>>> fc7a1f277c1c445a00e39d1875c744c468d0ffc5
        <Route path="/galeria/:galleryId" element={<Galeria galerias={galerias} />} />
        <Route path="/jornal/:jornalId" element={<Jornal />} />
      </Routes>
      <Rodape />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
