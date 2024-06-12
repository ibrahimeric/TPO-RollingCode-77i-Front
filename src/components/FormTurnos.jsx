import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/FormTurnos.css';
import axios from 'axios'; // Importar axios para hacer solicitudes HTTP
// import { jwtDecode } from 'jwt-decode';

function FormTurnos() {
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        type: '',
        date: '',
        pet: ''
        // user: ''
    });

    const [pets, setPets] = useState([]);
    // const [userId, setUserId] = useState('');

    useEffect(() => {
        /* const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            return;
        } */

        // let userId = '666329fd7f4df62bdfa19115';
        /* try {
            const decodedToken = jwtDecode(token);
            userId = decodedToken.id;
            console.log(userId);
        } catch (error) {
            setError('Invalid token');
            console.error('Error decoding token:', error);
            return;
        } */

        const fetchPets = async () => {
            try {
                // const response = await fetch(`http://localhost:5000/user/${userId}/pets`, {
                const response = await fetch(`http://localhost:5000/user/666329fd7f4df62bdfa19115/pets`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${token}`,
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        setError('Unauthorized access. Please check your token.');
                    } else {
                        setError('Network response was not ok');
                    }
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                console.log('API response data:', data); // Log the response data

                // Ensure data.pets is an array
                if (Array.isArray(data.pets)) {
                    setPets(data.pets);
                } else {
                    throw new Error('Received data.pets is not an array');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching pets:', error);
            }
        };

        fetchPets();
    }, []);

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'pet') {
            console.log('ID de la mascota seleccionada:', value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedFormData = { ...formData, petId: formData.pet }; // Renombrar 'pet' a 'petId'
            setFormData(updatedFormData);

            // Hacemos la solicitud POST con los datos actualizados
            await axios.post(`http://localhost:5000/user/666329fd7f4df62bdfa19115/new_appointment`, updatedFormData);
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
            </div>
            <div className="right-column">
                <div className="form-card">
                    <div className="form-card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formType">
                                <Form.Label>Tipo de cita</Form.Label>
                                <Form.Select name="type" value={formData.type} onChange={handleChange}>
                                    <option>Selecciona un tipo</option>
                                    <option value="neutering">neutering</option>
                                    <option value="vaccination">vaccination</option>
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





                            {/* <Form.Group className="mb-3" controlId="formUser">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="user"
                                    value={formData.user}
                                    onChange={handleChange}
                                />
                            </Form.Group> */}
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
