import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {jwtDecode} from "jwt-decode"; // Importar jwtDecode correctamente
import axios from 'axios';
import config from "../utils/config";

const PetEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Para redireccionar después de la eliminación
  const [pet, setPet] = useState(null);
  const [editedPet, setEditedPet] = useState({});
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl

  useEffect(() => {
    const fetchPetDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        if (!decodedToken) {
          throw new Error("Invalid token");
        }

        const response = await fetch(`${backServerUrl}pet/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPet(data);
        setEditedPet(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPet({
      ...editedPet,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      if (!decodedToken) {
        throw new Error("Invalid token");
      }

      const formData = new FormData();
      formData.append("name", editedPet.name);
      formData.append("race", editedPet.race);
      formData.append("age", editedPet.age);
      formData.append("sex", editedPet.sex);
      formData.append("species", editedPet.species);
      if (editedPet.image) {
        formData.append("image", editedPet.image);
      }

      const response = await fetch(`${backServerUrl}pet/${id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Manejar actualización exitosa, redireccionar o mostrar mensaje de éxito
      navigate('/pets'); // Redireccionar a la lista de mascotas
    } catch (error) {
      console.error("Error updating pet:", error);
      setError(error.message);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditedPet({
        ...editedPet,
        image: file,
      });
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    try {
      await axios.delete(`${backServerUrl}delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      navigate('/pets'); // Redireccionar después de la eliminación
    } catch (err) {
      setError('Error deleting pet');
      console.error('Error deleting pet:', err);
    }
  };

  if (error) {
    return <p className="text-danger mt-3">Error: {error}</p>;
  }

  if (!pet) {
    return <p>Loading...</p>;
  }

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
                value={editedPet.name}
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
                value={editedPet.race}
                onChange={handleInputChange}
                placeholder="Ingrese la raza de la mascota"
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={editedPet.age}
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
                value={editedPet.sex}
                onChange={handleInputChange}
              >
                <option value="male">Macho</option>
                <option value="female">Hembra</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Especie</Form.Label>
              <Form.Control
                as="select"
                name="species"
                value={editedPet.species}
                onChange={handleInputChange}
              >
                <option value="canine">Canino</option>
                <option value="feline">Felino</option>
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
              Actualizar Mascota
            </Button>
            <Button variant="danger" type="button" onClick={handleDelete} className="ml-2">
              Eliminar Mascota
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">Error: {error}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default PetEdit;
