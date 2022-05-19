import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NunchiLogo from "../../assets/img/LogoNunchiNegro.png";
import CarWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Container>
        <Navbar.Brand className="display-1 ">
          <Link to="/">
            <img src={NunchiLogo} className="nav__logo" alt="Nunchi Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto nav__menu">
            <Link to="./Products.js">Boxes Prediseñadas</Link>
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
