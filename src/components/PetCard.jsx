import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PetCard = ({ pet }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={pet.image || 'src/assets/pet.imagen.jpg'} alt={pet.name} />
      <Card.Header as="h5">{pet.name}</Card.Header>
      <Card.Body>
        <Card.Title>{pet.species}</Card.Title>
        <Card.Text>
          <strong>Raza:</strong> {pet.breed}<br />
          <strong>Edad:</strong> {pet.age} años<br />
          <strong>Sexo:</strong> {pet.gender}<br />
          <strong>Tamaño:</strong> {pet.size}<br />
        </Card.Text>
        {//<Button variant="primary">Adoptar</Button>
}
      </Card.Body>
    </Card>
  );
};

export default PetCard;
