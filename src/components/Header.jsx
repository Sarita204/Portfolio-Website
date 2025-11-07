// import React, { useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import "../styles/header.css";
// import { NavLink } from "react-router-dom";

// const Header = () => {

//   const [expanded, setExpanded] = useState(false);

//   const handleNavClick = () => {
//     setExpanded(false); // close menu after click
//   };

//   return (
//     <Navbar expand="lg" className="custom-navbar" variant="dark" fixed="top" expanded={expanded}
//       onToggle={() => setExpanded(!expanded)}>
//       <Container>
//         {/* Toggle button for mobile */}
//         <div className="ms-auto">
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             onClick={() => setExpanded(expanded ? false : true)}
//             className="ms-auto"
//           />        </div>
//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* Left side nav links */}
//           <Nav className="me-auto nav-links">
//             <Nav.Link as={NavLink} to="/" end className="nav-link">Home</Nav.Link>
//             <Nav.Link as={NavLink} to="/about" className="nav-link">About Me</Nav.Link>
//             <Nav.Link as={NavLink} to="/myprojects" className="nav-link">Projects</Nav.Link>
//           </Nav>

//           {/* Right side social icons */}
//           <Nav className="social-icons">
//             <Nav.Link href="https://www.linkedin.com/in/sarita-p-04b290262/" target="_blank" onClick={handleNavClick}
//             >
//               <FaLinkedin />
//             </Nav.Link>
//             <Nav.Link href="https://github.com/Sarita204" target="_blank" onClick={handleNavClick}
//             >
//               <FaGithub />
//             </Nav.Link>
//             <Nav.Link href="https://mail.google.com/mail/?view=cm&fs=1&to=saritasp204@gmail.com" target="_blank" onClick={handleNavClick}
//             >
//               <FaEnvelope />
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import "../styles/header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // close menu after click
  };

  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        {/* Toggle button for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler ms-auto"
        >
          {expanded ? (
            <IoCloseOutline className="toggle-icon" />
          ) : (
            <IoMdMenu className="toggle-icon" />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side nav links */}
          <Nav className="me-auto nav-links">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="nav-link"
              onClick={handleNavClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link"
              onClick={handleNavClick}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/myprojects"
              className="nav-link"
              onClick={handleNavClick}
            >
              Projects
            </Nav.Link>
          </Nav>

          {/* Right side social icons */}
          <Nav className="social-icons">
            <Nav.Link
              href="https://www.linkedin.com/in/sarita-p-04b290262/"
              target="_blank"
              onClick={handleNavClick}
              className="linkedin"

            >
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Sarita204"
              target="_blank"
              onClick={handleNavClick}
            >
              <FaGithub />
            </Nav.Link>
            <Nav.Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saritasp204@gmail.com"
              target="_blank"
              onClick={handleNavClick}
            >
              <FaEnvelope />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
