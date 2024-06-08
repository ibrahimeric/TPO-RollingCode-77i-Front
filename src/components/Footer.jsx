import { socialMediaLinks, footerLinks, footerParagraph } from '../js/data';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="page-footer font-small blue">
                    <div className="text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase">{footerParagraph[0].title}</h5>
                                <p className="text-paragraph">
                                    {footerParagraph[0].paragraph.map((paragraph, index) => (
                                        <span key={index}>{paragraph}</span>
                                    ))}
                                </p>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />

                            {footerLinks.map((linkGroup, index) => (
                                <div key={index} className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="text-uppercase">{linkGroup.title}</h5>
                                    <ul className="list-unstyled">
                                        {linkGroup.items.map((item, i) => (
                                            <li key={i}>
                                                {/* Usar un div como enlace */}
                                                {/* <a className="support-link" href="/tu-destino">{item}</a> */}
                                                <Link className="support-link" to={getRoute(item)}>{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="justify-content-center">
                                <div className="iconos">
                                    {socialMediaLinks.map((socialMediaLink, index) => (
                                        <a key={index} href={socialMediaLink.href} target="_blank" rel="noopener noreferrer">
                                            <img className="icono-img"
                                                src={socialMediaLink.icon}
                                                alt={socialMediaLink.alt}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="justify-content-center footer-copyright text-center py-3 list-unstyled">
                                <span>© 2024 Copyright:</span>
                                {/* https://petwebportal.com/ */}
                                <li><a href="/error-404" target="_blank" rel="noopener noreferrer">PetWebPortal.com</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Definir la función getRoute fuera del componente Footer
const getRoute = (text) => {
    switch (text) {
        case "Registro de mascotas":
            return "/registro-mascotas";
        case "Portal de adopción":
            return "/portal-adopcion";
        case "Vacunación":
            return "/vacunacion";
        case "Cuidado de mascotas":
            return "/cuidado-mascotas";
        case "Soporte":
            return "/contact";
        case "Formulario de contacto":
            return "/formulario-contacto";
        case "Ubicación":
            return "/ubicacion";
        case "Redes sociales":
            return "/redes-sociales";
        // Agrega más casos según tus necesidades
        default:
            return "/";
    }
};

export default Footer;
