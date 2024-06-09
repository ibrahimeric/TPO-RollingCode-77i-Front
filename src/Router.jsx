import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Error404 from './components/Error404';
import Loading from './components/Loading';
import Contact from './components/Contact';
import Formulario from './components/Form';
import FormTurnos from './components/FormTurnos';
import Turnos from './components/TurnosPage';


const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula el tiempo de carga de la página
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Cambia este valor al tiempo real que tarda tu aplicación en cargar

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timeout);
  }, []);


  return (
    <React.StrictMode>
      {isLoading ? ( // Si isLoading es verdadero, muestra el componente de carga
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/formulario-contacto" element={<Formulario />} />
            <Route path="/formulario-turnos" element={<FormTurnos />} />
            <Route path="/page-turnos" element={<Turnos />} />
          </Routes>
        </Router>
      )}
    </React.StrictMode>
  );
};

export default AppRouter;
