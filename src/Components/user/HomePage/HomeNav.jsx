import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiAlignJustify } from "react-icons/fi";
import React from "react";
import {MDBBtn} from 'mdb-react-ui-kit';

function HomeNav() {
  return (
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} style={{backgroundColor: '#31304D'}} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid >
            <Navbar.Brand href="/landing" style={{ color:'#F0ECE5'}} >Infinite Learning</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} > 
              <FiAlignJustify className='text-dark'/>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              // className="bg-black"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color:'#F0ECE5'}}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link style={{ color:'#F0ECE5'}} href="#action1">Home</Nav.Link>
                  {/* <Nav.Link>  */}
                    <MDBBtn href='/login' className='text-black' style={{ backgroundColor: "#F0ECE5" }} >
                  Login/Register
                    </MDBBtn>
                  {/* </Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default HomeNav;


