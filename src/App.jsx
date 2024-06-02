import CardComponent from './components/Cards';

function App() {

  return (
    <>
      <div className="cards-container">
        <CardComponent
          imagen="/public/cards/card1.webp"
          title="Registro de Mascotas"
          text="Registra y gestiona la información de tus mascotas fácilmente"
        />
        <CardComponent
          imagen="/public/cards/card2.webp"
          title="Adopción de Mascotas"
          text="Encuentra una nueva familia para mascotas necesitadas"
        />
        <CardComponent
          imagen="/public/cards/card3.webp"
          title="Reserva de Turnos"
          text="Agenda turnos para vacunación y castración de manera sencilla"
        />
        {/* Duplica tantas tarjetas como necesites */}
      </div>
    </>
  )
}

export default App
