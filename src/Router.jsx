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

import ContactPage from './components/PublicPages/ContactPage';
import TurnosPage from './components/PrivatePages/TurnosPage';
import FormTurnos from './components/Forms/FormTurnos';


import Login from './components/Login';
import Register from './components/Register';

import PetPage from './components/PrivatePages/PetPage';
import PetDetail from './components/Cruds/PetDetail';
import PetEdit from './components/Cruds/PetEdit';
import PetAdd from './components/Forms/PetAdd';

import AdminHomePage from './components/Admin/AdminHome';
import AdminAdopciones from './components/Admin/AdminAdopciones';
import AdminMascotas from './components/Admin/AdminMascotas';
import AdminTurnos from './components/Admin/AdminTurnos';

import AdopcionPage from './components/PrivatePages/AdopcionPage';
import FormAdopcion from './components/Forms/FormAdopcion';

import AboutPage from './components/PublicPages/AcercaDe';


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
              <Route path='contacto' element={<ContactPage />} /> // JOYA
              <Route path='acerca-de' element={<AboutPage/>}/> // en esa 

              /* RUTAS PUBLICAS */
              <Route path='/public/*' element={<PublicRoute restricted={true} />}> //Estar Deslogeado
                  <Route path='login' element={<Login/>}/>  // JOYA
                  <Route path='register' element={<Register />}/> // JOYA
                  
              </Route>

              /* RUTAS PRIVADAS */
              <Route path='/private/*' element={<PublicRoute restricted={true} />} > //Estar logeado
                
                /* PAGINAS */
                <Route path='mascotas' element={<PetPage />} /> // JOYA
                <Route path='turnos' element={<TurnosPage />} /> // en esa TurnPage
                <Route path="adopciones" element={<AdopcionPage />} /> // en esa mas pa triki AdoptPage

                /* FORMULARIOS */
                <Route path="form-mascota" element={<PetAdd />} /> // JOYA
                <Route path="form-turno" element={<FormTurnos />} /> // en esa TurnAdd
                <Route path="form-adopcion" element={<FormAdopcion />} /> // en esa mas pa triki AdoptAdd

                /* CRUDS */

                  /* MASCOTA */
                  <Route path="mascota/:id" element={<PetDetail />} /> // casi joya 
                  <Route path="mascota/:id/editar" element={<PetEdit />} /> // casi joya 


                  /* TURNO */
                  /* Eliminar turno*/ // nada  TurnCancel

                  /* ADOPCION */
                  /* Cancelar adopcion*/ // nada  AdoptCancel

              </Route>

              // Administrador // nada
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
