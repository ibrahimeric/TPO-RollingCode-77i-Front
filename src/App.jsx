import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import './css/App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(true); // Simula si el usuario es administrador

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar isAdmin={isAdmin} />} />
      </Routes>
      <Slider />
    </div>
  );
}

export default App;


