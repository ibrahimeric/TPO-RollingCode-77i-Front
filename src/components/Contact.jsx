import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { contactData, socialMediaLinksModal } from '../js/data';
import '../css/Contact.css';

const Contact = ({ isOpen, onClose }) => {
    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Pet Web Portal</Modal.Title>
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
                    <Modal.Title>Síguenos</Modal.Title>
                    <div className='social-media'>
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

export default Contact;