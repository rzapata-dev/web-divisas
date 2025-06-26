import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

import logoimg1 from "../../../src/assets/images/header/logo.svg";

const whatsappMessage = encodeURIComponent(
  "¡Hola! Me interesa cambiar divisas y quisiera conocer más sobre sus servicios. ¿Podrían brindarme detalles sobre el proceso?"
);

const whatsappLink = `https://wa.me/51955503668?text=${whatsappMessage}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <img src={logoimg1} alt="Logo J & R Dólares y Euros" className="nav__logo-img" />
          <span className="nav__logo-text">
            <span>Casa de Cambio</span>
            <span className="nav__logo-subtext">J & R - Barranco</span>
          </span>
        </Link>

        <ul className={`nav__list ${isMenuOpen ? "nav__list--open" : ""}`}>
          <li className="nav__item">
            <Link className="nav__link" to="/whoami" onClick={closeMenu}>
              ¿QUIENES SOMOS?
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/questions" onClick={closeMenu}>
              PREGUNTAS
            </Link>
          </li>
          <li className="nav__item">
            <Link className={`nav__link ${isMenuOpen ? "nav__link--highlight" : ""}`} to="/contact" onClick={closeMenu}>
              CONTACTENOS
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/exchange-rate" onClick={closeMenu}>
              DIVISAS
            </Link>
          </li>
          <li className="nav__item">
            <a className="nav__link nav__link--highlight" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              +51 955 503 668
            </a>
          </li>
        </ul>
        <button className="nav__toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
