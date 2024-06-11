import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'; // Importar el componente de registro
import Home from './components/Home'; // Importar el componente Home
import { AuthProvider } from './context/Context';
import PublicRoute from './routes/PublicRoutes';
import PrivateRoute from './routes/PrivateRoutes';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<PublicRoute restricted={true} />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/register" element={<PublicRoute restricted={true} />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<Home />} /> {/* Hacer Home accesible para todos */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;



