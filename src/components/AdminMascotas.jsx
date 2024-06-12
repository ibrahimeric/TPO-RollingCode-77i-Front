import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Especificar el elemento root para accesibilidad

function AdminMascotas({ setPage }) {
  const [mascotas, setMascotas] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/pets');
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
    <div className="admin-page">
      <h2 className="header">Administrar Mascotas</h2>
      {error && <p className="error-message">{error}</p>}
      <ul className="item-list">
        {mascotas.map(mascota => (
          <li key={mascota._id} className="item">
            <span>{mascota.name} - {mascota.species}</span>
            <div className="button-group">
              <button className="edit-button" onClick={() => openModal(mascota)}>Editar Mascota</button>
              <button className="delete-button" onClick={() => handleDeleteMascota(mascota._id)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="nav-button" onClick={() => setPage('home')}>Volver a la página principal</button>

      {selectedMascota && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
          <h3>Editar Mascota</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleEditMascota(); }}>
            <label>
              Especie:
              <input type="text" name="species" value={selectedMascota.species} onChange={handleChangeAttribute} />
            </label>
            <label>
              Nombre:
              <input type="text" name="name" value={selectedMascota.name} onChange={handleChangeAttribute} />
            </label>
            <label>
              Raza:
              <input type="text" name="race" value={selectedMascota.race} onChange={handleChangeAttribute} />
            </label>
            <label>
              Edad:
              <input type="number" name="age" value={selectedMascota.age} onChange={handleChangeAttribute} />
            </label>
            <button type="submit" className="submit-button">Guardar</button>
            <button type="button" className="cancel-button" onClick={closeModal}>Cancelar</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AdminMascotas;
