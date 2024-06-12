import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [DNI, setDNI] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (DNI.trim().length < 6) {
      newErrors.DNI = 'El DNI debe tener al menos 6 caracteres';
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
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, DNI, email, phone, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const data = await response.json();
      if (data.usuario) {
        navigate('/login'); // Redirigir al usuario a la página de inicio de sesión u otra página
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrors({ general: error.message });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h1 className="text-center mb-4">Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre y Apellido:</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              required 
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="DNI">DNI:</label>
            <input 
              type="text" 
              className="form-control" 
              id="DNI" 
              value={DNI} 
              onChange={e => setDNI(e.target.value)} 
              required 
            />
            {errors.DNI && <div className="text-danger">{errors.DNI}</div>}
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
            <label htmlFor="phone">Celular:</label>
            <input 
              type="text" 
              className="form-control" 
              id="phone" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} 
              required 
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
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
          {errors.general && <div className="text-danger mb-3">{errors.general}</div>}
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
