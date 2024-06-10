import { Modal, Form, Button } from 'react-bootstrap';
import '../css/Form.css'

function FormTurnos({ formData, handleChange, handleSubmit, handleClose }) {
    return (
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header className='modal-header-shifts' closeButton>
                    <div className='title-form-shifts'>
                        <Modal.Title>Programar Turno</Modal.Title>
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
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className='text-label'>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingresa tu email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tu email con nadie.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formOptions">
                            <Form.Label className='text-label'>Mascotas</Form.Label>
                            <Form.Select onChange={handleChange}>
                                <option value="option1">Opción 1</option>
                                <option value="option2">Opción 2</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formOptions">
                            <Form.Label className='text-label'>Turnos</Form.Label>
                            <Form.Select onChange={handleChange}>
                                <option value="option1">Castración</option>
                                <option value="option2">Vacunación</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label className='text-label'>Seleccione una fecha</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label className='text-label'>Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Ingresa un Mensaje"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormTurnos;