import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Row, Container, Image, Button, Carousel } from 'react-bootstrap';


export default function Program() {
    const [users, setUsers] = useState("");
    const [course, setCourse] = useState({});
    const [separatedParagraphs, setSeparatedParagraphs] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const whoami = () => {
        axios
          .get('http://localhost:8080/v1/api/current-user', {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setUsers(response.data);
          });
    };
    
    const Course = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/v1/api/course/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          setCourse(response.data);

          // Pisahkan paragraf setelah mendapatkan nilai course.rincian_kegiatan
          setSeparatedParagraphs(separateIntoParagraphs(response.data.rincian_kegiatan));
        } catch (error) {
          console.error("Error fetching course data:", error);
        }
    };

    useEffect(() => {
        Course();
        whoami();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const separateIntoParagraphs = (text) => {
      const sentences = text.split('. '); // Memisahkan kalimat berdasarkan titik dan spasi
      const paragraphs = [];
      let currentParagraph = '';

      for (let i = 0; i < sentences.length; i++) {
        currentParagraph += sentences[i] + '. ';

        if ((i + 1) % 5 === 0 || i === sentences.length - 1) {
          paragraphs.push(currentParagraph.trim());
          currentParagraph = '';
        }
      }

      return paragraphs;
    };

    const formatToRupiah = (number) => {
      const formattedNumber = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(number);

      return formattedNumber;
    };

    return (
        <Container className="my-5">
          <Row>
            <Col md='4' >
              <Image style={{ height: 200 , width: 300}} alt={course.image_course} src={course.image_course}></Image>
              <h2>{course.judul_program}</h2>
              <p> Priode Kegiatan: {course.priode1} sampai {course.priode2}</p>
              <p>From {formatToRupiah(course.price)}</p>
              <Row>
              <Col>
              <Button href="https://wa.me/6285967235440" style={{ backgroundColor: "#F97316" }}>Contact Us</Button>
              </Col>
              <Col>
              <Button href={course.link} className="px-5 bg-success">Visit</Button>
              </Col>
              </Row>

            </Col>
             
            <Col>
            <Carousel
              showIndicators={false}
              showControls={false}
              fade
              nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={{ color: '#000', position: 'absolute', right: '10px' }} />}
            >
              <Carousel.Item itemId={1}>
                <h3><strong>Rincian Kegiatan</strong></h3>
                {separatedParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Carousel.Item>

              <Carousel.Item itemId={2}>
                <h3><strong>Modul Pembelajaran</strong></h3>
                <p>{course.modul_pembelajaran}</p>
              </Carousel.Item>

              <Carousel.Item itemId={3}>
                <h3><strong>Persyaratan</strong></h3>
                <p>{course.persyaratan}</p>
              </Carousel.Item>
            </Carousel>

          </Col>
          </Row>
        </Container>
    );
}
