import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import config from '../../utils/config';

function AdminTurnos({ setPage }) {
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl

  useEffect(() => {
    // Define tu variable de accessToken
    // const accessToken = 'tu_token_de_acceso_aqui';
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcxODIwNzg1MSwiZXhwIjoxNzE4MjExNDUxfQ.SV06qE_JHk21ioRP6ULJmvyxniv2NQ-SHrhKDy25_jQ';
    const fetchTurnos = async () => {
      try {
        const response = await axios.get(`${backServerUrl}admin/appointments`, {
          headers: {
            Authorization: 'Bearer ' + accessToken // Reemplaza accessToken con tu token de acceso válido
          }
        });
        setTurnos(response.data);
      } catch (err) {
        setError('Error fetching appointments');
        console.error('Error fetching appointments:', err);
      }
    };

    fetchTurnos();
  }, []);

  /* useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get(`${backServerUrl}admin/appointments`);
        setTurnos(response.data);
      } catch (err) {
        setError('Error fetching appointments');
        console.error('Error fetching appointments:', err);
      }
    };

    fetchTurnos();
  }, []);
 */
  const handleDeleteFecha = async (id) => {
    try {
      await axios.delete(`${backServerUrl}admin/appointments/delete/${id}`);
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
    <div className="admin-home-page">
      <h2>Administrar Turnos</h2>
      {error && <p>{error}</p>}
      <ul className="item-list">
        {error && <p className="error-message">{error}</p>}
        <ul className="item-list">
          {turnos.map(turno => (
            <li key={turno._id} className="item">
              <span>{turno.pet ? turno.pet.name : "Sin Mascota"} - {turno.type} - {new Date(turno.date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </ul>
      <Link to="/admin">
        <Button variant="primary">Regresar</Button>
      </Link>
    </div>
  );
}

export default AdminTurnos;
