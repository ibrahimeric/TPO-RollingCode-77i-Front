import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Formulario from './components/Form';
import FormTurnos from './components/FormTurnos';


function App() {
  // const [form, setForm] = useState(false);
  const [formTurnos, setFormTurnos] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/form" element={<Form contacto={form} />} /> */}
        <Route path="/formTurnos" element={<FormTurnos setFormTurnos={formTurnos} />} />
      </Routes>
    </div>
  )
}

export default App
