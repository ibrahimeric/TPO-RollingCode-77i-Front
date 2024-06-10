// NavBar.jsx

import { useState } from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import logo from '/logo.png';
import { menuItems } from '../js/data';
import '../css/Navbar.css';

const NavBar = () => {
  const [showContactModal, setShowContactModal] = useState(false); // Estado de modal de contacto
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación del usuario
  const [isAdmin, setIsAdmin] = useState(false); // Estado de administrador del usuario


  const handleCloseContactModal = () => setShowContactModal(false);
  const handleShowContactModal = () => setShowContactModal(true);


  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false); // Asegúrate de actualizar el estado de administrador al cerrar sesión
  };

  return (
    <>
      <div className="header grid navbar">
        <Navbar.Brand href="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          {' Pet Web Portal'}
        </Navbar.Brand>
        <div className="nav-btn">
          {/* Botón de contacto */}
          <Button variant="outline-primary" onClick={handleShowContactModal} className="ml-2">Contacto</Button>
          {/* Botón de inicio de sesión*/}
          {/* <span style={{ marginRight: '10px' }}></span> */}
          <Button variant="outline-primary" href="#login" className="btn-login">
            {!isLoggedIn ? 'Login' : 'Logout'}
          </Button>
        </div>
      </div>

      {/* Mostrar opciones de navegación */}
      <Navbar expand="lg">
        {/* Botón de hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle className='menu-toggle' aria-controls="basic-navbar-nav" />
        {/* Contenido del Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menuItems.map((item, index) => (
              <Nav.Link key={index} href={item.url}>{item.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
