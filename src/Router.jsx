import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Context'; // Importa el proveedor de autenticación
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

  // useEffect se utiliza para ejecutar un efecto secundario después de que el componente se monte.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Después de 1 segundo, cambia isLoading a false
    }, 1000);

    // Limpia el timeout si el componente se desmonta antes de que el timeout termine.
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (<Loading />) : (
        <AuthProvider>
          <Router>
            <NavBar /> {/* Componente de barra de navegación */}
            <Routes>

              <Route path="/" element={<App />} /> 
              <Route path='contacto' element={<ContactPage />} />
              <Route path='acerca-de' element={<AboutPage/>}/>

              {/* /* RUTAS PUBLICAS */}
              <Route path='/public/*' element={<PublicRoute restricted={true} />}>
                  <Route path='login' element={<Login/>}/> 
                  <Route path='register' element={<Register />}/>
                  
              </Route>

              {/* /* RUTAS PRIVADAS */}
              <Route path='/private/*' element={<PublicRoute restricted={true} />} >
                
                {/* /* PAGINAS */}
                <Route path='mascotas' element={<PetPage />} /> 
                <Route path='turnos' element={<TurnosPage />} /> 
                <Route path="adopciones" element={<AdopcionPage />} />

                {/* /* FORMULARIOS */}
                <Route path="form-mascota" element={<PetAdd />} /> 
                <Route path="form-turno" element={<FormTurnos />} /> 
                <Route path="form-adopcion" element={<FormAdopcion />} />

                {/* CRUDS  */}

                  {/* MASCOTA */}
                  <Route path="mascota/:id" element={<PetDetail />} /> 
                  <Route path="mascota/:id/editar" element={<PetEdit />} />


                  {/*  TURNO */}
                   {/* Eliminar turno */} 

                   {/* ADOPCION */} 
                  {/* Cancelar adopcion */}

              </Route>

              {/* Administrador */}
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/admin/mascotas" element={<AdminMascotas />} />
              <Route path="/admin/turnos" element={<AdminTurnos />} /> 
              <Route path="/admin/adopciones" element={<AdminAdopciones />} />


              <Route path='*' element={<Error404 />} />

            </Routes>

            <Footer />

          </Router>
        </AuthProvider>

      )}
    </React.StrictMode>
  );
};

export default AppRouter;

