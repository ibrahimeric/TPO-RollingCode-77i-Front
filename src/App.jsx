import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import FormTurnos from './components/FormTurnos';


function App() {
  // const [form, setForm] = useState(false);
  const [formTurnos, setFormTurnos] = useState(false);

  return (
    <div className="App">
      <Routes>
      {/* <NavBar/> */}
        <Route path="/formTurnos" element={<FormTurnos setFormTurnos={formTurnos} />} />
        {/* <Footer/> */}
      </Routes>
    </div>
  )
}

export default App
