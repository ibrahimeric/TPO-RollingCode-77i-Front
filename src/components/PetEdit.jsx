import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {jwtDecode} from "jwt-decode";
import axios from 'axios';
import config from "../utils/config";
import "../css/PetEdit.css";

const PetEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [editedPet, setEditedPet] = useState({});
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    const fetchPetDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        if (!decodedToken) {
          throw new Error("Invalid token");
        }

        const response = await fetch(`${backServerUrl}pet/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        console.log("Fetch Response Status:", response.status);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Pet Data:", data);
        setPet(data);
        setEditedPet(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [id, backServerUrl]);

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
      console.log("Decoded Token on Submit:", decodedToken);

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

      console.log("Form Data to Submit:", formData);

      const response = await fetch(`${backServerUrl}pet/update/${id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      console.log("Update Response Status:", response.status);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      
      navigate('/mascotas');
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
      await axios.delete(`${backServerUrl}pet/delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      navigate('/mascotas');
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
                value={editedPet.name || ''}
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
                value={editedPet.race || ''}
                onChange={handleInputChange}
                placeholder="Ingrese la raza de la mascota"
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={editedPet.age || ''}
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
                value={editedPet.sex || ''}
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
                value={editedPet.species || ''}
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
            <Button variant="primary" type="submit" onClick={handleSubmit}>
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