import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PublicRoute = ({ restricted }) => {
  const isAuthenticated = useContext(AuthContext);

  return <Outlet />;
};

export default PublicRoute;