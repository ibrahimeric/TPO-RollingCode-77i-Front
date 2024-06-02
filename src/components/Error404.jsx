import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Error404.css'

const Error404 = () => {
  return (
    <div className='error404'>
      <Container className='card-error404'>
        <Row className="justify-content-center">
          <Col md={6} className="text-center containerError404">
            <h3>404</h3>
            <h5>PÁGINA NO ENCONTRADA</h5>
            <p>
              Buscamos alto y bajo, pero no pudimos encontrar lo que estás buscando.<br />
              Busquemos un mejor lugar para que vayas.
            </p>
            <Link to='/'>
              <Button variant="primary" className='ErrorLink'>IR A INICIO</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Error404
