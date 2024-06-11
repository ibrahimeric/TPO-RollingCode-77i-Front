import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { pets } from '../js/data'
import '../css/PetsPage.css'
import { Link } from 'react-router-dom';

const TurnosPage = () => {
  return (
    <div className='contenedor-mascotas'>
      <Container className='contenedor-color'>
        <h1 className="text-center-mascotas">Mis Mascotas</h1>
        <div className='table-responsive'>
          <Table striped bordered hover className='table-mascotas'>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre de la Mascota</th>
                <th>Servicio solicitado</th>
                <th>Fecha de ingreso</th>
                <th>Cancelar Mascota</th>
              </tr>
            </thead>
            <tbody>
              {pets.map(pets => (
                <tr key={pets.id}>
                  <td><img src={pets.urlImage} alt="Mascota" className='imagen-tabla-mascotas' /></td>
                  <td>{pets.nombreMascota}</td>
                  <td>{pets.servicioSolicitado}</td>
                  <td>{pets.fecha}</td>
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