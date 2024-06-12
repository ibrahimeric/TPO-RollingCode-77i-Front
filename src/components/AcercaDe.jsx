import React from 'react';
import '../css/AcercaDe.css';
const AboutPage = () => {
  return (
    <div className="container">
      <h1>Acerca de</h1>
      <div className="card-container">
        <div className="card">
          <img src="imagen1.jpg" alt="Imagen 1" />
          <p>Descripción de la imagen 1.</p>
        </div>
        <div className="card">
          <img src="imagen2.jpg" alt="Imagen 2" />
          <p>Descripción de la imagen 2.</p>
        </div>
        <div className="card">
          <img src="imagen3.jpg" alt="Imagen 3" />
          <p>Descripción de la imagen 3.</p>
        </div>
        <div className="card">
          <img src="imagen4.jpg" alt="Imagen 4" />
          <p>Descripción de la imagen 4.</p>
        </div>
        <div className="card">
          <img src="imagen5.jpg" alt="Imagen 5" />
          <p>Descripción de la imagen 5.</p>
        </div>
        <div className="card">
          <img src="imagen6.jpg" alt="Imagen 6" />
          <p>Descripción de la imagen 6.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;