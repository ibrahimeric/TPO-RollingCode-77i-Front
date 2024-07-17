import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/PetList.css";
import { jwtDecode } from "jwt-decode"; // Importing as default
import config from "../utils/config";

const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const backServerUrl = config.backServerUrl;
  const [userId, setUserId] = useState();

  
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

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const petImage = (pet) => {
    return pet.imagen ? pet.imagen : "src/assets/pet.imagen.jpg";
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

return (
    <Container className="container-petlist">
      <h1 className="h1-petlist">Listado de Mascotas</h1>
      <div className="pet-card-header">
        <Form.Control
          type="text"
          placeholder="Buscar mascota por nombre"
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-3"
        />

      </div>
      <Table striped bordered hover responsive className="table-petlist">
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
                />
              </td>
              <td>{pet.name}</td>
              <td>{pet.raice}</td>
              <td>{pet.age} años</td>
              <td>{pet.sex}</td>
              <td>{pet.species}</td>
              <td>
                <Link to={`/mascota/${pet._id}/adopt`}>
                  <Button variant="primary" className="btn-primary-petlist">Ver Detalles</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Adoption;