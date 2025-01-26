import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Head() {
  const NavItemStyle = {
    color: "#9c2c34",
    fontFamily: "Sans-Regular",
    textDecoration: "none",
  };

  const NavBrandStyle = {
    color: "#9c2c34",
    fontFamily: "Sans-Bold",
  };

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
            <Nav.Link>
                <Link style={NavItemStyle} to="/">
                  Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={NavItemStyle} to="/projects">
                  Projects{" "}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Head;
