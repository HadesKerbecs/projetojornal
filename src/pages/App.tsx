import React from 'react';
import CabecalhoGaleria from '../components/Cabecalho/CabecalhoGaleria';
import CabecalhoJornal from '../components/Cabecalho/CabecalhoJornal';
import CabecalhoPaginaCentral from '../components/Cabecalho';
import PaginaCentral from '../components/PaginaCentral';
import Rodape from '../components/Rodape';
import Jornal from '../components/Jornal';
import Galeria from '../components/Galeria';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from '../components/Pagina404';
import useGaleria from '../components/State/Hooks/useGaleria';

export interface GaleriaInterface {
  [key: string]: string[];
}

const AppContent = () => {
  const location = useLocation();
  const { galerias, handleAddPhoto } = useGaleria();

  const renderCabecalho = () => {
    if (location.pathname.includes('/galeria')) {
      return <CabecalhoGaleria />;
    }
    if (location.pathname.includes('/jornal')) {
      return <CabecalhoJornal />;
    }
    if (location.pathname === '/') {
      return <CabecalhoPaginaCentral />;
    }
    return null;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>{renderCabecalho()}</header>

      <main style={{ flex: 1, marginBottom: 'auto' }}>
        <Routes>
          <Route path="/" element={<PaginaCentral onAddPhoto={handleAddPhoto} />} />
          <Route path="/galeria/:galleryId" element={<Galeria galerias={galerias} />} />
          <Route path="/jornal/:jornalId" element={<Jornal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <Router basename='/projetojornal'>
        <AppContent />
      </Router>
    </RecoilRoot>
  );
};

export default App;