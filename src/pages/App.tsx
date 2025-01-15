import React from 'react';
import Cabecalho from '../components/Cabecalho';
import PaginaCentral from '../components/PaginaCentral';
import Fotos from '../components/Fotos';
import Rodape from '../components/Rodape';
import Jornal from '../components/Jornal';
import Galeria from '../components/Galeria';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();

  const RotasSemCabecalho = ['/galeria/:galleryId', '/journal/:journalId'];

  const RotasComCabecalho = () => {
    return !RotasSemCabecalho.some((rota) => {
      const rotaRegex = new RegExp(`^${rota.replace(/:\w+/g, '\\w+')}$`);
      return rotaRegex.test(location.pathname);
    });
  };

  return (
    <div>
      {/* Renderiza o cabeçalho padrão apenas se a rota permitir */}
      {RotasComCabecalho() && <Cabecalho />}
      <Routes>
        <Route path="/" element={<PaginaCentral />} />
        <Route path="/galeria/:galleryId" element={<Galeria />} />
        <Route path="/journal/:journalId" element={<Jornal />} />
      </Routes>
      <Fotos />
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
