import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect
import { Button, Container, Table } from 'react-bootstrap'; // Importa componentes de React Bootstrap
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP
import '../css/TurnosPage.css'; // Importa el archivo de estilos CSS

const TurnosPage = () => {
  const [turnos, setTurnos] = useState([]); // Declara el estado turnos, inicializado como un array vacío
  const userId = '6667a85b7da962f4c6e3959a'; // Declara una variable userId (esto es solo un ejemplo, en una aplicación real obtendrás este ID dinámicamente)

  useEffect(() => {
    // useEffect se ejecuta al montar el componente y cuando userId cambia
    const fetchTurnos = async () => {
      // Define una función asincrónica para obtener los turnos
      try {
        const response = await axios.get(`https://back-rum-rolling.onrender.com/user/${userId}/get_appointments`); // Hace una solicitud GET para obtener los turnos del usuario
        setTurnos(response.data); // Actualiza el estado turnos con los datos recibidos
        console.log('IDs de los turnos:', response.data.map(turno => turno.id)); // Imprime los IDs de los turnos en la consola
      } catch (error) {
        console.error('Error al obtener los turnos:', error); // Maneja errores en la solicitud
      }
    };

    fetchTurnos(); // Llama a la función para obtener los turnos
  }, [userId]); // userId es una dependencia del useEffect, se ejecutará nuevamente si userId cambia

  const cancelarTurno = async (userId, appointmentId) => {
    // Define una función asincrónica para cancelar un turno
    try {
      await axios.delete(`http://localhost:5000/user/${userId}/${appointmentId}`); // Hace una solicitud DELETE para cancelar el turno
      setTurnos(turnos.filter(turno => turno._id !== appointmentId)); // Filtra el turno cancelado del estado
      console.log(`Se ha cancelado el turno con ID ${appointmentId}`); // Imprime un mensaje de confirmación en la consola
    } catch (error) {
      console.error('Error al cancelar el turno:', error); // Maneja errores en la solicitud
    }
  };

  return (
    <div className='contenedor'> {/* Contenedor principal con clase 'contenedor' */}
      <Container> {/* Contenedor de React Bootstrap */}
        <h1 className="text-center">Mis Turnos</h1> {/* Título centrado */}
        <div className='table-responsive'> {/* Contenedor para hacer la tabla responsive */}
          <Table striped bordered hover className='table'> {/* Tabla con clases de Bootstrap */}
            <thead> {/* Encabezado de la tabla */}
              <tr>
                <th>Tipo de Cita</th>
                <th>Fecha de La Cita</th>
                <th>Mascota</th>
                <th>Cancelar Turno</th>
              </tr>
            </thead>
            <tbody> {/* Cuerpo de la tabla */}
              {turnos.map((turno, index) => ( // Mapea sobre los turnos para crear una fila por cada turno
                <tr key={index}> {/* Cada fila de la tabla */}
                  <td>{turno.type}</td> {/* Muestra el tipo de cita */}
                  <td>{turno.date}</td> {/* Muestra la fecha de la cita */}
                  <td>{turno.pet ? turno.pet.name : 'Sin mascota'}</td> {/* Muestra el nombre de la mascota o 'Sin mascota' */}
                  <td><Button variant="danger" onClick={() => cancelarTurno(turno.user, turno._id)}>Cancelar</Button></td> {/* Botón para cancelar el turno */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='btn-volver'> {/* Contenedor para el botón de regresar */}
          <Link to="/"> {/* Enlace a la página principal */}
            <Button variant="primary">Regresar</Button> {/* Botón de regresar */}
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default TurnosPage; // Exporta el componente TurnosPage
