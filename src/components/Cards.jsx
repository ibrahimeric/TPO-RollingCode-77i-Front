import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import card1Image from '../assets/cards/card1.webp';
import card2Image from '../assets/cards/card2.webp';
import card3Image from '../assets/cards/card3.webp';
import FormRegistro from './FormRegistro';
import FormTurnos from './FormTurnos';
import FormAdopcion from './FormAdopcion';
import '../css/Cards.css';

function ParentComponent() {
    const [showModal, setShowModal] = useState(false);
    const [selectedFormType, setSelectedFormType] = useState(null); // Nuevo estado para identificar el formulario seleccionado
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleShowModal = (formType) => {
        setSelectedFormType(formType);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleCloseModal();
    };

    // Datos de las tarjetas
    const cardsData = [
        {
            imagen: card1Image,
            title: "Registro de Mascotas",
            text: "Registra y gestiona la información de tus mascotas fácilmente",
            formType: 'registro' // Asegúrate de que este valor esté presente
        },
        {
            imagen: card2Image,
            title: "Adopción de Mascotas",
            text: "Encuentra una nueva familia para mascotas necesitadas",
            formType: 'adopcion'
        },
        {
            imagen: card3Image,
            title: "Reserva de Turnos",
            text: "Agenda turnos para vacunación y castración de manera sencilla",
            formType: 'turnos'
        }
    ];

    return (
        <div className="cards-container">
            <h3 className='titulo-cards'>Nuestros Servicios</h3>
            {cardsData.map((card, index) => (
                <div className="custom-card" key={index}> {/* Agrega la propiedad "key" aquí */}
                    <CardComponent
                        imagen={card.imagen}
                        title={card.title}
                        text={card.text}
                        formType={card.formType} // Agregar el tipo de formulario como formType
                        handleShowModal={handleShowModal}
                    />
                </div>
            ))}
            {showModal && selectedFormType === 'registro' && (
                <FormRegistro
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleClose={handleCloseModal}
                />
            )}
            {showModal && selectedFormType === 'adopcion' && (
                <FormAdopcion
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleClose={handleCloseModal}
                />
            )}
            {showModal && selectedFormType === 'turnos' && (
                <FormTurnos
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleClose={handleCloseModal}
                />
            )}
        </div>
    );
}

function CardComponent({ imagen, title, text, formType, handleShowModal }) {
    return (
        <Card className="custom-card">
            <div className="image-container">
                <Card.Img
                    variant="top"
                    src={imagen}
                    alt="imagen"
                />
            </div>
            <Card.Body className="card-body">
                <Card.Title className="title-card">{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button className="btn-card" variant="primary" onClick={() => handleShowModal(formType)}>
                    Ir al formulario
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ParentComponent;
