import { Col, Container, Row, Card } from "react-bootstrap";
import Card1 from '../../../Image/Card1.png'
import Card2 from '../../../Image/Card2.png'
import { MdOutlineNavigateNext } from "react-icons/md";
export default function Cards() {
    return(
        <Container style={{ marginTop: '-70px' }}>
            <Row>
                <Col>
                    <Card className=" text-black">
                        <Card.Body>
                            <Row>
                                <Col xs lg="2" className="d-flex align-items-center text-center">
                                    <Card.Img src={Card1} alt="Card Image" className="mx-auto" />
                                </Col>
                                <Col>
                                    <Card.Text >
                                    <b>Studi Independent MSIB</b>
                                    </Card.Text>
                                    <Card.Text>
                                    Belajar dengan kurikulim dan program terpercaya untuk menjadi talenta digital.
                                    </Card.Text>
                                </Col>
                                <Col xs lg="2" className="d-flex align-items-center text-center">
                                    <a href="/program/studi-independent" style={{ backgroundColor: "#F97316", borderRadius: "50px", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}><MdOutlineNavigateNext className="text-white"/></a>
                                </Col>

                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className=" text-black">
                        <Card.Body>
                            <Row>
                                <Col xs lg="2" className="d-flex align-items-center text-center">
                                    <Card.Img src={Card2} alt="Card Image" className="mx-auto" />
                                </Col>
                                <Col>
                                    <Card.Text >
                                    <b>Magang Merdeka MBKM</b>
                                    </Card.Text>
                                    <Card.Text>
                                    Aktivitas Magang yang didampingi oleh mentor praktisi professional.
                                    </Card.Text>
                                </Col>
                                <Col xs lg="2" className="d-flex align-items-center text-center">
                                    <a href="/program/magang" style={{ backgroundColor: "#F97316", borderRadius: "50px", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}><MdOutlineNavigateNext className="text-white"/></a>
                                </Col>

                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}