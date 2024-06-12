import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

Modal.setAppElement('#root'); // Especificar el elemento root para accesibilidad

function AdminMascotas({ setPage }) {
  const [mascotas, setMascotas] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [turnos, setTurnos] = useState([]); // Agregar estado para los turnos

  useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcxODIwNzg1MSwiZXhwIjoxNzE4MjExNDUxfQ.SV06qE_JHk21ioRP6ULJmvyxniv2NQ-SHrhKDy25_jQ';
    const fetchMascotas = async () => {
      try {
        const response = await axios.get('https://back-rum-rolling.onrender.com/admin/pets', {
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
      await axios.patch(`https://back-rum-rolling.onrender.com/admin/pets/update/${selectedMascota._id}`, selectedMascota);
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
      await axios.delete(`https://back-rum-rolling.onrender.com/admin/pets/delete/${id}`);
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
      <nav>
        <ul className="nav-list">
          <li><Link className="link" to="/admin/mascotas">Administrar Mascotas</Link></li>
          <li><Link className="link" to="/admin/turnos">Administrar Turnos</Link></li>
          <li><Link className="link" to="/admin/adopciones">Administrar Adopciones</Link></li>
        </ul>
      </nav>
      <Link to="/admin">
        <Button variant="primary">Regresar</Button>
      </Link>
    </div>
  );
}

export default AdminMascotas;
