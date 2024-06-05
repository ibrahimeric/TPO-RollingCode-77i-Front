// src/components/PetDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import PetsExamples from '../examples/PetsExamples';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PetDetail = () => {
  const { id } = useParams();
  const pet = PetsExamples.find(pet => pet.id === parseInt(id));

  if (!pet) {
    return <p>Mascota no encontrada</p>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Image src={pet.image} alt={pet.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{pet.name}</h2>
          <p><strong>Raza:</strong> {pet.breed}</p>
          <p><strong>Edad:</strong> {pet.age} años</p>
          <p><strong>Sexo:</strong> {pet.gender}</p>
          <p><strong>Tamaño:</strong> {pet.size}</p>
          <p><strong>Especie:</strong> {pet.species}</p>
          <Link to={`/pet/${id}/edit`}><Button>Editar</Button></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PetDetail;
