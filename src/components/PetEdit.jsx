// src/components/PetEdit.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PetsExamples from '../examples/PetsExamples';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PetEdit = () => {
  const { id } = useParams();
  const pet = PetsExamples.find(pet => pet.id === parseInt(id));    //agregar back
  const [editedPet, setEditedPet] = useState({ ...pet });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPet({
      ...editedPet,
      [name]: value
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para guardar los cambios en la base de datos o hacer la solicitud al backend
    console.log('Pet edited:', editedPet);
    history.push(`/pets`);
  };

  const handleDelete = () => {
    // Aquí puedes agregar la lógica para eliminar la mascota
    console.log("Mascota eliminada:", id);
    // Después de eliminar la mascota, redirige a la página de listado de mascotas
    history.push('/pets');
  };
  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={editedPet.name} onChange={handleInputChange} placeholder="Ingrese el nombre de la mascota" />
            </Form.Group>
            <Form.Group controlId="formBreed">
              <Form.Label>Raza</Form.Label>
              <Form.Control type="text" name="breed" value={editedPet.breed} onChange={handleInputChange} placeholder="Ingrese la raza de la mascota" />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" name="age" value={editedPet.age} onChange={handleInputChange} placeholder="Ingrese la edad de la mascota" />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control as="select" name="gender" value={editedPet.gender} onChange={handleInputChange}>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control type="text" name="size" value={editedPet.size} onChange={handleInputChange} placeholder="Ingrese el tamaño de la mascota" />
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Especie</Form.Label>
              <Form.Control type="text" name="species" value={editedPet.species} onChange={handleInputChange} placeholder="Ingrese la especie de la mascota" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={4}>
          <h2>Vista Previa</h2>
          <p><strong>Nombre:</strong> {editedPet.name}</p>
          <p><strong>Raza:</strong> {editedPet.breed}</p>
          <p><strong>Edad:</strong> {editedPet.age} años</p>
          <p><strong>Sexo:</strong> {editedPet.gender}</p>
          <p><strong>Tamaño:</strong> {editedPet.size}</p>
          <p><strong>Especie:</strong> {editedPet.species}</p>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Guardar Cambios
            </Button>
            <Button variant="danger" type="submit" onClick={handleDelete}>
              Eliminar Mascota
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PetEdit;
