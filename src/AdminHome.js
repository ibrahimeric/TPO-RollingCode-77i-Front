import React from 'react';
import './App.css';

const database = {
  turnos: [
    { id: 1, mascota: 'Max', fecha: '2024-06-03' },
    { id: 2, mascota: 'Luna', fecha: '2024-06-04' },
    { id: 3, mascota: 'Charlie', fecha: '2024-06-05' },
    { id: 4, mascota: 'Bella', fecha: '2024-06-06' },
    { id: 5, mascota: 'Rocky', fecha: '2024-06-07' },
  ]
};

function AdminHomePage({ setPage }) {
  return (
    <div className="admin-home-page">
      <h1>Bienvenido Administrador</h1>
      <p>Turnos asignados:</p>
      <ul className="item-list">
        {database.turnos.map(turno => (
          <li key={turno.id} className="item">
            <span>{turno.mascota} - {turno.fecha}</span>
          </li>
        ))}
      </ul>
      <nav>
        <ul className="nav-list">
          <li><button className="nav-button" onClick={() => setPage('mascotas')}>Administrar Mascotas</button></li>
          <li><button className="nav-button" onClick={() => setPage('turnos')}>Administrar Turnos</button></li>
          <li><button className="nav-button" onClick={() => setPage('adopciones')}>Administrar Adopciones</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminHomePage;
