import { Modal, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../css/Form.css';

function FormAdopcion({ formData, showModal, closeModal, userId, petId }) {
  const [localFormData, setLocalFormData] = useState(formData);

  useEffect(() => {
    setLocalFormData({ ...formData, userId, petId });
  }, [formData, userId, petId]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setLocalFormData({
      ...localFormData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar la data al servidor si es necesario
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal} className="modal">
      <Modal.Header className='modal-header-adoption' closeButton>
        <div className='titulo-form'>
          <Modal.Title>Solicitar Adopcion</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className='text-label'>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={localFormData.name}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='text-label'>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={localFormData.email}
              onChange={handleFormChange}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label className='text-label'>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa un Mensaje"
              name="message"
              value={localFormData.message}
              onChange={handleFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserId">
            <Form.Label className='text-label'>User ID</Form.Label>
            <Form.Control
              type="text"
              name="userId"
              value={localFormData.userId}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPetId">
            <Form.Label className='text-label'>Pet ID</Form.Label>
            <Form.Control
              type="text"
              name="petId"
              value={localFormData.petId}
              readOnly
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
