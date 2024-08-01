import { useState, useEffect } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import config from '../utils/config';
import '../css/PetCard.css';
import FormAdopcion from './Forms/FormAdopcion';

const PetCardAdopt = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [userId, setUserId] = useState(null);
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    let decodedUserId;
    try {
      const decodedToken = jwtDecode(token);
      decodedUserId = decodedToken.id;
      setUserId(decodedUserId);
      console.log(decodedUserId);
    } catch (error) {
      setError("Invalid token");
      console.error("Error decoding token:", error);
      return;
    }

    const fetchPets = async (userId) => {
      try {
        const response = await fetch(
          `${backServerUrl}user/adoption/adopt_pets`,
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

        // Ensure data is an array
        if (Array.isArray(data)) {
          setPets(data);
        } else {
          throw new Error("Received data is not an array");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching pets:", error);
      }
    };

    if (decodedUserId) {
      fetchPets(decodedUserId);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const petimagen = (pet) => {
    if (!pet.imagen) {
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
            <Button variant="primary" className="pet-btn-primary" onClick={() => handleAdoptClick(pet)}>Solicitar Adopción</Button>
          </Card.Body>
        </Card>
      ))}
      {selectedPet && (<>
        <FormAdopcion
          formData={{ name: '', email: '', message: '' }}
          showModal={showModal}
          closeModal={closeModal}
          userId={userId}
          petId={selectedPet._id}
        />
        {console.log('user id:', userId)}
        {console.log('selectedPet:',selectedPet._id)}
        </>
      )}
    </div>
  );
};

export default PetCardAdopt;