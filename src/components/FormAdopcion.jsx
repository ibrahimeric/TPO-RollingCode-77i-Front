import { Modal, Form, Button } from 'react-bootstrap'; // Importa componentes necesarios desde react-bootstrap
import { useState } from 'react'; // Importa useState desde react para manejar el estado local
import '../css/Form.css'; // Importa estilos CSS para este componente

function FormAdopcion({ formData, showModal, closeModal }) {
  // Agrega el estado local para formData
  const [localFormData, setLocalFormData] = useState(formData);

  // Función para manejar cambios en los campos del formulario
  const handleFormChange = (event) => {
    const { name, value } = event.target; // Desestructura el nombre y el valor del campo del formulario que cambió
    setLocalFormData({
      ...localFormData, // Mantén el estado previo
      [name]: value // Actualiza solo el campo que cambió
    });
  };

  return (
    // Modal de react-bootstrap para mostrar el formulario de adopción
    <Modal show={showModal} onHide={closeModal} className="modal">
      {/* Encabezado del modal con un botón para cerrarlo */}
      <Modal.Header className='modal-header-adoption' closeButton>
        <div className='titulo-form'>
          <Modal.Title>Solicitar Adopcion</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        {/* Formulario que se envía al cerrar el modal */}
        <Form onSubmit={closeModal}>
          {/* Grupo de formulario para el nombre */}
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className='text-label'>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={localFormData.name} // Usa el estado local para el valor
              onChange={handleFormChange} // Llama a handleFormChange en cada cambio
            />
          </Form.Group>

          {/* Grupo de formulario para el correo */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='text-label'>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={localFormData.email} // Usa el estado local para el valor
              onChange={handleFormChange} // Llama a handleFormChange en cada cambio
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie.
            </Form.Text>
          </Form.Group>

          {/* Grupo de formulario para el mensaje */}
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label className='text-label'>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa un Mensaje"
              name="message"
              value={localFormData.message} // Usa el estado local para el valor
              onChange={handleFormChange} // Llama a handleFormChange en cada cambio
            />
          </Form.Group>

          {/* Botón para cancelar y cerrar el modal */}
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          {/* Botón para enviar el formulario */}
          <Button variant="primary" type="submit" className="btn-submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormAdopcion; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
