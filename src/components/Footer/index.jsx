import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  return (
    <footer className="Footer__container">
      <div className="Footer__section Footer__mapa">
        <h4>Mapa del Sitio</h4>
        <ul>
          <li><Link className="nav__link" to="/" >Inicio</Link></li>
          <li><Link className="nav__link" to="/whoami">Quiénes Somos</Link></li>
          <li><Link className="nav__link" to="/questions">Preguntas</Link></li>
          <li><Link className="nav__link" to="/contact">Contactenos</Link></li>
          <li><Link className="nav__link" to="/exchange-rate">Divisas</Link></li>
        </ul>
      </div>

      <div className="Footer__section Footer__ubicacion">
        <h4>Ubícanos</h4>
        <p>Av. Grau N° 602-C Barranco<br />Al frente de Inversiones La Cruz</p>
        <h5>Horarios</h5>
        <p>Lunes a Viernes: 8:00 am - 6:30 pm<br />Sábados: 8:00 am - 3:00 pm</p>
      </div>

      <div className="Footer__section Footer__datos">
        <h4>Contactos</h4>
        <p>Teléfonos:</p>
        <ul>
          <li><a className="nav__link" href="https://wa.me/51955503668?text=Hola,%20he%20visto%20su%20página%20web%20y%20me%20gustaría%20recibir%20asesoría%20sobre%20la%20compra%20de%20dólares/euros.%20¿Podría%20brindarme%20más%20información?" target="_blank" rel="noopener noreferrer"> (51) 955 503 668</a></li>
        </ul>
        <p>Email: <a href="mailto:cas.bar.jr@gmail.com<">cas.bar.jr@gmail.com</a></p>
      </div>

      <div className="Footer__section Footer__monedas">
        <h4>Monedas</h4>
        <ul className='Footer__section '>
        <li>Dólar estadounidense</li>
        <li>Euro</li>
        <li>Boliviano</li>
        <li>Dólar australiano</li>
        <li>Dólar canadiense</li>
        <li>Franco suizo</li>
        <li>Peso argentino</li>
        <li>Peso chileno</li>
        <li>Peso colombiano</li>
        <li>Peso mexicano</li>
        <li>Real brasileño</li>
        <li>Rublo ruso</li>
        <li>Won surcoreano</li>
        <li>Yen japonés</li>
        <li>Yuan chino</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
