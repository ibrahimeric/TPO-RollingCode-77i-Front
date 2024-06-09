import { Card, Button } from 'react-bootstrap';
import '../css/Cards.css'
import { Link } from 'react-router-dom';

function CardComponent({ imagen, title, text }) {
    const routes = {
        "Registro de Mascotas": "/formulario-contacto",
        "Adopción de Mascotas": "/error-404",
        "Reserva de Turnos": "/formulario-turnos"
    };
    return (
        <Card className="custom-card" >
            <div className="image-container">
                <Card.Img
                    variant="top"
                    src={imagen}
                    alt="imagen"
                />
            </div>
            <Card.Body className="card-body">
                <Card.Title className="title-card">
                    {title}
                </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Link to={routes[title]}>
                    <Button className="btn-card" variant="primary">
                        Ir al formulario
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;