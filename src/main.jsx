import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Router';
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)