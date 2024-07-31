import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PublicRoutes = ({children}) => {
  const { isAuthenticated } = useContext(AuthContext);



  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet/>;
};

export default PublicRoutes;

