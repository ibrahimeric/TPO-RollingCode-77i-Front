import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const AdminRoute = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/public/login" />;
  }

  return <Outlet />;
};

export default AdminRoute;
