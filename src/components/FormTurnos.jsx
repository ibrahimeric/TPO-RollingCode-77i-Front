import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import '../css/Forms-styles/FormTurnos.css';
import axios from 'axios';
import config from '../utils/config';

function FormTurnos() {
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        type: '',
        date: '',
        pet: ''
    });
    const backServerUrl = config.backServerUrl;
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            return;
        }

        let userId;
        try {
            const decodedToken = jwtDecode(token);
            userId = decodedToken.id;
            console.log(userId);
        } catch (error) {
            setError('Invalid token');
            console.error('Error decoding token:', error);
            return;
        }

        const fetchPets = async () => {
            try {
                const response = await axios.get(`${backServerUrl}user/${userId}/pets`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setPets(response.data.pets || []);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setError('Unauthorized access. Please check your token.');
                } else {
                    setError('Error fetching pets');
                }
                console.error('Error fetching pets:', error);
            }
        };

        fetchPets();
    }, [backServerUrl]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'pet') {
            console.log('ID de la mascota seleccionada:', value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            return;
        }

        let userId;
        try {
            const decodedToken = jwtDecode(token);
            userId = decodedToken.id;
        } catch (error) {
            setError('Invalid token');
            console.error('Error decoding token:', error);
            return;
        }

        try {
            const updatedFormData = { ...formData, petId: formData.pet };
            await axios.post(`${backServerUrl}user/${userId}/new_appointment`, updatedFormData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Datos enviados exitosamente a la base de datos');
            console.log('ID de la mascota seleccionada:', updatedFormData.petId);
        } catch (error) {
            console.error('Error al enviar los datos a la base de datos:', error);
        }
    };

    return (
        <div className="form-container">
            <div className="left-column">
                <h1>Solicite un turno</h1>
                <p>Comuníquese con nosotros para todas sus necesidades de registro, adopción y vacunación de mascotas en Concepción.</p>
                <div className='btn-volver'>
                     <Link to="/turnos">
                         <Button variant="primary">Regresar</Button>
                     </Link>
                </div>            
            </div>
            <div className="right-column">
                <div className="form-card">
                    <div className="form-card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formType">
                                <Form.Label>Tipo de cita</Form.Label>
                                <Form.Select name="type" value={formData.type} onChange={handleChange}>
                                    <option>Selecciona un tipo</option>
                                    <option value="neutering">Castracion</option>
                                    <option value="vaccination">Vacunacion</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDate">
                                <Form.Label>Fecha de la cita</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPet">
                                <Form.Label>Mascota</Form.Label>
                                <Form.Select
                                    as="select"
                                    name="pet"
                                    value={formData.pet}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona una mascota</option>
                                    {pets.map((pet) => (
                                        <option key={pet._id} value={pet._id}>{pet.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <div className='btn-enviar'>
                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormTurnos;
