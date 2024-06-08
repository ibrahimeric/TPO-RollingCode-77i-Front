import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import CardComponent from './components/Cards';
import { menuItems, cardsData } from './js/data';
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
      </Routes>
      <Slider />
      <div className="cards-container">
        <CardList />
      </div>
    </>
  );
}

function CardList() {
  return (
    <>
      {cardsData.map((card, index) => (
        <CardComponent
          key={index}
          imagen={card.imagen}
          title={card.title}
          text={card.text}
        />
      ))}
    </>
  );
}

export default App;

