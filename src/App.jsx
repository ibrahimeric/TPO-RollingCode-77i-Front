import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import './css/App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(true); // Simula si el usuario es administrador

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar isAdmin={isAdmin} />} /> {/* Aquí se muestra solo el NavBar */}
      </Routes>
    </div>
  );
}

export default App;


