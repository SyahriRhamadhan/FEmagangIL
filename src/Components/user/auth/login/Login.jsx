import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import IL1 from '../../../../Image/IL1.jpg'
import IL2 from '../../../../Image/IL2.jpg'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userLogin, setUserLogin] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        token ? setUserLogin(true) : setUserLogin(false);
    }, [token]);

    const login = () => {
        axios
            .post("http://localhost:8080/v1/api/Login", {
                email: String(email.target.value),
                password: String(password.target.value),
            })
            .then((response) => {
                localStorage.setItem("token", response.data.data.accessToken);
                localStorage.setItem("role", response.data.data.role);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                swal("Login Success", {
                    icon: "success",
                });
                const user = response.data.data.role
                if (user === "admin") {
                    navigate("/dashboard");
                    // navigate("/landing");
                } else if (user === "member") {
                    navigate("/landing");
                }
            })
            .catch((error) => {
                swal(error.response.data.message);
            });
    };
    return (
        <Container ><br /><br /><br /><br /><br />
            {!userLogin ? (
                <Row className="mt-5">
                    <Col >
                        <Form >
                            <h1 style={{ color:'#F0ECE5'}}>Login Page</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control className="" type="email" placeholder="Enter email" onChange={setEmail} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={setPassword} />
                            </Form.Group>
                            <Button onClick={login} className="text-center m-auto w-100" variant="primary" > Login</Button>
                            <p className="mt-2"> Not a Infinite Learning Member?
                                <a style={{ color:'#F0ECE5'}}href="/Register"> Register</a>
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
            ) : null}
        </Container>
    )
}

export default Login