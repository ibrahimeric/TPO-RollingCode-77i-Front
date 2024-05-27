import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/components/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
