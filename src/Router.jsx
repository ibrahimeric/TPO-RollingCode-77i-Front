import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Error404 from './components/Error404';
import Loading from './components/Loading';
import Contact from './components/Contact';


const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Simula el tiempo de carga de la página
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Cambia este valor al tiempo real que tarda tu aplicación en cargar

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timeout);
  }, []);

  const handleShow = () => {
    setShowContactModal(true);
  };

  const handleClose = () => {
    setShowContactModal(false);
    console.log("Cerrando modal");
    console.log("Estado de showContactModal:", showContactModal);
  };

  console.log("Estado de showContactModal:", showContactModal);

  return (
    <React.StrictMode>
      {isLoading ? ( // Si isLoading es verdadero, muestra el componente de carga
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<>
              <App />
              <Contact show={handleShow} handleClose={handleClose} />
            </>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      )}
    </React.StrictMode>
  );
};

export default AppRouter;
