import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import '../../src/css/PrivatePages-styles/TurnosPage.css';
import config from '../utils/config';

const TurnosPage = () => {
  const [turnos, setTurnos] = useState([]);
  const backServerUrl = config.backServerUrl;


  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }

  let userId;
  try {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.id;
  } catch (error) {
    console.error('Invalid token:', error);
    return;
  }

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get(`${backServerUrl}user/${userId}/get_appointments`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTurnos(response.data);
        console.log('IDs de los turnos:', response.data.map(turno => turno.id));
      } catch (error) {
        console.error('Error al obtener los turnos:', error);
      }
    };

    fetchTurnos();
  }, [userId, token]);

  const cancelarTurno = async (userId, appointmentId) => {
    try {
      await axios.delete(`${backServerUrl}user/${userId}/${appointmentId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTurnos(turnos.filter(turno => turno._id !== appointmentId));
      console.log(`Se ha cancelado el turno con ID ${appointmentId}`);
    } catch (error) {
      console.error('Error al cancelar el turno:', error);
    }
  };

  return (
    <div className='contenedor'>
      <Container>
      <Link to="/turnos/add">
          <Button variant="success">Solicitar Nuevo Turno</Button>
        </Link>
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