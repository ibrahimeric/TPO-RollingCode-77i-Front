import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetCard from './components/PetCard';
import PetEdit from './components/PetEdit';
import PetAdd from './components/PetAdd';
import { AuthProvider } from './context/Context';
import PublicRoute from './routes/PublicRoutes';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
          <Route path="/" element={<Home />} /> 
            <Route path="/pets" element={isTabletOrMobile ? <PetCard /> : <PetList />} />
          <Route element={<PrivateRoute />}>
            <Route path="/pet/:id" element={<PetDetail />} />
            <Route path="/pet/:id/edit" element={<PetEdit />} />
            <Route path="/pet/add" element={<PetAdd />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
