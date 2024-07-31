import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {jwtDecode} from "jwt-decode";
import config from '../utils/config';

const PetAdd = () => {
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;
  const navigate = useNavigate();
  const [newPet, setNewPet] = useState({
    name: "",
    race: "",
    age: "",
    sex: "macho",
    species: "canino",
    image: null,
  });

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }
    try {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    } catch (error) {
      setError("Invalid token");
      console.error("Error decoding token:", error);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPet({
      ...newPet,
      [name]: value,
    });
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    const formData = new FormData();
    formData.append("name", newPet.name);
    formData.append("race", newPet.race);
    formData.append("age", newPet.age);
    formData.append("sex", newPet.sex);
    formData.append("species", newPet.species);
    if (newPet.image) {
      formData.append("image", newPet.image);
    }

    console.log("Form Data to be sent:");
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await fetch(`${backServerUrl}pet/register/${userId}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Network response was not ok");
      }
      console.log("Mascota agregada correctamente");
      navigate("/mascotas"); // Redirige a la ruta /mascotas después de agregar la mascota
    } catch (error) {
      console.error("Error adding pet:", error);
      setError(error.message);
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
                required
              />
            </Form.Group>
            <Form.Group controlId="formRace">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                name="race"
                value={newPet.race}
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
                required
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control
                as="select"
                name="sex"
                value={newPet.sex}
                onChange={handleInputChange}
              >
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
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
                <option value="canino">Canino</option>
                <option value="felino">Felino</option>
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
