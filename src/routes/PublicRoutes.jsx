import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PublicRoute = ({ restricted, children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated && restricted) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
