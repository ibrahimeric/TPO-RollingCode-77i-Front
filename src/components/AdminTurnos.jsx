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

  const handleDeleteFecha = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/appointments/delete/${id}`);
      const updatedTurnos = turnos.map(turno =>
        turno._id === id ? { ...turno, date: null } : turno
      );
      setTurnos(updatedTurnos);
    } catch (err) {
      setError('Error deleting fecha');
      console.error('Error deleting fecha:', err);
    }
  };

  return (
    <div className="admin-page">
      <h2>Administrar Turnos</h2>
      {error && <p>{error}</p>}
      <ul className="item-list">
        {turnos.map(turno => (
          <li key={turno._id} className="item">
            <span>{turno.pet ? turno.pet.name : "Sin Mascota"} - {turno.type} - {new Date(turno.date).toLocaleDateString()}</span>
            <div className="button-group">
              <button className="delete-button" onClick={() => handleDeleteFecha(turno._id)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="nav-button" onClick={() => setPage('home')}>Volver a la página principal</button>
    </div>
  );
}

export default AdminTurnos;
