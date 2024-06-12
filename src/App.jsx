import Slider from './components/Slider';
import Cards from './components/Cards'; // Importamos el componente Cards
import UserExperience from './components/UserExperience';
import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetCard from './components/PetCard';
import { useMediaQuery } from 'react-responsive';
import PetEdit from './components/PetEdit';
import PetAdd from './components/PetAdd';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      <Slider />
      <Cards />
      <UserExperience />

      <BrowserRouter>
      <Routes>
        
        <Route path="/pets" element={isTabletOrMobile ? <PetCard /> : <PetList />} />
        <Route path="/pet/:id" element={<PetDetail />} /> 
        <Route path="/pet/:id/edit" element={<PetEdit />} />
        <Route path="/pet/add" element={<PetAdd />} /> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


