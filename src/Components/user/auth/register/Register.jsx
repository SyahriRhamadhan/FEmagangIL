import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

import IL1 from '../../../../Image/IL1.jpg'
import IL2 from '../../../../Image/IL2.jpg'
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("http://localhost:8080/v1/api/register-member", {
        email: String(email.target.value),
        password: String(password.target.value),
      })
      .then((response) => {
        navigate("/Login");
        swal({
          title: "Berhasil!",
          text: "Register Berhasil",
          icon: "success",
          button: "Oke",
        });
      })
      .catch((error) => {
        swal(error.response.data.message);
      });
  };
  return (
    <Container ><br /><br /><br /><br /><br />
      <Row className="mt-5">
        <Col >
          <Form >
            <h1 style={{ color:'#F0ECE5'}}>Register Page</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={setEmail} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={setPassword} />
            </Form.Group>
            <Button className="text-center m-auto w-100" variant="primary" onClick={register}>
              Sign-In
            </Button>
            <p className="mt-2"> Already Have A Account?
              <a href="/login" style={{ color:'#F0ECE5'}} > Login</a>
            </p>
          </Form>
        </Col>
        <Col>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselItem itemId={1}>
                            <img src={IL1} className='d-block w-75' alt='...' rounded/>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <img src={IL2} className='d-block w-75' alt='...' rounded/>
                        </MDBCarouselItem>
                    </MDBCarousel>
                    </Col>
      </Row>
    </Container>
  )
}

export default Register