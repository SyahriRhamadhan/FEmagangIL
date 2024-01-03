import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiAlignJustify } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingNav() {
  // eslint-disable-next-line no-unused-vars
  const [userLogin, setUserLogin] = useState(false);
  const token = localStorage.getItem("token");
  // eslint-disable-next-line no-unused-vars
  const role = localStorage.getItem("role");

  const navigate = useNavigate();
    const userRole = role === "admin"
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
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} style={{backgroundColor: '#31304D'}} expand={expand} className="bg-body-tertiary ">
          <Container fluid >
          <Navbar.Brand href="/landing" className='ms-3' style={{ color:'#F0ECE5'}} ><b>InfiniteCamp</b></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} > 
              <FiAlignJustify className='text-dark'/>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              // className="text-md-black"
              style={{ backgroundColor: '#31304D'}}
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color:'#F0ECE5'}}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  {userRole ? (
                  <Nav.Link style={{ color:'#F0ECE5'}} href="/dashboard">Dasboard</Nav.Link>
                  ) : null}
                  
                  <NavDropdown
                     title={<span style={{ color: '#F0ECE5' }}>Program</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  href="/program/studi-independent">Studi Independent</NavDropdown.Item>
                    <NavDropdown.Item  href="/program/magang">Magang</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                     title={<span style={{ color: '#F0ECE5' }}>Profile</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  href="/profile">Profile info</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={logout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default LandingNav;


