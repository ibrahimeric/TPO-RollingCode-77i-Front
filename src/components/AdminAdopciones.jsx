import React, { useState } from 'react';

const database = {
  adopciones: [
    { id: 1, mascota: 'Max', adoptante: 'Juan Perez' },
    { id: 2, mascota: 'Luna', adoptante: 'Ana Gomez' },
    { id: 3, mascota: 'Charlie', adoptante: 'Carlos Ruiz' },
    { id: 4, mascota: 'Bella', adoptante: 'Maria Lopez' },
    { id: 5, mascota: 'Rocky', adoptante: 'Luis Martinez' },
  ],
};

function AdminAdopciones({ setPage }) {
  const [adopciones, setAdopciones] = useState(database.adopciones);

  const handleChangeAdoptante = (id, newAdoptante) => {
    const updatedAdopciones = adopciones.map(adopcion =>
      adopcion.id === id ? { ...adopcion, adoptante: newAdoptante } : adopcion
    );
    setAdopciones(updatedAdopciones);
  };

  const handleDeleteAdopcion = (id) => {
    const updatedAdopciones = adopciones.filter(adopcion => adopcion.id !== id);
    setAdopciones(updatedAdopciones);
  };

  return (
    <div className="admin-page">
      <h2>Administrar Adopciones</h2>
      <ul className="item-list">
        {adopciones.map(adopcion => (
          <li key={adopcion.id} className="item">
            <span>{adopcion.mascota} - Adoptante: {adopcion.adoptante}</span>
            <div className="button-group">
              <button className="edit-button" onClick={() => handleChangeAdoptante(adopcion.id, prompt('Nuevo adoptante:'))}>Editar Adoptante</button>
              <button className="delete-button" onClick={() => handleDeleteAdopcion(adopcion.id)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="nav-button" onClick={() => setPage('home')}>Volver a la página principal</button>
    </div>
  );
}

export default AdminAdopciones;
