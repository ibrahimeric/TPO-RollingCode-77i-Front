import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import config from '../utils/config';

const PetDetail = () => {
  const backServerUrl = config.backServerUrl;

  const { id } = useParams();
  console.log(id);

  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Image src={pet.image} alt={pet.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{pet.name}</h2>
          <p><strong>Raza:</strong> {pet.race}</p>
          <p><strong>Edad:</strong> {pet.age} años</p>
          <p><strong>Sexo:</strong> {pet.sex}</p>
          {/* <p><strong>Tamaño:</strong> {pet.size}</p> */}
          <p><strong>Especie:</strong> {pet.species}</p>
          <Link to={`/mascota/${id}/edit`}><Button>Editar</Button></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PetDetail;
