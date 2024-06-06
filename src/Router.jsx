import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const AppRouter = () => {
  return (
    <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  )
}

export default AppRouter
