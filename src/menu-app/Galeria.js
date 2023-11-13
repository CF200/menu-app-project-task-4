import React, { useState, useEffect } from 'react';
import './Galeria.css';

const Galeria = () => {
  const imagenesIniciales = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  const [imagenes, setImagenes] = useState(imagenesIniciales);

  useEffect(() => {
    const actualizarImagenes = () => {
      const imagenesAleatorias = Array.from({ length: imagenesIniciales.length }, () =>
        `https://source.unsplash.com/random/150x150?sig=${Math.random()}`
      );
      setImagenes(imagenesAleatorias);
    };
  
    actualizarImagenes();
  }, [imagenesIniciales.length]);

  const cargarNuevasImagenes = () => {
    const nuevasImagenes = Array.from({ length: imagenesIniciales.length }, () =>
      `https://source.unsplash.com/random/150x150?sig=${Math.random()}`
    );
    setImagenes(nuevasImagenes);
  };

  return (
    <div>
      <h2>Mi Pequeña Galería</h2>
      <button onClick={cargarNuevasImagenes}>Cargar Nuevas Imágenes</button>
      <div className="galeria-container">
        {imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Imagen ${index + 1}`} className="imagen" />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
