import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import config from '../utils/config';
import '../css/Form.css';

function FormAdopcion({ showModal, closeModal, userId, petId }) {
  const [localFormData, setLocalFormData] = useState({
    homeDescription: '',
    lifestyle: '',
  });
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    setLocalFormData({ ...localFormData, userId, petId });
  }, [userId, petId]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setLocalFormData({
      ...localFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      console.log('Decoded Token on Submit:', decodedToken);

      if (!decodedToken) {
        throw new Error('Invalid token');
      }

      const response = await axios.post(
        `${backServerUrl}user/adoption/adopt`,
        localFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Response:', response.data);
      closeModal();
    } catch (error) {
      console.error('Error al enviar la solicitud de adopción', error);
      setError(error.message);
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal} className="modal">
      <Modal.Header className="modal-header-adoption" closeButton>
        <div className="titulo-form">
          <Modal.Title>Solicitar Adopción</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formHomeDescription">
            <Form.Label className="text-label">Descripción del Hogar</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe tu hogar"
              name="homeDescription"
              value={localFormData.homeDescription}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLifestyle">
            <Form.Label className="text-label">Estilo de Vida</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe tu estilo de vida"
              name="lifestyle"
              value={localFormData.lifestyle}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" className="btn-submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormAdopcion;
