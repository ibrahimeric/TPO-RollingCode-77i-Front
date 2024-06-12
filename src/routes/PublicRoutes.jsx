import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PublicRoute = ({ restricted }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated && restricted) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
