import React, { useState } from 'react';
import { /* Button */ Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { contactData, socialMediaLinksModal } from '../js/data'
import '../css/Contact.css';

const Contact = ({ isOpen, onClose }) => {
    // Utilizamos la prop `isOpen` para controlar el estado del modal
     const [contacto, setContacto] = useState(false);

     // Si hay un cambio en la prop `isOpen`, actualizamos el estado local `contacto`
    React.useEffect(() => {
        setContacto(isOpen);
    }, [isOpen]);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShowContact}>
                Abrir Formulario
            </Button> */}
            <div className='containerModal'>
                <Modal show={contacto} onHide={() => setContacto(false)} centered>
                    <Modal.Header closeButton>
                        <div className='modal-title'>
                            <Modal.Title>Pet Web Portal</Modal.Title>
                        </div>
                        {/* <div className='modal-close'>
                            <FontAwesomeIcon icon={faTimes} onClick={() => setContacto(false)} className="Hicon-close" />
                        </div> */}
                    </Modal.Header>
                    <Modal.Body>
                        <ul className='contactanos'>
                            <li className='contactos'>
                                <a className='direccion' href={contactData.addressLink} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {contactData.address}
                                </a>
                            </li>
                            <li className='contactos'>
                                <a className='whatsapp' href={contactData.whatsappLink} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                                </a>
                            </li>
                            <li className='contactos'>
                                <a className='celular' href={contactData.phoneLink} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPhone} /> {contactData.phone}
                                </a>
                            </li>
                            <li className='contactos'>
                                <a className='mail' href={contactData.emailLink} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} /> {contactData.email}
                                </a>
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="HiconsContact">
                            <div className='modal-title'>
                                <Modal.Title>Siguenos</Modal.Title>
                            </div>
                            <div className='social-media'>
                                <a className='HiconContact' href={socialMediaLinksModal.facebook} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="facebook" />
                                </a>
                                <a className='HiconContact' href={socialMediaLinksModal.instagram} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram" />
                                </a>
                                <a className='HiconContact' href={socialMediaLinksModal.twitter} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} className="x" />
                                </a>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default Contact;
