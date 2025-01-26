import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { Scrollchor } from "react-scrollchor";
import { GiHamburgerMenu } from "react-icons/gi";
//import resume from "../assets/resume.pdf";



function Header() {
  const NavItemStyle = {
    color: "#9c2c34",
    fontFamily: "Sans-Regular",
    textDecoration: "none",
  };

  const NavBrandStyle = {
    color: "#9c2c34",
    fontFamily: "Sans-Bold",
  };

  //--  RESUME REMOVED --
  // function openResume() {
  //   window.open(resume);
  // }

  return (
    <div>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand style={NavBrandStyle} href="#home">
            {/* <img className = "logo"
                src={logo} alt= "Amey's Logo"/> */}
            Amey
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span style={{ color: "#9c2c34" }}>
              <GiHamburgerMenu />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Nav style={{ textAlign: "center" }}>
              <Scrollchor className="section-link" to="skills">
                <Nav.Link style={NavItemStyle}>Skills</Nav.Link>
              </Scrollchor>
              <Nav.Link>
                <Link style={NavItemStyle} to="/projects">
                  Projects{" "}
                </Link>
              </Nav.Link>
              <Scrollchor className="section-link" to="contact">
                <Nav.Link style={NavItemStyle}>Contact</Nav.Link>
              </Scrollchor>
              <Nav.Link>
                <Link style={NavItemStyle} to="/blog">
                  Blog{" "}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
