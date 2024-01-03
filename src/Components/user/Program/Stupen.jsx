import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row, Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default function Stupen() {

    const [course, setCourse] = useState([]);

    const getCourse = async () => {
        const response = await axios.get("http://localhost:8080/v1/api/course");
        const magangCourses = response.data.filter(course => course.type === 'Studi Independent');
        setCourse(magangCourses);
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
    return(
        <Container>
            <Helmet>
                <title>Studi Independent</title>
            </Helmet>
            <h2 className="d-flex justify-content-between my-5">
                <b>Studi Independent</b>
                <Button href="https://kampusmerdeka.kemdikbud.go.id/profile/mitra/863c3409-8b4e-4c96-9edd-71ee61e9fc41/eaf4d364-d429-11ed-baaf-c2abb55b0a08" style={{ backgroundColor: "#F97316" }}>Web Kamdek</Button>
            </h2>
            <Row>
                {course.map((course, i) => (
                <Col md='4' sm='6' key={i}>
                    <Card className='px-1 shadow-sm  mb-4' style={{ width: '20em', height: '28em' }}>
                    <CardBody>
                        <CardImg alt={course.image_course} className='mb-3' orientation="top" style={{ height: '10em' }} src={course.image_course} />
                        <CardTitle className='flex text-sm font-bold'>{course.judul_program}</CardTitle>
                        <CardText>Tipe Program: {course.type}</CardText>
                        <hr/>
                        <CardText className='mb-3'>{truncateText(course.rincian_kegiatan, 12)}</CardText>
                        <div className='d-flex justify-content-center'>
                        <Button className='text-xs' style={{ backgroundColor: "#F97316" }}>
                            <Link to={`/program/${course.id}`} className='text-white'>
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