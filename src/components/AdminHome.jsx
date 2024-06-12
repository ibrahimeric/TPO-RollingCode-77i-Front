import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/AdminHome.css'

function AdminHomePage() {
  // const history = useHistory();
  /* Token */
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcxODIxMzIxOSwiZXhwIjoxNzE4MjE2ODE5fQ.EXqVpNXN3igccDzLoI_MFqoJurIN9l-tMxRR2UzoiFA';

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <div className="admin-home-page">
      <h1>Bienvenido Administrador</h1>
      <p>¿Qué desea hacer ?</p>
      <nav className='background-nav'>
        <ul className='sin-fondo'>
          <nav>
            <ul className="nav-list">
              <li><Link className="link" to={{ pathname: "/admin/mascotas", state: { accessToken } }}>Administrar Mascotas</Link></li>
              <li><Link className="link" to={{ pathname: "/admin/turnos", state: { accessToken } }}>Administrar Turnos</Link></li>
              <li><Link className="link" to={{ pathname: "/admin/adopciones", state: { accessToken } }}>Administrar Adopciones</Link></li>
            </ul>
          </nav>
        </ul>
      </nav>
      <Link to="/">
        <Button variant="primary">Regresar</Button>
      </Link>
    </div>
  );
}

export default AdminHomePage;
