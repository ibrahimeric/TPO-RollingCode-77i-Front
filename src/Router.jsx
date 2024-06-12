import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Context'; // Importar el proveedor de autenticación
import { useMediaQuery } from 'react-responsive'
import App from './App';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Loading from './components/Loading';
import Contact from './components/Contact';
import TurnosPage from './components/TurnosPage';
import FormTurnos from './components/FormTurnos';
import FormRegistro from './components/FormRegistro';
import PublicRoute from './routes/PublicRoutes';
import Login from './components/Login';
import Register from './components/Register';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetEdit from './components/PetEdit';
import PetAdd from './components/PetAdd';
import PetCard from './components/PetCard';
import AdminHomePage from './components/AdminHome';
import AdminAdopciones from './components/AdminAdopciones';
import AdminMascotas from './components/AdminMascotas';
import AdminTurnos from './components/AdminTurnos';
import AdopcionPage from './components/AdopcionPage';
import FormAdopcion from './components/FormAdopcion';
import AboutPage from './components/AcercaDe';


const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const isTableOrMobile = useMediaQuery({ query: '(max-width:768px)' })

  return (
    <React.StrictMode>
      {isLoading ? (
        <Loading />
      ) : (
        <AuthProvider> {/* Agregar el proveedor de autenticación alrededor del Router */}
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error404 />} />
              <Route path="/page-mascotas" element={<PetList />} />
              <Route path="/page-turnos" element={<TurnosPage />} />
              <Route path="/formTurnos" element={<FormTurnos />} />
              <Route path="/formRegistro" element={<FormRegistro />} />
              <Route path="/pet/adopcion" element={<FormAdopcion />} />
              <Route path="/adopciones" element={<AdopcionPage />} />
              <Route path="/login" element={
                <PublicRoute restricted={true} />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/register" element={
                <PublicRoute restricted={true} />}>
                <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/pets" element={isTableOrMobile ? <PetCard /> : <PetList />} />
              <Route path="/pet/:id" element={<PetDetail />} />
              <Route path="/pet/:id/edit" element={<PetEdit />} />
              <Route path="/pet/add" element={<PetAdd />} />

              <Route path='/about-us' element={<AboutPage />} />

              {/* Administrador */}
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/admin/mascotas" element={<AdminMascotas />} />
              <Route path="/admin/turnos" element={<AdminTurnos />} />
              <Route path="/admin/adopciones" element={<AdminAdopciones />} />


            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      )}
    </React.StrictMode>
  );
};

export default AppRouter;
