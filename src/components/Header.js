import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";
import Contact from "../pages/Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <div className="Header">
        <Navbar className="navbarHeader" variant="light">
          <Container>
            <Navbar.Brand href="#home">Kevin Austin Holley</Navbar.Brand>
            <Nav>
              <Nav.Link>
                <Link to="/about-me">About Me</Link>
              </Nav.Link>
              <Nav.Link href="#projects">My Projects</Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact Me</Link>
              </Nav.Link>
            </Nav>
            <Route path="/contact" component={Contact} />
          </Container>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};

export default Header;
