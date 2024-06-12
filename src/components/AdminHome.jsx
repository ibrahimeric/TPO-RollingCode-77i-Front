import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import { jwtDecode } from 'jwt-decode';

//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcxODE2MzYxMSwiZXhwIjoxNzE4MTY3MjExfQ.vN360f4lN96TKonIZAi9WzSJpt9WqaglKFdAB4h6oIo"



function AdminHomePage({ setPage }) {
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

      /* const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            return;
        } */

        // let userId = '666329fd7f4df62bdfa19115'  
        /* try {
           const decodedToken = jwtDecode(token);
           userId = decodedToken.id;
           console.log(userId);
       } catch (error) {
           setError('Invalid token');
           console.error('Error decoding token:', error);
           return;
       } */


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

  return (
    <div className="admin-home-page">
      <h1>Bienvenido Administrador</h1>
      <p>Turnos asignados:</p>
      {error && <p className="error-message">{error}</p>}
      <ul className="item-list">
        {turnos.map(turno => (
          <li key={turno._id} className="item">
            <span>{turno.pet ? turno.pet.name : "Sin Mascota"} - {turno.type} - {new Date(turno.date).toLocaleDateString()}</span>
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
