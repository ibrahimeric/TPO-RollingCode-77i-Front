// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Error404.css'

const Error404 = () => {
  return (
    <div className='error404'>
      <div className="center">
        <div className="error">
          <div className="number">4</div>
          <div className="illustration">
            <div className="circle"></div>
            <div className="clip">
              <div className="paper">
                <div className="face">
                  <div className="eyes">
                    <div className="eye eye-left"></div>
                    <div className="eye eye-right"></div>
                  </div>
                  <div className="mouth"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>

        <div className="text">
          Ups! La página que buscas no existe
          <p>Es probable que estés aquí porque:</p>
          <ul>
            <li>La página se ha movido</li>
            <li>La página ha sido eliminada</li>
            <li>Estabas buscando tus gatitos y te perdiste</li>
            <li>Te gustan las páginas de error</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Error404;

