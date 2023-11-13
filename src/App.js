import React from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';
import './App.css';
import Menu from './menu-app/Menu';
import Home from './menu-app/Home';
import Galeria from './menu-app/Galeria';


const Option = () => {
  const { optionName } = useParams();
  const selectedOption = optionName || "No se ha seleccionado nada";

  return (
    <div>
      <h2>{selectedOption} Seleccionada</h2>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Menú del Proyecto</h1>
          <Menu />
          <div>
            <Routes>
              <Route path="/menu/:optionName" element={<Option />} />
              <Route path="/menu/home" element={<Home />} />
              <Route path="/menu/galeria" element={<Galeria />} />
              <Route path="/menu/nosotros" element={<Home />} />
              <Route path="/menu/contacto" element={<Galeria  />} />
            </Routes>
          </div>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
