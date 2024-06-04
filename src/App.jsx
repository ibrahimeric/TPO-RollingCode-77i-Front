import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
// import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  const [contacto, setContacto] = useState(false);
  const [barsAnimate, setBarsAnimate] = useState(false);

  return (
    <div className="App">
      <Navbar
        setContacto={setContacto}
        barsAnimate={barsAnimate}
        setBarsAnimate={setBarsAnimate}
      />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/contact" element={<Contact contacto={contacto} />} />
      </Routes>
    </div>
  )
}

export default App
