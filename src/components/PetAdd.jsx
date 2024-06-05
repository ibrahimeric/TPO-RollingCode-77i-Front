// src/components/PetAdd.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PetAdd = () => {
  const history = useHistory();
  const [newPet, setNewPet] = useState({
    name: '',
    breed: '',
    age: '',
    gender: 'Macho', // Valor por defecto
    size: '',
    species: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPet({
      ...newPet,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para guardar los datos de la nueva mascota en la base de datos o hacer la solicitud al backend
    console.log('Nueva mascota:', newPet);
    // Redirigir a la página de listado de mascotas después de agregar
    history.push('/pets');
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={newPet.name} onChange={handleInputChange} placeholder="Ingrese el nombre de la mascota" />
            </Form.Group>
            <Form.Group controlId="formBreed">
              <Form.Label>Raza</Form.Label>
              <Form.Control type="text" name="breed" value={newPet.breed} onChange={handleInputChange} placeholder="Ingrese la raza de la mascota" />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" name="age" value={newPet.age} onChange={handleInputChange} placeholder="Ingrese la edad de la mascota" />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control as="select" name="gender" value={newPet.gender} onChange={handleInputChange}>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control type="text" name="size" value={newPet.size} onChange={handleInputChange} placeholder="Ingrese el tamaño de la mascota" />
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Especie</Form.Label>
              <Form.Control type="text" name="species" value={newPet.species} onChange={handleInputChange} placeholder="Ingrese la especie de la mascota" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Agregar Mascota
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PetAdd;
