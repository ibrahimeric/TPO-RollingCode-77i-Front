import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Cards from './components/Cards'; // Importamos el componente Cards
import UserExperience from './components/UserExperience';
import Footer from './components/Footer.jsx';
import { menuItems } from './js/data';
import './css/App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación del usuario
  const [isAdmin, setIsAdmin] = useState(false);

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false); // Asegúrate de actualizar el estado de administrador al cerrar sesión
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar menuItems={menuItems} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />} />
        <Route path="/" element={<Link to="/non-existent-page">Go to 404</Link>} />
      </Routes>
      <Slider />
      <Cards />
      <UserExperience />
      <Footer />
    </>
  );
}

export default App;


