import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Context'; // Importar el proveedor de autenticación
import App from './App';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Loading from './components/Loading';
import PublicRoute from './routes/PublicRoutes';
import PrivateRoute from './routes/PrivateRoutes';

import ContactPage from './components/ContactPage';
import TurnosPage from './components/TurnosPage';
import FormTurnos from './components/FormTurnos';


import Login from './components/Login';
import Register from './components/Register';

import PetPage from './components/PetPage';
import PetDetail from './components/PetDetail';
import PetEdit from './components/PetEdit';
import PetAdd from './components/PetAdd';

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

  return (
    <React.StrictMode>
      {isLoading ? (<Loading />) : (
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>

              <Route path="/" element={<App />} />  

              /* RUTAS PUBLICAS */
              <Route path='/public/*' element={<PublicRoute restricted={true} />}>
                  <Route path='login' element={<Login/>}/>  // JOYA
                  <Route path='register' element={<Register />}/> // JOYA
                  <Route path='contacto' element={<ContactPage />} /> // JOYA
                  <Route path='acerca-de' element={<AboutPage/>}/> // en esa
              </Route>

              /* RUTAS PRIVADAS */
              <Route path='/private/*' element={<PrivateRoute restricted={true} />} >
                
                /* PAGINAS */
                <Route path='mascotas' element={<PetPage />} /> // JOYA
                <Route path='turnos' element={<TurnosPage />} /> // en esa
                <Route path="adopciones" element={<AdopcionPage />} /> // en esa

                /* FORMULARIOS */
                <Route path="form-mascota" element={<PetAdd />} /> // JOYA
                <Route path="form-turno" element={<FormTurnos />} /> // en esa
                <Route path="form-adopcion" element={<FormAdopcion />} /> // en esa

                /* CRUDS */

                  /* MASCOTA */
                  <Route path="mascota/:id" element={<PetDetail />} /> // casi joya
                  <Route path="mascota/:id/editar" element={<PetEdit />} /> // casi joya

                  /* TURNO */
                  /* Eliminar turno*/ // nada

                  /* ADOPCION */
                  /* Cancelar adopcion*/ // nada

              </Route>
              
              // Administrador
              <Route path="/admin" element={<AdminHomePage />} /> // nada
              <Route path="/admin/mascotas" element={<AdminMascotas />} /> // nada
              <Route path="/admin/turnos" element={<AdminTurnos />} /> // nada
              <Route path="/admin/adopciones" element={<AdminAdopciones />} /> // nada


              <Route path='*' element={<Error404 />} />
              /*
                *ruta andando */

            </Routes>

            <Footer />

          </Router>
        </AuthProvider>

      )}
    </React.StrictMode>
  );
};

export default AppRouter;
