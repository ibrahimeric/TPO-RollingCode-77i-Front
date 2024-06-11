// Router.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NavBar from './components/Navbar'; // Importa el NavBar
import Footer from './components/Footer'; // Importa el Footer
import Error404 from './components/Error404';
import Loading from './components/Loading';
import Contact from './components/Contact';
import PetsPage from './components/PetsPage';
import TurnosPage from './components/TurnosPage';
import FormTurnos from './components/FormTurnos';
import FormRegistro from './components/FormRegistro';
import FormAdopcion from './components/FormAdopcion';

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
          <NavBar /> {/* Renderiza el NavBar en todas las rutas */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/page-mascotas" element={<PetsPage />} />
            <Route path="/page-turnos" element={<TurnosPage />} />
            <Route path="/formTurnos" element={<FormTurnos />} />
            <Route path="/formRegistro" element={<FormRegistro />} />
            <Route path="/formAdopcion" element={<FormAdopcion />} />
          </Routes>
          <Footer /> {/* Renderiza el Footer en todas las rutas */}
        </Router>
      )}
    </React.StrictMode>
  );
};

export default AppRouter;
