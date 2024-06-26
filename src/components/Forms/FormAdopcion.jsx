import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react'; // Importa useState desde react
import '../../css/Forms-styles/Form.css';

function FormAdopcion({ formData, showModal, closeModal}) {
  // Agrega el estado local para formData
  const [localFormData, setLocalFormData] = useState(formData);

  // Función para manejar cambios en los campos del formulario
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setLocalFormData({
      ...localFormData,
      [name]: value
    });
  };

  return (
    <Modal show={showModal} onHide={closeModal} className="modal">
      <Modal.Header className='modal-header-adoption' closeButton>
        <div className='titulo-form'>
          <Modal.Title>Solicitar Adopcion</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={closeModal}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className='text-label'>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={localFormData.name} // Usa localFormData en lugar de formData
              onChange={handleFormChange} // Usa handleFormChange en lugar de handleChange
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='text-label'>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={localFormData.email} // Usa localFormData en lugar de formData
              onChange={handleFormChange} // Usa handleFormChange en lugar de handleChange
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
              value={localFormData.message} // Usa localFormData en lugar de formData
              onChange={handleFormChange} // Usa handleFormChange en lugar de handleChange
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
