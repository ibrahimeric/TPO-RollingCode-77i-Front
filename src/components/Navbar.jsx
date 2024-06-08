import { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '/logo.png';
import '../css/Navbar.css';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación del usuario
  const [isAdmin, setIsAdmin] = useState(false); // Estado de administrador del usuario

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false); // Asegúrate de actualizar el estado de administrador al cerrar sesión
  };

  return (
    <>
      <div className="header grid">
        <Navbar.Brand href="#home">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          {' Pet Web Portal'}
        </Navbar.Brand>
        {/* Botón de inicio de sesión*/}
        <Nav className="nav-login">
          {!isLoggedIn && (
            <Nav.Link href="#login">Login</Nav.Link>
          )}
        </Nav>
      </div>

      {/* Mostrar opciones de navegación */}
      <Navbar expand="lg">
        {/* Botón de hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle className='menu-toggle' aria-controls="basic-navbar-nav" />
        {/* Contenido del Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-nav">
            <Nav>
              <Nav.Link href="#home" className="nav-link-custom">Inicio</Nav.Link>
              <Nav.Link href="#services" className="nav-link-custom">Serivicios</Nav.Link>
              <Nav.Link href="#shifts" className="nav-link-custom">Turnos</Nav.Link>
            </Nav>
          </div>

          {/* Mostrar opciones de administrador si el usuario está autenticado y es administrador */}
          {isLoggedIn && isAdmin && (
            <Nav>
              <NavDropdown title="Administrar" id="admin-dropdown">
                <NavDropdown.Item href="#admin/users">Administrar Usuarios</NavDropdown.Item>
                <NavDropdown.Item href="#admin/shifts">Administrar Turnos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}

          {/* Mostrar el botón de cerrar sesión si el usuario está autenticado */}
          {isLoggedIn && (
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;