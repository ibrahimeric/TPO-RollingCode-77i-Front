// src/components/PetCard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/PetCard.css';
import { jwtDecode } from "jwt-decode";
import config from '../utils/config';

const PetCard = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    let userId;
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.id;
      console.log(userId);
    } catch (error) {
      setError("Invalid token");
      console.error("Error decoding token:", error);
      return;
    }

    const fetchPets = async () => {
      try {
        const response = await fetch(
          `${backServerUrl}user/${userId}/pets`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Unauthorized access. Please check your token.");
          } else {
            setError("Network response was not ok");
          }
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        console.log("API response data:", data); // Log the response data

        // Ensure data.pets is an array
        if (Array.isArray(data.pets)) {
          setPets(data.pets);
        } else {
          throw new Error("Received data.pets is not an array");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const petimagen = (pet) => {
    if (pet.imagen === undefined) {
      return 'src/assets/pet.imagen.jpg';
    } else {
      return pet.imagen;
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pet-card-container">
      <div className="pet-card-header">
        <Form.Control
          type="text"
          placeholder="Buscar mascota por nombre"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-3"
        />
        <Link to="/pet/add">
          <Button variant="success">
            Agregar otra mascota
          </Button>
        </Link>
      </div>
      {filteredPets.map((pet) => (
        <Card key={pet._id} className="pet-card mb-3">
          <Card.Img variant="top" src={petimagen(pet)} alt={pet.name} />
          <Card.Body>
            <Card.Title className="pet-card-title">{pet.name}</Card.Title>
            <Card.Text className="pet-card-text">
              <strong>Raza:</strong> {pet.race}<br />
              <strong>Edad:</strong> {pet.age} años<br />
              <strong>Sexo:</strong> {pet.sex}<br />
              <strong>Especie:</strong> {pet.species}
            </Card.Text>
            <Link to={`/mascota/${pet._id}/edit`}>
              <Button variant="primary" className="pet-btn-primary">Editar</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PetCard;
