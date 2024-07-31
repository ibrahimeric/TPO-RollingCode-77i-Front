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

import Pet from './pages/Pet';
import PetDetail from './components/PetDetail';
import PetEdit from './components/PetEdit';
import PetAdd from './components/PetAdd';
import PetDetailAdopt from './components/PetDetailAdopt';
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import FormTurnos from './components/FormTurnos';
import TurnosPage from './pages/TurnosPage';
import Adoption from './pages/Adoption';
const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // const isTableOrMobile = useMediaQuery({ query: '(max-width:768px)' })

  return (
    <React.StrictMode>
      {isLoading ? (<Loading />) : (
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Error404 />} />
              <Route element={<PublicRoutes/>} >
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route element={<PrivateRoute/>} >
                <Route path='mascotas' element={<Pet/>} />
                <Route path='mascota/:id' element={<PetDetail/>} />
                <Route path='mascota/:id/edit' element={<PetEdit/>} />
                <Route path='mascota/:id/adopt' element={<PetDetailAdopt/>} />
                <Route path='mascota/add' element={<PetAdd/>} />
                <Route path='turnos' element={<TurnosPage/>} />
                <Route path='turnos/add' element={<FormTurnos/>} />
                <Route path='adopcion' element={<Adoption/>} />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      )}
    </React.StrictMode>
  );
};

export default AppRouter;
