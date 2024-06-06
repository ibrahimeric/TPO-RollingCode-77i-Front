import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
import Formulario from './components/Form';


function App() {
  const [form, setForm] = useState(false);
  const [barsAnimate, setBarsAnimate] = useState(false);

  return (
    <div className="App">
      <Formulario
        setFormulario={setForm}
        barsAnimate={barsAnimate}
        setBarsAnimate={setBarsAnimate}
      />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/contact" element={<Formulario contacto={form} />} />
      </Routes>
    </div>
  )
}

export default App
