import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";
import Contact from "../pages/Contact";
import { Route, Link, useRouteMatch } from "react-router-dom";

const Header = () => {
  const { path } = useRouteMatch();

  return (
    <div className="Header">
      <Navbar className="navbarHeader" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/home">Kevin Austin Holley</Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to="/about-me">About Me</Link>
            </Nav.Link>
            <Nav.Link href="#projects">My Projects</Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Me</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
