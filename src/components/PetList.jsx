import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/PetList.css';

const PetList = () => {
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

  return (
    <Container>
      <h1 className="my-4">Listado de Mascotas</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Tamaño</th>
            <th>Especie</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td><img src={pet.image || 'src/assets/pet.imagen.jpg'} alt={pet.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} /></td>
              <td>{pet.name}</td>
              <td>{pet.race}</td>
              <td>{pet.age} años</td>
              <td>{pet.sex}</td>
              <td>{pet.size}</td>
              <td>{pet.species}</td>
              <td>
                <Link to={`/pet/${pet.id}`}>
                  <Button variant="primary">Ver Detalles</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PetList;
