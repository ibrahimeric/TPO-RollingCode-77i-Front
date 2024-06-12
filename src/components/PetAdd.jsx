// src/components/PetAdd.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PetAdd = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "Macho", 
    size: "",
    species: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPet({
      ...newPet,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/pet/register/:ownerId",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPet), // Enviar el objeto newPet como JSON en el cuerpo de la solicitud
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Redirigir a la página de listado de mascotas después de agregar
      navigate("/pets");
    } catch (error) {
      console.error("Error adding pet:", error);
      setError(error.message); // Manejar el error, podrías establecer un estado de error para mostrar un mensaje al usuario
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPet({
        ...newPet,
        image: file,
      });
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newPet.name}
                onChange={handleInputChange}
                placeholder="Ingrese el nombre de la mascota"
              />
            </Form.Group>
            <Form.Group controlId="formBreed">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                name="breed"
                value={newPet.breed}
                onChange={handleInputChange}
                placeholder="Ingrese la raza de la mascota"
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={newPet.age}
                onChange={handleInputChange}
                placeholder="Ingrese la edad de la mascota"
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={newPet.gender}
                onChange={handleInputChange}
              >
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control
                as="select"
                name="size"
                value={newPet.size}
                onChange={handleInputChange}
              >
                <option value="Grande">Grande</option>
                <option value="Mediano">Mediano</option>
                <option value="Pequeño">Pequeño</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Especie</Form.Label>
              <Form.Control
                as="select"
                name="species"
                value={newPet.species}
                onChange={handleInputChange}
              >
                <option value="Canino">Canino</option>
                <option value="Felino">Felino</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Agregar Mascota
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">Error: {error}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default PetAdd;
