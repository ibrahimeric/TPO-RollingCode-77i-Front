import React from 'react'
import PetCard from './PetCard';

function PetCardList() {
    const pets = PetsExamples;
  return (
    <Container>
    <h1 className="my-4">Listado de Mascotas</h1>
    <Row>
      {pets.map((pet) => (
        <Col key={pet.id} sm={12} md={6} lg={4}>
          <PetCard pet={pet} />
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default PetCardList