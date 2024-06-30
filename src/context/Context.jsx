import React, { createContext, useState, useEffect } from 'react';

// Crea un contexto llamado AuthContext que será usado para proporcionar
// y consumir datos relacionados con la autenticación en la aplicación.
const AuthContext = createContext();

// Define el componente proveedor de autenticación.
const AuthProvider = ({ children }) => {
  // Estado que indica si el usuario está autenticado.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  // Efecto que se ejecuta una vez cuando el componente se monta.
  // Revisa si hay un token almacenado en localStorage para determinar
  // si el usuario está autenticado.
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false); // Marca que la carga ha finalizado
  }, []);

  // Función para iniciar sesión. Guarda el token en localStorage y
  // actualiza el estado de autenticación.
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  // Función para cerrar sesión. Elimina el token de localStorage y
  // actualiza el estado de autenticación.
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  // Proporciona el estado de autenticación y las funciones de login y logout
  // a los componentes hijos a través del contexto.
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {!isLoading && children} {/* Renderiza children solo cuando isLoading sea false */}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
