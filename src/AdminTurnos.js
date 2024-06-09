import React, { useState } from 'react';
import './App.css';

const database = {
  turnos: [
    { id: 1, mascota: 'Max', fecha: '2024-06-03' },
    { id: 2, mascota: 'Luna', fecha: '2024-06-04' },
    { id: 3, mascota: 'Charlie', fecha: '2024-06-05' },
    { id: 4, mascota: 'Bella', fecha: '2024-06-06' },
    { id: 5, mascota: 'Rocky', fecha: '2024-06-07' },
  ],
};

function AdminTurnos({ setPage }) {
  const [turnos, setTurnos] = useState(database.turnos);

  const handleChangeFecha = (id, newFecha) => {
    const updatedTurnos = turnos.map(turno =>
      turno.id === id ? { ...turno, fecha: newFecha } : turno
    );
    setTurnos(updatedTurnos);
  };

  return (
    <div className="admin-page">
      <h2>Administrar Turnos</h2>
      <ul className="item-list">
        {turnos.map(turno => (
          <li key={turno.id} className="item">
            <span>{turno.mascota} - {turno.fecha}</span>
            <div className="button-group">
              <button className="edit-button" onClick={() => handleChangeFecha(turno.id, prompt('Nueva fecha:'))}>Editar Fecha</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="nav-button" onClick={() => setPage('home')}>Volver a la página principal</button>
    </div>
  );
}

export default AdminTurnos;
