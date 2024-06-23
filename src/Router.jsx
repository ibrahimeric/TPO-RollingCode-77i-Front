import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Context'; // Importar el proveedor de autenticación

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Error404 from './pages/Error404';
import Loading from './components/Loading';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (<Loading />) : (
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />


              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      )}
    </React.StrictMode>
  );
};

export default AppRouter;
