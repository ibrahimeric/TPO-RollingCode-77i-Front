import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { turnos } from '../js/data';
import '../css/TurnosPage.css'
import { Link } from 'react-router-dom';

const TurnosPage = () => {
  const cancelarTurno = (id) => {
    // Lógica para cancelar el turno con el ID proporcionado
    console.log(`Se ha cancelado el turno con ID ${id}`);
  };
  return (
    <div className='contenedor'>
      <Container>
        <h1 className="text-center">Mis Turnos</h1>
        <div className='table-responsive'>
          <Table striped bordered hover className='table'>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre de la Mascota</th>
                <th>Tipo de Servicio</th>
                <th>Fecha del Turno</th>
                <th>Cancelar Turno</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map(turno => (
                <tr key={turno.id}>
                  <td><img src={turno.urlImage} alt="Mascota" className='imagen-tabla' /></td>
                  <td>{turno.nombreMascota}</td>
                  <td>{turno.tipoServicio}</td>
                  <td>{turno.fecha}</td>
                  <td><Button variant="danger" onClick={() => cancelarTurno(turno.id)}>Cancelar</Button></td>
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

