import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/TurnosPage.css';

const TurnosPage = () => {
  const [turnos, setTurnos] = useState([]);
  const userId = '6667a85b7da962f4c6e3959a'; // Esto es solo un ejemplo, asegúrate de obtener el ID del usuario de donde corresponda

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get(`https://back-rum-rolling.onrender.com/user/${userId}/get_appointments`);
        setTurnos(response.data);
        console.log('IDs de los turnos:', response.data.map(turno => turno.id));
      } catch (error) {
        console.error('Error al obtener los turnos:', error);
      }
    };

    fetchTurnos();
  }, [userId]); // Agregar userId como dependencia

  const cancelarTurno = async (userId, appointmentId) => {
    try {
      await axios.delete(`http://localhost:5000/user/${userId}/${appointmentId}`);
      setTurnos(turnos.filter(turno => turno._id !== appointmentId)); // Aquí cambiamos turno.id por turno._id
      console.log(`Se ha cancelado el turno con ID ${appointmentId}`);
    } catch (error) {
      console.error('Error al cancelar el turno:', error);
    }
  };


  return (
    <div className='contenedor'>
      <Container>
        <h1 className="text-center">Mis Turnos</h1>
        <div className='table-responsive'>
          <Table striped bordered hover className='table'>
            <thead>
              <tr>
                <th>Tipo de Cita</th>
                <th>Fecha de La Cita</th>
                <th>Mascota</th>
                <th>Cancelar Turno</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno, index) => (
                <tr key={index}>
                  <td>{turno.type}</td>
                  <td>{turno.date}</td>
                  <td>{turno.pet ? turno.pet.name : 'Sin mascota'}</td>
                  <td><Button variant="danger" onClick={() => cancelarTurno(turno.user, turno._id)}>Cancelar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='btn-volver'>
          <Link to="/">
            <Button variant="primary">Regresar</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default TurnosPage;
