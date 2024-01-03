import { Container,Row, Col, Button } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";
export default function Topic() {
    return(
        <Container className="my-5 py-5" style={{ backgroundColor: '#f8fafc' }} fluid>
            <h2 className="text-center d-flex justify-content-center">
                <b>Kelas Infinite Learning Berbasis Industri</b>
            </h2>
            <div className="text-center">
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                UI/UX Design
                <GoDotFill className="text-danger ms-2" />
                </Button>
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                Game Development
                <GoDotFill className="text-danger ms-2" />
                </Button>
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                Web Development
                <GoDotFill className="text-danger ms-2" />
                </Button>
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                Animasi 2D/3D
                <GoDotFill className="text-danger ms-2" />
                </Button>
            </div>
            <div className="text-center">
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                Front End Development
                <GoDotFill className="text-danger ms-2" />
                </Button>
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                Back End Development
                <GoDotFill className="text-danger ms-2" />
                </Button>
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                Mobile Development
                <GoDotFill className="text-danger ms-2" />
                </Button>
                <Button className="me-3" variant="outline-secondary" style={{ backgroundColor: 'white', color: 'black', borderRadius: '15px' }}>
                <GoDotFill className="text-danger me-2" />
                System Administrator
                <GoDotFill className="text-danger ms-2" />
                </Button>
            </div>
        </Container>

    )
}