import React, {useState} from 'react'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Button,  Container, Form, FormControl, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
export default function Cards() {
    const [image, setImage] = useState(null);
    const [judulProgram, setJudulProgram] = useState('')
    const [priode1, setPriode1] = useState('')
    const [priode2, setPriode2] = useState('')
    const [rincianKegiatan, setRincianKegiatan] = useState('')
    const [modulPembelajaran, setModulPembelajaran] = useState('')
    const [persyaratan, setPersyaratan] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [link, setLink] = useState('')

    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/landing");
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData();

        form.append("judul_program", judulProgram);
        form.append("type", type);
        form.append("priode1", priode1);
        form.append("priode2", priode2);
        form.append("rincian_kegiatan", rincianKegiatan);
        form.append("modul_pembelajaran", modulPembelajaran);
        form.append("persyaratan", persyaratan);
        form.append("price", price);
        form.append("image_course", image);
        form.append("link", link);
        
        try {
            if (judulProgram === null) {
                toast("Isi Semua data", {
                    type: "error",
                }); 
            }else{
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                "http://localhost:8080/v1/api/course",
                form,
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            swal({
                title: "Berhasil!",
                text: "Course berhasil ditambahkan",
                icon: "success",
                button: "Oke",
            });
            }
        } catch (error) {
            swal(error.response.data.message);
        }
    }
    return (
        <Container>
             <Helmet>
                <title >Add Course</title>
            </Helmet>
            <Button className="mt-2 mb-2 me-3" style={{ backgroundColor: "#F97316" }} href="/dashboard">
                Kembali
            </Button>
            <h3 className='font-bold text-3xl mt-4'>Add New Course</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                    <Form.Group className="mt-4 mb-2">
                        <FormLabel>Nama Course/Pelatihan <small className='text-danger d-inline'>*</small></FormLabel>
                        <FormControl
                            type="text"
                            placeholder="Contoh: WEB Developer"
                            value={judulProgram}
                            onChange={(e) => setJudulProgram(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <FormLabel>Tipe Course <small className='text-danger d-inline'>*</small></FormLabel>
                        <FormSelect
                            required
                            onChange={(e) => {
                            const type = e.target.value;
                            setType(type);
                            }}
                            as="select" defaultValue="Pilih disini"
                            >
                            <option >Pilih disini</option>
                            <option value={'Magang'}>Magang</option>
                            <option value={'Studi Independent'}>Studi Independent</option>
                        </FormSelect>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mt-4 ">
                    <FormLabel> Priode Mulai <small className='text-danger d-inline'>*</small></FormLabel>
                    <FormControl
                        type="date"
                        value={priode1}
                        onChange={(e) => setPriode1(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mt-2 ">
                    <FormLabel> Priode Selesai <small className='text-danger d-inline'>*</small></FormLabel>
                    <FormControl
                        type="date"
                        value={priode2}
                        onChange={(e) => setPriode2(e.target.value)}
                        required
                    />
                    </Form.Group>
                </Col>
            </Row>
                <Form.Group className="mt-5 mb-2">
                  <FormLabel> Rincian Kegiatan <small className='text-danger d-inline'>*</small></FormLabel>
                  <FormControl
                    as="textarea"   
                    value={rincianKegiatan}
                    onChange={(e) => setRincianKegiatan(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-4 mb-2">
                  <FormLabel> Modul Pembelajaran <small className='text-danger d-inline'>*</small></FormLabel>
                  <FormControl
                    as="textarea"
                    value={modulPembelajaran}
                    onChange={(e) => setModulPembelajaran(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-4 mb-2">
                  <FormLabel> Persyaratan Pendaftar <small className='text-danger d-inline'>*</small></FormLabel>
                  <FormControl
                    as="textarea"
                    value={persyaratan}
                    onChange={(e) => setPersyaratan(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-5 mb-2">
                  <FormLabel> Link Course di Web KAMDEK <small className='text-danger d-inline'>*</small></FormLabel>
                  <FormControl
                    type='text'
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className=" mb-2">
                  <FormLabel>Harga Course <small className='text-danger d-inline'>*</small></FormLabel>
                  <FormControl
                    type="number"
                    placeholder="Contoh: 450000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="my-2">
                    <FormLabel>Foto Course <small className='text-danger d-inline'>*</small></FormLabel>
                    <FormControl
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                    />
                </Form.Group>

                <Form.Group>
              <Button className="mt-2 mb-4 me-3 bg-warning" href="/ticketschedule">
                Cancel
              </Button>
              <Button className="mt-2 mb-4 bg-success" type="submit">Submit</Button>
            </Form.Group>
            </Form>
        </Container>
    )
}