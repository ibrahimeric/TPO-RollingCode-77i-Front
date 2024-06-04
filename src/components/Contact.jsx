import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css';

const ContactModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Contact Us
            </Button>
            <div className='containerModal'>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header>
                        <div className='modal-title'>
                            <Modal.Title>Pet Web Portal</Modal.Title>
                        </div>
                        <div className='modal-close'>
                            <FontAwesomeIcon icon={faTimes} onClick={handleClose} className="Hicon-close" />
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <ul className='contactanos'>
                            <li className='contactos'>
                                <a className='direccion' href="https://www.google.com.gt/maps/place/La+Oferta/@-27.3477648,-65.5910017,18z/data=!4m10!1m2!2m1!1sla+oferta!3m6!1s0x9423cf5c99bfe997:0x1e14071c27ac474d!8m2!3d-27.3466769!4d-65.5894634!15sCglsYSBvZmVydGFaCyIJbGEgb2ZlcnRhkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11b7xmqvg8?entry=ttu" target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 9 de Julio 112, Concepción, Tucumán, Argentina.
                                </a>
                            </li>
                            <li className='contactos'>
                                <a className='whatsapp' href="https://api.whatsapp.com/send?phone=543865653191&text=Hola%2C%20estoy%20interesado%20en%20contactarme%20por%20una%20mascota" target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                                </a>
                            </li>
                            <li className='contactos'>
                                <a className='celular' href="tel:+5493865-396343" target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPhone} /> +54 9 3865-653191
                                </a>
                            </li>
                            <li className='contactos'>
                                <a className='mail' href="mailto:petwebp@gmail.com?subject=Me%20Contacto%20Por%20Una%20Mascota" target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} /> petwebp@gmail.com
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
                                <a className='HiconContact' href="https://www.facebook.com/municipalidadeconcepcion" target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="facebook" />
                                </a>
                                <a className='HiconContact' href="https://www.instagram.com/municipalidadconcepcion/" target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram" />
                                </a>
                                <a className='HiconContact' href="https://x.com/Concepcion_Tuc/" target='_blank' rel="noopener noreferrer">
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

export default ContactModal;
