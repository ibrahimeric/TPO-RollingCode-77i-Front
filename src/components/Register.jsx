import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    if (apellido.trim().length < 2) {
      newErrors.apellido = 'El apellido debe tener al menos 2 caracteres';
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido';
    }

    if (password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Manejar la respuesta del backend según sea necesario
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h1 className="text-center mb-4">Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input 
              type="text" 
              className="form-control" 
              id="nombre" 
              value={nombre} 
              onChange={e => setNombre(e.target.value)} 
              required 
            />
            {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input 
              type="text" 
              className="form-control" 
              id="apellido" 
              value={apellido} 
              onChange={e => setApellido(e.target.value)} 
              required 
            />
            {errors.apellido && <div className="text-danger">{errors.apellido}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input 
              type={showPassword ? "text" : "password"} 
              className="form-control" 
              id="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repetir Contraseña:</label>
            <input 
              type={showPassword ? "text" : "password"} 
              className="form-control" 
              id="repeatPassword" 
              value={repeatPassword} 
              onChange={e => setRepeatPassword(e.target.value)} 
              required 
            />
            {errors.repeatPassword && <div className="text-danger">{errors.repeatPassword}</div>}
          </div>
          <div className="form-check mb-3">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="showPassword" 
              checked={showPassword} 
              onChange={e => setShowPassword(e.target.checked)} 
            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseñas</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-3">Registrarse</button>
          <div className="text-center">
            <Link to="/login">¿Ya tienes una cuenta? Iniciar Sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
