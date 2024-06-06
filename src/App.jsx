import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Formulario from './components/Form';
import Turnos from './components/TurnosPage';


function App() {
  const [pageTurno, setPageTurno] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/pageturnos" element={<Turnos pageTurno={pageTurno} />} />
      </Routes>
    </div>
  )
}

export default App