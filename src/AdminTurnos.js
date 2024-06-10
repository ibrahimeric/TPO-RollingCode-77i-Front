import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function AdminTurnos({ setPage }) {
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/appointments');
        setTurnos(response.data);
      } catch (err) {
        setError('Error fetching appointments');
        console.error('Error fetching appointments:', err);
      }
    };

    fetchTurnos();
  }, []);

  const handleChangeFecha = async (id, newFecha) => {
    try {
      await axios.put(`http://localhost:5000/admin/appointments/${id}`, { date: newFecha });
      const updatedTurnos = turnos.map(turno =>
        turno._id === id ? { ...turno, date: newFecha } : turno
      );
      setTurnos(updatedTurnos);
    } catch (err) {
      setError('Error updating turno');
      console.error('Error updating turno:', err);
    }
  };

  return (
    <div className="admin-page">
      <h2>Administrar Turnos</h2>
      {error && <p>{error}</p>}
      <ul className="item-list">
        {turnos.map(turno => (
          <li key={turno._id} className="item">
            <span>{turno.pet ? turno.pet.name : "Sin Mascota"} - {new Date(turno.date).toLocaleDateString()}</span>
            <div className="button-group">
              <button className="edit-button" onClick={() => handleChangeFecha(turno._id, prompt('Nueva fecha:'))}>Editar Fecha</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="nav-button" onClick={() => setPage('home')}>Volver a la página principal</button>
    </div>
  );
}

export default AdminTurnos;
