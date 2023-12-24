import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function LnadingNav() {
  // eslint-disable-next-line no-unused-vars
  const [userLogin, setUserLogin] = useState(false);
  const token = localStorage.getItem("token");
  // eslint-disable-next-line no-unused-vars
  const role = localStorage.getItem("role");

  const navigate = useNavigate();
//   const userRole = role === "admin"
  useEffect(() => {
    token ? setUserLogin(true) : setUserLogin(false);
  }, [token]);

  const logout = () => {
    setUserLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    navigate('/login')
    window.location.reload();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Profile Info
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ppp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
              Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LnadingNav;