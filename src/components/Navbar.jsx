import { Link } from 'react-router-dom';

const Navbar = ({ setContacto, barsAnimate, setBarsAnimate }) => {
  return (
    <nav className="navbar">
      {/* Otros enlaces de navegación */}
      <Link to="/contact" className="HnavLink" onClick={() => { setContacto(true); setBarsAnimate(false); }}>
        Contactanos
      </Link>
      {/* Botón de menú para dispositivos móviles */}
      <button
        className={`menu-btn ${barsAnimate ? 'animate' : ''}`}
        onClick={() => setBarsAnimate(!barsAnimate)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
