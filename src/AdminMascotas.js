import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function AdminMascotas({ setPage }) {
  const [mascotas, setMascotas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        console.log('Fetching mascotas...');
        const response = await axios.get('http://localhost:5000/pet');
        console.log('Mascotas fetched:', response.data);
        setMascotas(response.data);
      } catch (err) {
        setError('Error fetching mascotas');
        console.error('Error fetching mascotas:', err);
      }
    };

    fetchMascotas();
  }, []);

  const handleChangeAttribute = async (id, attribute, newValue) => {
    try {
      await axios.put(`http://localhost:5000/mascotas/${id}`, { [attribute]: newValue });
      const updatedMascotas = mascotas.map(mascota =>
        mascota._id === id ? { ...mascota, [attribute]: newValue } : mascota
      );
      setMascotas(updatedMascotas);
    } catch (err) {
      setError('Error updating mascota');
      console.error('Error updating mascota:', err);
    }
  };

  const handleDeleteMascota = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/mascotas/${id}`);
      const updatedMascotas = mascotas.filter(mascota => mascota._id !== id);
      setMascotas(updatedMascotas);
    } catch (err) {
      setError('Error deleting mascota');
      console.error('Error deleting mascota:', err);
    }
  };

  return (
    <div className="admin-page">
      <h2>Administrar Mascotas</h2>
      {error && <p>{error}</p>}
      <ul className="item-list">
        {mascotas.map(mascota => (
          <li key={mascota._id} className="item">
            <span>{mascota.name} - {mascota.species}</span>
            <div className="button-group">
              <button className="edit-button" onClick={() => handleChangeAttribute(mascota._id, 'name', prompt('Nuevo nombre:'))}>Editar Nombre</button>
              <button className="edit-button" onClick={() => handleChangeAttribute(mascota._id, 'race', prompt('Nueva raza:'))}>Editar Raza</button>
              <button className="delete-button" onClick={() => handleDeleteMascota(mascota._id)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="nav-button" onClick={() => setPage('home')}>Volver a la página principal</button>
    </div>
  );
}

export default AdminMascotas;
