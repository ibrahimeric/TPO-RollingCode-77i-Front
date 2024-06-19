import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log('Usuario autenticado en PrivateRoute',isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/public/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

