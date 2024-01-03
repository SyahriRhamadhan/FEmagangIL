import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row, Button, Container } from 'react-bootstrap';
export default function Cards() {
    const [course, setCourse] = useState([]);
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/landing");
    }
    const getCourse = async () => {
      const response = await axios.get("http://localhost:8080/v1/api/course");
      setCourse(response.data);
    };

    const truncateText = (text, maxWords) => {
      const words = text.split(' ');
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
      }
      return text;
    };
    useEffect(() => {
      getCourse();
    }, []);
    return (
    <Container>
      <Helmet>
        <title>Course List</title>
      </Helmet>
      <h2 className="d-flex justify-content-between my-5">
        <b>All Course</b>
        <Button href="/dashboard/course/add-course" style={{ backgroundColor: "#F97316" }}>Add Course</Button>
      </h2>
      <Row>
        {course.map((course, i) => (
          <Col md='4' sm='6' key={i}>
            <Card className='px-1 shadow-sm  mb-4' style={{ width: '20em', height: '28em' }}>
              <CardBody>
                <CardImg alt={course.image_course} className='mb-3' orientation="top" style={{ height: '10em' }} src={course.image_course} />
                <CardTitle className='flex text-sm font-bold'>{course.judul_program}</CardTitle>
                <CardText className='mb-3'>{truncateText(course.rincian_kegiatan, 20)}</CardText>
                <div className='d-flex justify-content-center'>
                  <Button className='text-xs' style={{ backgroundColor: "#F97316" }}>
                    <Link to={`/dashboard/course/edit-course/${course.id}`} className='text-white'>
                      Detail Course
                    </Link>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    )
}