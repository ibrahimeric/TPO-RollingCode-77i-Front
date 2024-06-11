import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/FormTurnos.css'

function FormTurnos() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log(formData);
        // Redireccionar a una nueva página después de enviar el formulario
        window.location.href = '/nueva-pagina'; // Reemplaza '/nueva-pagina' con la URL de tu nueva página
    };

    return (
        <div className="container">
            <div className="left-column">
                <h1>Solicite un Turno</h1>
                <p>Comuníquese con nosotros para todas sus necesidades de registro, adopción y vacunación de mascotas en Concepción.</p>
            </div>
            <div className="right-column">
                <div className="card">
                    <div className="card-header">
                        <h1>Solicitud de Turno</h1>
                    </div>
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo</Form.Label>
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

                            <Form.Group className="mb-3" controlId="formOptionsMascotas">
                                <Form.Label>Mascotas</Form.Label>
                                <Form.Select onChange={handleChange}>
                                    <option value="option1">Opción 1</option>
                                    <option value="option2">Opción 2</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formOptionsTurnos">
                                <Form.Label>Turnos</Form.Label>
                                <Form.Select onChange={handleChange}>
                                    <option value="option1">Castración</option>
                                    <option value="option2">Vacunación</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDate">
                                <Form.Label>Selecciona una fecha</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Ingresa un Mensaje"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='btn-enviar'>
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormTurnos;
