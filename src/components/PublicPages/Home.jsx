import React, { useState } from 'react';
import '../../App';
import AdminHomePage from '../Admin/AdminHome';
import AdminMascotas from '../Admin/AdminMascotas';
import AdminTurnos from '../Admin/AdminTurnos';
import AdminAdopciones from '../Admin/AdminAdopciones';

function App() {
  const [page, setPage] = useState('home');

  let content;
  switch (page) {
    case 'home':
      content = <AdminHomePage setPage={setPage} />;
      break;
    case 'mascotas':
      content = <AdminMascotas setPage={setPage} />;
      break;
    case 'turnos':
      content = <AdminTurnos setPage={setPage} />;
      break;
    case 'adopciones':
      content = <AdminAdopciones setPage={setPage} />;
      break;
    default:
      content = <AdminHomePage setPage={setPage} />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Administración de Mascotas</h1>
      </header>
      <main className="main-content">
        {content}
      </main>
    </div>
  );
}

export default App;
