// src/components/PetCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PetsExamples from '../examples/PetsExamples';
import '../css/PetCard.css';

const PetCard = ({Pets}) => { // Asegúrate de recibir id como una prop
  const pets = PetsExamples;

  return (
    <div className="pet-card-container">
      {pets.map((pet) => (
        <Card key={pet.id} className="mb-3">
          <Card.Img variant="top" src={pet.image} alt={pet.name} />
          <Card.Body>
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>
              <strong>Raza:</strong> {pet.breed}<br />
              <strong>Edad:</strong> {pet.age} años<br />
              <strong>Sexo:</strong> {pet.gender}<br />
              <strong>Tamaño:</strong> {pet.size}<br />
              <strong>Especie:</strong> {pet.species}
            </Card.Text>
            <Link to={`/pet/${pet.id}/edit`}> 
              <Button variant="primary">Editar</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PetCard;
