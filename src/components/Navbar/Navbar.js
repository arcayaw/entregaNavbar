import React from "react";
import Nunchibox from "../../assets/img/4.png";

function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img src={Nunchibox} className="imgEnCart" alt="carro vacio" />
      </a>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Box prediseñadas
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Arma tu box
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Faq's
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            contacto
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            nosotros
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
