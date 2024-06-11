import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import FormTurnos from './components/FormTurnos';


function App() {
  // const [form, setForm] = useStatgte(false);
  const [formTurnos, setFormTurnos] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/formTurnos" element={<FormTurnos setFormTurnos={formTurnos} />} />
      </Routes>
    </div>
  )
}

export default App