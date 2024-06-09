// src/components/PetCard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/PetCard.css';

const PetCard = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/pet', {  
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPets(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching pets:', error);
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
        <Card key={pet._id} className="mb-3">
          <Card.Img variant="top" src={petimagen(pet)} alt={pet.name} />
          <Card.Body>
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>
              <strong>Raza:</strong> {pet.breed}<br />
              <strong>Edad:</strong> {pet.age} años<br />
              <strong>Sexo:</strong> {pet.gender}<br />
              <strong>Tamaño:</strong> {pet.size}<br />
              <strong>Especie:</strong> {pet.species}
            </Card.Text>
            <Link to={`/pet/${pet._id}/edit`}>
              <Button variant="primary">Editar</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PetCard;
