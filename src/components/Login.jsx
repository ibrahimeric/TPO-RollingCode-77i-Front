import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h1 className="text-center mb-4">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
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
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type={showPassword ? "text" : "password"} 
              className="form-control" 
              id="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="form-check mb-3">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="showPassword" 
              checked={showPassword} 
              onChange={e => setShowPassword(e.target.checked)} 
            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-3">Iniciar Sesión</button>
          <div className="text-center">
            <a href="/recover-password">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
