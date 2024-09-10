import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false); // State to track if the Navbar is expanded

  return (
    <Navbar
      expand="lg"
      className="navbar-custom py-3 fixed-top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">Axel & Steering Rack Repair</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav navbar-toggler"
          onClick={() => setExpanded(expanded ? false : true)} 
        >
          
          {expanded ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i> 
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              href="#home"
              className="nav-Links"
              
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="nav-Links"
             
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-Links"
              
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
