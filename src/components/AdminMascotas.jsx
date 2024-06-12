import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

Modal.setAppElement('#root'); // Especificar el elemento root para accesibilidad

function AdminMascotas({ setPage, accessToken }) {
  const [mascotas, setMascotas] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [turnos, setTurnos] = useState([]); // Agregar estado para los turnos

   useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcxODIxMzIxOSwiZXhwIjoxNzE4MjE2ODE5fQ.EXqVpNXN3igccDzLoI_MFqoJurIN9l-tMxRR2UzoiFA';
    const fetchMascotas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/pets', {
          headers: {
            Authorization: 'Bearer ' + accessToken // Reemplaza accessToken con tu token de acceso válido
          }
        });
        setMascotas(response.data);
      } catch (err) {
        setError('Error fetching mascotas');
        console.error('Error fetching mascotas:', err);
      }
    };

    fetchMascotas();
  }, []);
  const openModal = (mascota) => {
    setSelectedMascota(mascota);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMascota(null);
    setModalIsOpen(false);
  };

  const handleChangeAttribute = (e) => {
    const { name, value } = e.target;
    setSelectedMascota({
      ...selectedMascota,
      [name]: value
    });
  };

  const handleEditMascota = async () => {
    try {
      await axios.patch(`http://localhost:5000/admin/pets/update/${selectedMascota._id}`, selectedMascota);
      const updatedMascotas = mascotas.map(mascota =>
        mascota._id === selectedMascota._id ? selectedMascota : mascota
      );
      setMascotas(updatedMascotas);
      closeModal();
    } catch (err) {
      setError('Error updating mascota');
      console.error('Error updating mascota:', err);
    }
  };

  const handleDeleteMascota = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/pets/delete/${id}`);
      const updatedMascotas = mascotas.filter(mascota => mascota._id !== id);
      setMascotas(updatedMascotas);
    } catch (err) {
      setError('Error deleting mascota');
      console.error('Error deleting mascota:', err);
    }
  };

  return (
    <div className="admin-home-page">
      <h2>Administrar Mascotas</h2>
      {error && <p className="error-message">{error}</p>}
      <ul className="item-list">
        {mascotas.map(mascota => (
          <li key={mascota._id} className="item">
            <span>{mascota.name}</span>
          </li>
        ))}
      </ul>
      <Link to="/admin">
        <Button variant="primary">Regresar</Button>
      </Link>
    </div>
  );
}

export default AdminMascotas;
