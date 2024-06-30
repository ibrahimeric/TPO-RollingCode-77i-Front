import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Components-styles/Error404.css'

const Error404 = () => {
  return (
    <div className='error404'>
      <div class="center">
        <div class="error">
          <div class="number">4</div>
          <div class="illustration">
            <div class="circle"></div>
            <div class="clip">
              <div class="paper">
                <div class="face">
                  <div class="eyes">
                    <div class="eye eye-left"></div>
                    <div class="eye eye-right"></div>
                  </div>
                 
                  <div class="mouth"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="number">4</div>
        </div>

        <div class="text">Ups! La pagina que buscas no existe
        <p>Es probable que estes aqui porque:</p>
      <ul>
        <li>La pagina se ha movido</li>
        <li>La pagina ha sido eliminada</li>
        <li>Estabas buscando tus gatitos y te perdiste</li>
        <li>Te gustan las paginas de error</li>
      </ul>
        </div>
</div>
      </div>

  )
}

export default Error404
