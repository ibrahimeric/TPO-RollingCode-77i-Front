import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Context'; // Importar el proveedor de autenticación
import App from './App';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Loading from './components/Loading';
import ContactPage from './components/ContactPage';
import TurnosPage from './components/TurnosPage';
import FormTurnos from './components/FormTurnos';
import FormRegistro from './components/FormRegistro';
import PublicRoute from './routes/PublicRoutes';
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
      {isLoading ? (
        <Loading />
      ) : (
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>

              <Route path="/" element={<App />} />  
              /*
                *ruta andando */

              <Route path="/login" element={ 
                <PublicRoute restricted={true}>
                  <Login />
                </PublicRoute>} />
              /*
                *ruta andando 
                TODO: no se loguea*/

              <Route path="/register" element={
                <PublicRoute restricted={true}>
                  <Register />
                </PublicRoute>} />
              /*
                *ruta andando */


              <Route path="/contacto" element={<ContactPage />} /> 
              /*
                *ruta andando 
                TODO: conectar con el link del footer*/
            
              <Route path="/mascotas" element={<PetPage />} />
              /*
                *ruta andando 
                TODO: no anda el boton */

              <Route path="/turnos" element={<TurnosPage />} />
              /*
                *ruta andando 
                TODO: no anda el boton */

              <Route path="/adopciones" element={<AdopcionPage />} />
              /*
                *ruta andando
                TODO: no hay boton */
              
              <Route path='/acerca-de' element={<AboutPage/>}/>
              /*
                *ruta andando
                TODO: conectar el boton del footer */

              <Route path="/formTurnos" element={<FormTurnos />} />
              /*
                *ruta andando */

              <Route path="/formRegistro" element={<FormRegistro />} />
              /*
                !no anda */

              <Route path="/formAdopcion" element={<FormAdopcion />} />
              /*
                !no anda */


              <Route path="/pet/:id" element={<PetDetail />} />
              <Route path="/pet/:id/edit" element={<PetEdit />} />
              <Route path="/pet/add" element={<PetAdd />} />
            
              
              // Administrador
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/admin/mascotas" element={<AdminMascotas />} />
              <Route path="/admin/turnos" element={<AdminTurnos />} />
              <Route path="/admin/adopciones" element={<AdminAdopciones />} />


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
