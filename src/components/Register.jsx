import React, { useState } from 'react'; // Importa React y el hook useState
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate de react-router-dom para la navegación
import '../css/Register.css'; // Importa el archivo de estilos CSS

const Register = () => {
  // Declaración de estados locales para los campos del formulario y otros estados necesarios
  const [name, setName] = useState(''); // Estado para el nombre
  const [DNI, setDNI] = useState(''); // Estado para el DNI
  const [email, setEmail] = useState(''); // Estado para el email
  const [phone, setPhone] = useState(''); // Estado para el teléfono
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [repeatPassword, setRepeatPassword] = useState(''); // Estado para repetir la contraseña
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const [errors, setErrors] = useState({}); // Estado para manejar los errores del formulario
  const navigate = useNavigate(); // Hook de navegación de react-router-dom

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {}; // Objeto para almacenar errores

    // Validaciones de cada campo
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
      // Realiza una solicitud POST al servidor para registrar al usuario
      const response = await fetch('https://back-rum-rolling.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, DNI, email, phone, password }), // Datos del formulario en el cuerpo de la solicitud
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok'); // Maneja errores de la respuesta
      }

      const data = await response.json();
      if (data.usuario) {
        navigate('/login'); // Redirige al usuario a la página de inicio de sesión si el registro es exitoso
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrors({ general: error.message }); // Maneja errores generales y los muestra en el formulario
    }
  };

  return (
    <div className="container-register register-container d-flex justify-content-center align-items-center vh-100"> {/* Contenedor principal */}
      <div className="col-md-6"> {/* Columna para centrar el formulario */}
        <h1 className="register-heading text-center mb-4">Registrarse</h1> {/* Encabezado */}
        <form onSubmit={handleSubmit} className="register-form"> {/* Formulario */}
          <div className="form-group register-form-group"> {/* Grupo de formulario para el nombre */}
            <label htmlFor="name">Nombre y Apellido:</label>
            <input
              type="text"
              className="form-control register-form-control"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)} // Actualiza el estado del nombre
              required
            />
            {errors.name && <div className="text-danger">{errors.name}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-group register-form-group"> {/* Grupo de formulario para el DNI */}
            <label htmlFor="DNI">DNI:</label>
            <input
              type="text"
              className="form-control register-form-control"
              id="DNI"
              value={DNI}
              onChange={e => setDNI(e.target.value)} // Actualiza el estado del DNI
              required
            />
            {errors.DNI && <div className="text-danger">{errors.DNI}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-group register-form-group"> {/* Grupo de formulario para el email */}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control register-form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)} // Actualiza el estado del email
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-group register-form-group"> {/* Grupo de formulario para el teléfono */}
            <label htmlFor="phone">Celular:</label>
            <input
              type="text"
              className="form-control register-form-control"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)} // Actualiza el estado del teléfono
              required
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-group register-form-group"> {/* Grupo de formulario para la contraseña */}
            <label htmlFor="password">Contraseña:</label>
            <input
              type={showPassword ? "text" : "password"} // Muestra u oculta la contraseña
              className="form-control register-form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)} // Actualiza el estado de la contraseña
              required
            />
            {errors.password && <div className="text-danger">{errors.password}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-group register-form-group"> {/* Grupo de formulario para repetir la contraseña */}
            <label htmlFor="repeatPassword">Repetir Contraseña:</label>
            <input
              type={showPassword ? "text" : "password"} // Muestra u oculta la contraseña
              className="form-control register-form-control"
              id="repeatPassword"
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)} // Actualiza el estado de repetir la contraseña
              required
            />
            {errors.repeatPassword && <div className="text-danger">{errors.repeatPassword}</div>} {/* Muestra el error si existe */}
          </div>
          <div className="form-check mb-3"> {/* Checkbox para mostrar/ocultar contraseñas */}
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword} // Estado del checkbox
              onChange={e => setShowPassword(e.target.checked)} // Actualiza el estado del checkbox
            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseñas</label>
          </div>
          {errors.general && <div className="text-danger mb-3">{errors.general}</div>} {/* Muestra el error general si existe */}
          <button type="submit" className="btn btn-primary register-btn-primary btn-block mb-3">Registrarse</button> {/* Botón de registro */}
          <div className="text-center">
            <Link to="/login">¿Ya tienes una cuenta? Iniciar Sesión</Link> {/* Enlace a la página de inicio de sesión */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register; // Exporta el componente Register
