import { socialMediaLinks, footerLinks} from '../js/data';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="page-footer font-small blue">
                    <div className="text-center text-md-left">
                        <div className="row">

                            <hr className="clearfix w-100 d-md-none pb-0" />

                            {footerLinks.map(({ title, items }, index) => (
                                <div key={index} className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="text-uppercase">{title}</h5>
                                    <ul className="list-unstyled">
                                        {items.map((item, i) => (
                                            <li key={i}>
                                                {/* Agrega un manejador de eventos onClick a cada elemento de enlace */}
                                                <Link
                                                    className="support-link"
                                                    to={getRoute(item)}
                                                >
                                                    {item}
                                                </Link>
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
        case "Mis mascotas":
            return "/page-mascotas";
        case "Adopcion":
            return "/adopciones";
        case "Turnos":
            return "/page-turnos";
        case "Soporte":
            return "/soporte";
        case "Contacto":
            return "/form";
        case "Acerca de":
            return "/about-us";
        // Agrega más casos según tus necesidades
        default:
            return "/";
    }
};

export default Footer;
