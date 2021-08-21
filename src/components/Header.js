import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <Navbar className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Container>
          <Navbar.Brand>
            <Link to="/home">Kevin Austin Holley</Link>
          </Navbar.Brand>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/about-me" className={"nav-link " + props.active}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={"nav-link " + props.active}>
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={"nav-link " + props.active}>
                Contact Me
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
