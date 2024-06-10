import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '/logo.png';
import { menuItems } from '../js/data';
import Contact from './Contact';
import '../css/Navbar.css';

const NavBar = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <>
      <div className="header grid navbar">
        <Navbar.Brand href="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          {' Pet Web Portal'}
        </Navbar.Brand>
        <div className="nav-btn">
          <Button variant="outline-primary" onClick={handleToggleContactModal} className="ml-2">Contacto</Button>
          <Button variant="outline-primary" href="#login" className="btn-login">
            {!isLoggedIn ? 'Login' : 'Logout'}
          </Button>
        </div>
      </div>

      {showContactModal && <Contact isOpen={showContactModal} onClose={handleToggleContactModal} />}

      <Navbar expand="lg">
        <Navbar.Toggle className='menu-toggle' aria-controls="basic-navbar-nav" />
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