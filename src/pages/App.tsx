import React from 'react';
import Cabecalho from '../components/Cabecalho';
import PaginaCentral from '../components/PaginaCentral';
import Fotos from '../components/Fotos';
import Rodape from '../components/Rodape';
import VisualizarFotos from '../components/VisualizarFotos';
import Jornal from '../components/Jornal';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Cabecalho />
      <PaginaCentral />
      <Router>
        <Routes>
          <Route path="/photo-view" element={<VisualizarFotos />} />
        </Routes>
      </Router>
      <Fotos />
      <Rodape />
      <Router>
        <Routes>
          <Route path="/journal/:journalId" element={<Jornal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
