import React, { useState } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormAdopcion from '../Forms/FormAdopcion';
import "../../css/PrivatePages-styles/AdopcionPage.css";

const AdopcionPage = () => {

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", formData);
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Container className="container-adopcion-page">
      <h1 className="h1-adopcion-page">Listado de Mascotas en Adopción</h1>
      <div className="pet-card-header">
        <Form.Control
          type="text"
          placeholder="Buscar mascota por nombre"
          className="mb-3"
        />
      </div>
      <Table striped bordered hover responsive className="table-adopcion-page">
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
          <tr>
            <td>
              <img
                src="https://via.placeholder.com/150"
                alt="Mascota"
                className="imagen-adopcion"
              />
            </td>
            <td>Mascota 1</td>
            <td>Raza 1</td>
            <td>5 años</td>
            <td>Macho</td>
            <td>Especie 1</td>
            <td>
              <Button variant="primary" className="btn-primary-adopcion" onClick={openModal}>
                Solicitar Adopción
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://via.placeholder.com/150"
                alt="Mascota"
                className="imagen-adopcion"
              />
            </td>
            <td>Mascota 2</td>
            <td>Raza 2</td>
            <td>3 años</td>
            <td>Hembra</td>
            <td>Especie 2</td>
            <td>
              <Button variant="primary" className="btn-primary-adopcion" onClick={openModal}>
                Solicitar Adopción
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      
          <FormAdopcion
            formData={formData}
            showModal={showModal}
            closeModal={closeModal}
          />
    </Container>
  );
};
export default AdopcionPage;
