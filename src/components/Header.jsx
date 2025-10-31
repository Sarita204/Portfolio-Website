import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/header.css";
import { NavLink } from "react-router-dom"; // ✅ Correct import here

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" fixed="top">
      <Container>
        {/* Toggle button for mobile */}
        <div className="ms-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side nav links */}
          <Nav className="me-auto nav-links">
            {/* <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About Me</Nav.Link>
            <Nav.Link href="/myprojects" className="nav-link">Projects</Nav.Link> */}
             <Nav.Link as={NavLink} to="/" end className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/myprojects" className="nav-link">Projects</Nav.Link>
          </Nav>

          {/* Right side social icons */}
          <Nav className="social-icons">
            <Nav.Link href="https://www.linkedin.com/in/sarita-p-04b290262/" target="_blank">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/Sarita204" target="_blank">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="https://mail.google.com/mail/?view=cm&fs=1&to=saritasp204@gmail.com" target="_blank">
              <FaEnvelope />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


