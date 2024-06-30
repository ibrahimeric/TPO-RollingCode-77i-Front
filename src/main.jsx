import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Router';
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* Punto de entrada de la aplicacion */}
    <AppRouter/>
  </React.StrictMode>,
)