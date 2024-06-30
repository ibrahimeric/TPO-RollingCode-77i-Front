import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import '../css/Login.css';
import config from '../utils/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const backServerUrl = config.backServerUrl

  const validateForm = () => {
    const newErrors = {}; // Objeto para almacenar errores

    // Validación del campo email
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido';
    }

    setErrors(newErrors); // Actualiza el estado de errores
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (!validateForm()) {
      return; // Si el formulario no es válido, no continúa
    }
    try {
      const response = await fetch(`${backServerUrl}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Datos del formulario en el cuerpo de la solicitud
      });

      if (!response.ok) {
        throw new Error('Network response was not ok'); // Maneja errores de la respuesta
      }

      const data = await response.json();
      const token = data.token; // Obtiene el token de la respuesta
      if (token) {
        login(token); // Llama a la función login del contexto para iniciar sesión
        navigate('/'); // Redirige al usuario a la página principal u otra página protegida
      }
    } catch (error) {
      console.error('Error logging in:', error); // Maneja errores de la solicitud
    }
  };

  return (
    <div className="container-login d-flex justify-content-center align-items-center vh-100"> {/* Contenedor principal */}
      <div className="col-md-6"> {/* Columna para centrar el formulario */}
        <h1 className="login-heading text-center mb-4">Iniciar Sesión</h1> {/* Encabezado */}
        <form onSubmit={handleSubmit} className="login-form"> {/* Formulario */}
          <div className="form-group login-form-group"> {/* Grupo de formulario para el email */}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control login-form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)} // Actualiza el estado del email
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-group login-form-group"> {/* Grupo de formulario para la contraseña */}
            <label htmlFor="password">Contraseña:</label>
            <input
              type={showPassword ? "text" : "password"} // Muestra u oculta la contraseña
              className="form-control login-form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)} // Actualiza el estado de la contraseña
              required
            />
            {errors.password && <div className="text-danger">{errors.password}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-check mb-3"> {/* Checkbox para mostrar/ocultar contraseñas */}
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword} // Estado del checkbox
              onChange={e => setShowPassword(e.target.checked)} // Actualiza el estado del checkbox
            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
          </div>
          <button type="submit" className="btn btn-primary login-btn-primary btn-block mb-3">Iniciar Sesión</button> {/* Botón de inicio de sesión */}
          <div className="text-center">
            <Link to="/recover-password">¿Olvidaste tu contraseña?</Link> {/* Enlace para recuperar contraseña */}
          </div>
          <div className="text-center">
            <Link to="/public/register">¿No tienes una cuenta? Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; // Exporta el componente Login
