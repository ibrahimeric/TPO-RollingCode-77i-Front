
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetCard from './components/PetCard';
import { useMediaQuery } from 'react-responsive';
import PetEdit from './components/PetEdit';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pets" element={isTabletOrMobile ? <PetCard /> : <PetList />} />
        <Route path="/pet/:id" element={<PetDetail />} /> 
        <Route path="/pet/:id/edit" element={<PetEdit />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
