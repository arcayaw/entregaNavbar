import React from "react";
import { Nav } from "react-bootstrap";
import carritoVacio from "../../assets/img/carritovacio.png";

export default function CarWidget({ count }) {
  return (
    <div>
      <Nav.Link href="#link">
        <img src={carritoVacio} className="nav__cart" alt="carro vacio" />
        {count}
      </Nav.Link>
    </div>
  );
}
