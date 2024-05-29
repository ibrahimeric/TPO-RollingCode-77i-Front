import { Container, Row, Col } from 'react-bootstrap';
import GitHubIco from '/public/social-media/github.ico';
import LinkedInIco from '/public/social-media/linkedin.ico';
import InstagramIco from '/public/social-media/instagram.ico';
import '../css/Footer.css'

const Footer = () => {
    return (
        <Container fluid className="fixed-bottom container">
            <div className="page-footer font-small blue pt-4 w-100">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <Row className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam esse ex molestiae in.</p>
                        </Row>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <Row className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Row>

                        <Row className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} md={6} className="d-flex justify-content-around align-items-center iconos" style={{ fontSize: ''}}>
                                <a href="https://github.com/petwebportal">
                                    <img className="icono-img"
                                        src={GitHubIco}
                                        alt="Pet Web Portal GitHub"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/petwebportal">
                                    <img
                                        className="icono-img"
                                        src={LinkedInIco}
                                        alt="Pet Web Portal LinkedIn"
                                    />
                                </a>
                                <a href="https://instagram.com/@petwebportal">
                                    <img
                                        className="icono-img"
                                        src={InstagramIco}
                                        alt="Pet Web Portal Instagram"
                                    />
                                </a>
                            </Col>
                        </Row>
                        <Row className="justify-content-center footer-copyright text-center py-3 list-unstyled">© 2020 Copyright:
                            <li><a href="https://petwebportal.com/">PetWebPortal.com</a></li>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Footer;
