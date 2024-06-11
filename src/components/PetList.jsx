import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/PetList.css';
import {jwtDecode} from 'jwt-decode'; // Importing as default

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      return;
    }

    let userId;
    try {
      const decodedToken = jwtDecode(token); 
      userId = decodedToken.id; 
      console.log(userId);
    } catch (error) {
      setError('Invalid token');
      console.error('Error decoding token:', error);
      return;
    }

    const fetchPets = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}/pets`, {  
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            setError('Unauthorized access. Please check your token.');
          } else {
            setError('Network response was not ok');
          }
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        console.log('API response data:', data); // Log the response data

        // Ensure data.pets is an array
        if (Array.isArray(data.pets)) {
          setPets(data.pets);
        } else {
          throw new Error('Received data.pets is not an array');
        }
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

  const petImage = (pet) => {
    return pet.imagen ? pet.imagen : 'src/assets/pet.imagen.jpg';
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <h1 className="my-4">Listado de Mascotas</h1>
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
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Edad</th>
            <th>Sexo</th>

            <th>Especie</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredPets.map((pet) => (
            <tr key={pet._id}>
              <td>
                <img 
                  src={petImage(pet)} 
                  alt={pet.name} 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                />
              </td>
              <td>{pet.name}</td>
              <td>{pet.raice}</td>
              <td>{pet.age} años</td>
              <td>{pet.sex}</td>

              <td>{pet.species}</td>
              <td>
                <Link to={`/pet/${pet._id}`}>
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