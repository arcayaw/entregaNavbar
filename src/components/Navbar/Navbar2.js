import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NunchiLogo from "../../assets/img/LogoNunchiNegro.png";
import CarWidget from "../CartWidget/CartWidget";

function Navbar2() {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" className="display-1 ">
          <img src={NunchiLogo} className="nav__logo" alt="Nunchi Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto nav__menu">
            <Nav.Link href="#link" className="nav__link">
              Box Prediseñadas
            </Nav.Link>
            <Nav.Link href="#link">Arma tu Box</Nav.Link>
            <Nav.Link href="#link">FAQ's</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <CarWidget count={4} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
