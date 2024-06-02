import { Card, Button } from 'react-bootstrap';
import '../css/Cards.css'

function CardComponent({ imagen, title, text }) {
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
                <Button className="btn-card" variant="primary">
                    Ir al sitio
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;