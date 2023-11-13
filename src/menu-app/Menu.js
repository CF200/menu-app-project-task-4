import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/menu/home">Home</Link>
        </li>
        <li>
          <Link to="/menu/galeria">Galería</Link>
        </li>
        <li>
          <Link to="/menu/nosotros">Opción 3</Link>
        </li>
        <li>
          <Link to="/menu/contacto">Opción 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
