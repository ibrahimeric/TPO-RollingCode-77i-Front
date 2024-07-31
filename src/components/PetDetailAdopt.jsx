import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import {jwtDecode} from 'jwt-decode';
import config from '../utils/config';
import FormAdopcion from './FormAdopcion';

const PetDetailAdopt = () => {
  const backServerUrl = config.backServerUrl;
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        if (!decodedToken) {
          throw new Error("Invalid token");
        }

        setUserId(decodedToken.user_id);

        const response = await fetch(`${backServerUrl}pet/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPet(data);
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

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Image src={pet.image} alt={pet.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{pet.name}</h2>
          <p><strong>Raza:</strong> {pet.breed}</p>
          <p><strong>Edad:</strong> {pet.age} años</p>
          <p><strong>Sexo:</strong> {pet.gender}</p>
          <p><strong>Tamaño:</strong> {pet.size}</p>
          <p><strong>Especie:</strong> {pet.species}</p>
          <Button onClick={openModal}>Solicitar Adopción</Button>
        </Col>
      </Row>
      <FormAdopcion
        formData={{ name: '', email: '', message: '' }}
        showModal={showModal}
        closeModal={closeModal}
        userId={userId}
        petId={id}
      />
    </Container>
  );
};

export default PetDetailAdopt;
