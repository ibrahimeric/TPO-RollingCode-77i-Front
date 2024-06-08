// src/components/PetAdd.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PetAdd = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);


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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('pet/register/:ownerId', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet) // Enviar el objeto newPet como JSON en el cuerpo de la solicitud
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Redirigir a la página de listado de mascotas después de agregar
      history.push('/pets');
    } catch (error) {
      console.error('Error adding pet:', error);
      // Manejar el error, podrías establecer un estado de error para mostrar un mensaje al usuario
    }
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
              <Form.Control type="text" name="breed" value={newPet.race} onChange={handleInputChange} placeholder="Ingrese la raza de la mascota" />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" name="age" value={newPet.age} onChange={handleInputChange} placeholder="Ingrese la edad de la mascota" />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control as="select" name="gender" value={newPet.sex} onChange={handleInputChange}>
                <option value="Male">Macho</option>
                <option value="Female">Hembra</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control type="text" name="size" value={newPet.size} onChange={handleInputChange} placeholder="Ingrese el tamaño de la mascota" />
              <option value="Grande">Macho</option>
              <option value="Mediano">Mediano</option>
              <option value="Pequeño">Pequeño</option>
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Especie</Form.Label>
              <Form.Control type="select" name="species" value={newPet.species} onChange={handleInputChange} placeholder="Ingrese la especie de la mascota" />
                <option value="Canino">Canino</option>
                <option value="Felino">Felino</option>
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
