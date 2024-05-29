import {useState} from 'react'
import NavBar from './components/Navbar'
import './css/App.css'

function App() {
  const [isAdmin,  setIsAdmin] = useState(true); // Simula si el usuario es administrador

  return (
    <>
     <div className="App">
     <NavBar isAdmin={isAdmin}/>
      <header className="App-header">
        <h1>Bienvenido al Sistema de Gestión Municipal</h1>
      </header>
     </div>
    </>
  )
}

export default App
