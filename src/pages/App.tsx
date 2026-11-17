import React from "react";

import CabecalhoGaleria from "../components/Cabecalho/CabecalhoGaleria";
import CabecalhoJornal from "../components/Cabecalho/CabecalhoJornal";
import CabecalhoPaginaCentral from "../components/Cabecalho";

import PaginaCentral from "../components/PaginaCentral";
import Rodape from "../components/Rodape";
import Jornal from "../components/Jornal";
import Galeria from "../components/Galeria";
import NotFound from "../components/Pagina404";

import { RecoilRoot } from "recoil";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import useGaleria from "../components/State/Hooks/useGaleria";

export interface GaleriaInterface {
  [key: string]: string[];
}

const AppContent = () => {
  const location = useLocation();
  const { galerias, handleAddPhoto } = useGaleria();

  const renderCabecalho = () => {
    const pathname = location.pathname;

    if (pathname.startsWith("/galeria")) {
      return <CabecalhoGaleria />;
    }

    if (pathname.startsWith("/jornal")) {
      return <CabecalhoJornal />;
    }

    if (pathname === "/") {
      return <CabecalhoPaginaCentral />;
    }

    return null;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header>{renderCabecalho()}</header>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={<PaginaCentral onAddPhoto={handleAddPhoto} />}
          />

          <Route
            path="/galeria/:galleryId"
            element={<Galeria galerias={galerias} />}
          />

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
      <Router basename="/projetojornal">
        <AppContent />
      </Router>
    </RecoilRoot>
  );
};

export default App;
