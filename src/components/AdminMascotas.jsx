import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Configura el elemento raíz para el modal, mejorando la accesibilidad
Modal.setAppElement('#root');

function AdminMascotas({ setPage }) {
  // Estado para almacenar las mascotas
  const [mascotas, setMascotas] = useState([]);
  // Estado para almacenar la mascota seleccionada
  const [selectedMascota, setSelectedMascota] = useState(null);
  // Estado para controlar si el modal está abierto o cerrado
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Estado para manejar errores
  const [error, setError] = useState(null);
  // Estado para manejar los turnos (aunque no se usa en este código)
  const [turnos, setTurnos] = useState([]);

  // useEffect para obtener la lista de mascotas cuando el componente se monta
  useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcxODIwNzg1MSwiZXhwIjoxNzE4MjExNDUxfQ.SV06qE_JHk21ioRP6ULJmvyxniv2NQ-SHrhKDy25_jQ';
    const fetchMascotas = async () => {
      try {
        // Solicitud GET para obtener las mascotas
        const response = await axios.get('https://back-rum-rolling.onrender.com/admin/pets', {
          headers: {
            Authorization: 'Bearer ' + accessToken // Agregar el token de acceso en los encabezados
          }
        });
        // Actualizar el estado con los datos recibidos
        setMascotas(response.data);
      } catch (err) {
        // Manejo de errores
        setError('Error fetching mascotas');
        console.error('Error fetching mascotas:', err);
      }
    };

    fetchMascotas();
  }, []);

  // Función para abrir el modal y establecer la mascota seleccionada
  const openModal = (mascota) => {
    setSelectedMascota(mascota);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal y deseleccionar la mascota
  const closeModal = () => {
    setSelectedMascota(null);
    setModalIsOpen(false);
  };

  // Función para manejar cambios en los atributos de la mascota seleccionada
  const handleChangeAttribute = (e) => {
    const { name, value } = e.target;
    setSelectedMascota({
      ...selectedMascota,
      [name]: value
    });
  };

  // Función para manejar la edición de una mascota
  const handleEditMascota = async () => {
    try {
      // Solicitud PATCH para actualizar la mascota
      await axios.patch(`https://back-rum-rolling.onrender.com/admin/pets/update/${selectedMascota._id}`, selectedMascota);
      // Actualizar la lista de mascotas con los cambios
      const updatedMascotas = mascotas.map(mascota =>
        mascota._id === selectedMascota._id ? selectedMascota : mascota
      );
      setMascotas(updatedMascotas);
      closeModal();
    } catch (err) {
      // Manejo de errores
      setError('Error updating mascota');
      console.error('Error updating mascota:', err);
    }
  };

  // Función para manejar la eliminación de una mascota
  const handleDeleteMascota = async (id) => {
    try {
      // Solicitud DELETE para eliminar la mascota
      await axios.delete(`https://back-rum-rolling.onrender.com/admin/pets/delete/${id}`);
      // Actualizar la lista de mascotas eliminando la mascota borrada
      const updatedMascotas = mascotas.filter(mascota => mascota._id !== id);
      setMascotas(updatedMascotas);
    } catch (err) {
      // Manejo de errores
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
            <button onClick={() => openModal(mascota)}>Editar</button>
            <button onClick={() => handleDeleteMascota(mascota._id)}>Eliminar</button>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Mascota"
      >
        {selectedMascota && (
          <div>
            <h2>Editar Mascota</h2>
            <form>
              <label>
                Nombre:
                <input type="text" name="name" value={selectedMascota.name} onChange={handleChangeAttribute} />
              </label>
              {/* Otros campos para editar los atributos de la mascota */}
              <button type="button" onClick={handleEditMascota}>Guardar Cambios</button>
              <button type="button" onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default AdminMascotas;