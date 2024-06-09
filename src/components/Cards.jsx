import { Card, Button } from 'react-bootstrap';
import '../css/Cards.css'
import { Link } from 'react-router-dom';

function CardComponent({ imagen, title, text, formData }) {
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
                <Link to={{ pathname: "/formulario-contacto", state: formData }}>
                    <Button className="btn-card" variant="primary">
                        Ir al formulario
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;