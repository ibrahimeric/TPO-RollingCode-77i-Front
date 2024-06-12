import { Modal } from 'react-bootstrap'; // Importa el componente Modal de react-bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon para usar iconos
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa iconos específicos de FontAwesome
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Importa iconos de redes sociales de FontAwesome
import { contactData, socialMediaLinksModal } from '../js/data'; // Importa los datos de contacto y enlaces de redes sociales desde un archivo externo
import '../css/Contact.css'; // Importa los estilos CSS para este componente

// Define el componente de contacto que recibe dos props: isOpen y onClose
const Contact = ({ isOpen, onClose }) => {
    return (
        // Muestra el modal si isOpen es verdadero, y lo oculta cuando se llama a onClose
        <Modal show={isOpen} onHide={onClose} centered>
            {/* Encabezado del modal con un botón para cerrarlo */}
            <Modal.Header closeButton>
                {/* Título del modal */}
                <Modal.Title>Pet Web Portal</Modal.Title>
            </Modal.Header>
            {/* Cuerpo del modal */}
            <Modal.Body>
                <ul className='contactanos'>
                    {/* Enlace a la dirección */}
                    <li className='contactos'>
                        <a className='direccion' href={contactData.addressLink} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {contactData.address}
                        </a>
                    </li>
                    {/* Enlace a WhatsApp */}
                    <li className='contactos'>
                        <a className='whatsapp' href={contactData.whatsappLink} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </li>
                    {/* Enlace al número de teléfono */}
                    <li className='contactos'>
                        <a className='celular' href={contactData.phoneLink} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPhone} /> {contactData.phone}
                        </a>
                    </li>
                    {/* Enlace al correo electrónico */}
                    <li className='contactos'>
                        <a className='mail' href={contactData.emailLink} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} /> {contactData.email}
                        </a>
                    </li>
                </ul>
            </Modal.Body>
            {/* Pie del modal */}
            <Modal.Footer>
                <div className="HiconsContact">
                    {/* Título de la sección de redes sociales */}
                    <Modal.Title>Síguenos</Modal.Title>
                    <div className='social-media'>
                        {/* Enlaces a redes sociales */}
                        <a className='HiconContact' href={socialMediaLinksModal.facebook} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="facebook" />
                        </a>
                        <a className='HiconContact' href={socialMediaLinksModal.instagram} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="instagram" />
                        </a>
                        <a className='HiconContact' href={socialMediaLinksModal.twitter} target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="twitter" />
                        </a>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

// Exporta el componente Contact como el valor por defecto del módulo
export default Contact;
