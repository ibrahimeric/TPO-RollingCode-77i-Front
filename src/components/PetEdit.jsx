import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PetEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [editedPet, setEditedPet] = useState({
    name: '',
    race: '',
    age: '',
    sex: 'Macho',
    size: '',
    species: '',
    image: null, // Agregar campo para la imagen
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/pet/${id}`);
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

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pet) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPet({
      ...editedPet,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setEditedPet({
      ...editedPet,
      image: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', editedPet.name);
    formData.append('breed', editedPet.breed);
    formData.append('age', editedPet.age);
    formData.append('gender', editedPet.gender);
    formData.append('size', editedPet.size);
    formData.append('species', editedPet.species);
    if (editedPet.image) {
      formData.append('image', editedPet.image);
    }

    try {
      const response = await fetch(`http://localhost:5000/pet/update/${id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Pet edited:', editedPet);
      navigate(`/pets`);
    } catch (error) {
      console.error('Error editing pet:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/pet/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log("Mascota eliminada:", id);
      navigate('/pets');
    } catch (error) {
      console.error('Error deleting pet:', error);
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
                value={editedPet.name}
                onChange={handleInputChange}
                placeholder="Ingrese el nombre de la mascota"
              />
            </Form.Group>
            <Form.Group controlId="formBreed">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                name="breed"
                value={editedPet.breed}
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
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={editedPet.gender}
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
                value={editedPet.size}
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
                value={editedPet.species}
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
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Eliminar Mascota
            </Button>
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
          {editedPet.image && (
  <img
    src={editedPet.image instanceof File ? URL.createObjectURL(editedPet.image) : editedPet.image}
    alt="Preview"
    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
  />
)}
        </Col>
      </Row>
    </Container>
  );
};

export default PetEdit;

