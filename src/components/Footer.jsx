import React, { useState } from 'react';
import { socialMediaLinks, footerLinks } from '../js/data';
import '../css/Components-styles/Footer.css';
import { Link } from 'react-router-dom';
import Contact from './ContactPage'; // Importa el componente Contact

const Footer = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    const handleToggleContactModal = () => {
        setShowContactModal(!showContactModal);
    };

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
                                                <Link
                                                    className="support-link"
                                                    to={item === "Contacto" ? "#" : getRoute(item)}
                                                    onClick={item === "Contacto" ? handleToggleContactModal : null}
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
                                <li><a href="/error-404" target="_blank" rel="noopener noreferrer">PetWebPortal.com</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Usar el componente Contact para el modal */}
            <Contact isOpen={showContactModal} onClose={handleToggleContactModal} />
        </>
    );
}

// Definir la función getRoute fuera del componente Footer
const getRoute = (text) => {
    switch (text) {
        case "Mis mascotas":
            return "/mascotas";
        case "Adopcion":
            return "/adopcion";
        case "Turnos":
            return "/turnos";
        case "Soporte":
            return "/soporte";
        // Eliminar "Contacto" ya que ahora es un modal
        case "Acerca de":
            return "/about-us";
        // Agrega más casos según tus necesidades
        default:
            return "/";
    }
};

export default Footer;
