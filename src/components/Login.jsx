import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/Context'; // Importar AuthContext
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Usar el contexto

  const validateForm = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido';
    }

    if (password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
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
      const response = await fetch('http://localhost:5000/auth/login', {  
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
      if (data.token) {
        login(data.token); // Llamar a la función de inicio de sesión del contexto
        navigate('/'); // Redirigir al usuario a la página principal u otra página protegida
      }
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
            <Link to="/recover-password">¿Olvidaste tu contraseña?</Link>
          </div>
          <div className="text-center">
            <Link to="/register">¿No tienes una cuenta? Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
