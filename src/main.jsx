import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App'
=======
>>>>>>> b3b5f7415fc0a1a0d1522829d9963a357ad75b1d
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Router';
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* Punto de entrada de la aplicacion */}
    <AppRouter/>
  </React.StrictMode>,
)