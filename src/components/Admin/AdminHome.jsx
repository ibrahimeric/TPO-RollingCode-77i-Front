import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../../css/Admin-styles/AdminHome.css'

function AdminHomePage() {
  // const history = useHistory();
  
  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <div className="admin-home-page">
      <h1>Bienvenido Administrador</h1>
      <p>¿Qué desea hacer ?</p>
      <nav className='background-nav'>
        <ul className="nav-list">
          <li><Link className="link" to="/admin/mascotas">Administrar Mascotas</Link></li>
          <li><Link className="link" to="/admin/turnos">Administrar Turnos</Link></li>
          <li><Link className="link" to="/admin/adopciones">Administrar Adopciones</Link></li>
        </ul>
      </nav>
      <Link to="/">
        <Button variant="primary">Regresar</Button>
      </Link>
    </div>
  );
}

export default AdminHomePage;
