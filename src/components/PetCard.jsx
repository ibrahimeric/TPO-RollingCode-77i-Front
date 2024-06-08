// src/components/PetCard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/PetCard.css';

const PetCard = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div>Error: {error}</div>;
  }
  const petimagen = (pet) => {
    // Verificar si pet.imagen es undefined
    if (pet.imagen === undefined) {
      // Si pet.imagen es undefined, retornar la imagen predeterminada
      return 'src/assets/pet.imagen.jpg';
    } else {
      // Si pet.imagen está definida, retornar la imagen de pet
      return pet.imagen;
    }
  };
  
  return (
    <div className="pet-card-container">
      {pets.map((pet) => (
        <Card key={pet.id} className="mb-3">
          <Card.Img variant="top" src={petimagen} alt={pet.name} />
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
