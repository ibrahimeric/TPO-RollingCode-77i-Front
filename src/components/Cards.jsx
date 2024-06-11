import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card1Image from '../assets/cards/card1.webp';
import card2Image from '../assets/cards/card2.webp';
import card3Image from '../assets/cards/card3.webp';
import '../css/Cards.css';

const Cards = () => {
  const cardsData = [
    {
      imagen: card1Image,
      title: "Registro de Mascotas",
      text: "Registra y gestiona la información de tus mascotas fácilmente",
      route: '/formTurnos'
    },
    {
      imagen: card2Image,
      title: "Adopción de Mascotas",
      text: "Encuentra una nueva familia para mascotas necesitadas",
      route: '/formTurnos'
    },
    {
      imagen: card3Image,
      title: "Reserva de Turnos",
      text: "Agenda turnos para vacunación y castración de manera sencilla",
      route: '/formTurnos'
    }
  ];

  return (
    <div className="cards-container">
      <h3 className='titulo-cards'>Nuestros Servicios</h3>
      {cardsData.map((card, index) => (
        <div className="custom-card" key={index}>
          <CardComponent
            imagen={card.imagen}
            title={card.title}
            text={card.text}
            route={card.route}
          />
        </div>
      ))}
    </div>
  );
};

function CardComponent({ imagen, title, text, route }) {
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
        <Link to={route} className="btn btn-primary">Ir al formulario</Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;