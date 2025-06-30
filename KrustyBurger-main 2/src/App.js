import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import KrustyHeader from './components/krusty-header';
import KrustyFooter from './components/krusty-footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Ubicaciones from './pages/Ubicaciones';
import Nosotros from './pages/Nosotros';
import Pedido from './pages/Pedido';

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <KrustyHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/pedido" element={<Pedido />} />
          </Routes>
        </main>
        <KrustyFooter />
      </div>
    </Router>
  );
}

export default App; 