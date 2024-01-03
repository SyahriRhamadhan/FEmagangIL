import {  Card, Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
export default function Course() {
    return(
        <Container className="mt-5">
        <h2 className=" d-flex justify-content-between">
            <b>Kelas Infinite Learning Berbasis Industri</b>
            <Button href="/program/studi-independent" style={{ backgroundColor: "#F97316" }}>all program</Button>
        </h2>
        <h5>Infinite Learnig menyediakan berbagai macam kelas yang sudah berbasis industri untuk meningkatkan keterampilan digital kamu.</h5>
        <Row>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src="https://static.wixstatic.com/media/11062b_f99ee89647c9464a8fb6e1d8ecb0d70b~mv2.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Mobile Development</Card.Title>
                    <Card.Text>
                    Unlock the World of Mobile Development: Build, Innovate, Transform!
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                    From Rp 1.800.000
                    </Card.Text>
                    <Button href="https://wa.me/6285967235440" style={{ backgroundColor: "#F97316" }}>Chat For More Info</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src="https://static.wixstatic.com/media/11062b_d99fa4045ff24b3db75778a90529c926~mv2.jpg/v1/fill/w_272,h_182,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_d99fa4045ff24b3db75778a90529c926~mv2.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>
                    Unleash the Power of Web Development: Create, Innovate, Transform Onli...
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                    From Rp 1.800.000
                    </Card.Text>
                    <Button href="https://wa.me/6285967235440" style={{ backgroundColor: "#F97316" }}>Chat For More Info</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src="https://static.wixstatic.com/media/11062b_f99ee89647c9464a8fb6e1d8ecb0d70b~mv2.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Mobile Development</Card.Title>
                    <Card.Text>
                    Unlock the World of Mobile Development: Build, Innovate, Transform!
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                    From Rp 1.800.000
                    </Card.Text>
                    <Button href="https://wa.me/6285967235440" style={{ backgroundColor: "#F97316" }}>Chat For More Info</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img variant="top" src="https://static.wixstatic.com/media/11062b_d99fa4045ff24b3db75778a90529c926~mv2.jpg/v1/fill/w_272,h_182,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_d99fa4045ff24b3db75778a90529c926~mv2.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>
                    Unleash the Power of Web Development: Create, Innovate, Transform Onli...
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                    From Rp 1.800.000
                    </Card.Text>
                    <Button href="https://wa.me/6285967235440" style={{ backgroundColor: "#F97316" }}>Chat For More Info</Button>
                </Card.Body>
                </Card>
            </Col>
            
        </Row>
        </Container>
    )
}