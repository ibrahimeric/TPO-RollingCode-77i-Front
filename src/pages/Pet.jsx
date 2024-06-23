import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import PetList from '../components/PetList';
import PetListAdopt from '../components/PetListAdopt';
import PetCard from '../components/PetCard';
import PetCardAdopt from '../components/PetCardAdopt';

function Pet() {
  const [showMyPets, setShowMyPets] = useState(true);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const togglePets = () => {
    setShowMyPets(!showMyPets);
  };

  return (
    <>
      <Button onClick={togglePets}>
        {showMyPets ? 'Mostrar Mascotas para Adopción' : 'Mostrar Mis Mascotas'}
      </Button>
      {isMobile ? (
        showMyPets ? <PetCard /> : <PetCardAdopt />
      ) : (
        showMyPets ? <PetList /> : <PetListAdopt />
      )}
    </>
  );
}

export default Pet;
