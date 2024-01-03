import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Button, Col, Container, Form, FormControl, FormLabel, FormSelect, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
export default function EditCourse() {
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
    const { id } = useParams();

    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/landing");
    }
    

    const getCourse = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8080/v1/api/course/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              setImage(res.data.image_course)
              setJudulProgram(res.data.judul_program)
              setPriode1(res.data.priode1)
              setPriode2(res.data.priode2)
              setRincianKegiatan(res.data.rincian_kegiatan)
              setModulPembelajaran(res.data.modul_pembelajaran)
              setPersyaratan(res.data.persyaratan)
              setPrice(res.data.price)
              setType(res.data.type)
              setLink(res.data.link)
        } catch (error) {
            
        }
    }
        
    async function handleEdit(e) {
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
            // eslint-disable-next-line no-unused-vars
            const res = await axios.put(
              `http://localhost:8080/v1/api/course/${id}`,
              form,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            swal({
              title: "Berhasil!",
              text: "Update Course Berhasil",
              icon: "success",
              button: "Oke",
            });
            navigate("/dashboard");
          } catch (err) {
            swal(err.response.data.message);
          }
    }

    
  function handleDelete() {
    swal({
      title: "Course Akan Dihapus??",
      text: "Course yang dihapus tidak dapat dikembalikan!!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willRejected) => {
      if (willRejected) {
        axios
          .delete(
            `http://localhost:8080/v1/api/course/${id}`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            navigate("/dashboard");
            window.location.reload();
          });
      } else {
        swal("Data course tidak jadi dihapus!");
      }
    });
  }
    useEffect(() => {
        getCourse();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
        
    return (
        <Container>
             <Helmet>
                <title >Edit Course</title>
            </Helmet>
            <Button className="mt-2 mb-2 me-3" style={{ backgroundColor: "#F97316" }} href="/dashboard">
                Kembali
            </Button>
            <h3 className='font-bold text-3xl mt-4'>Edit Course</h3>
            <Form onSubmit={handleEdit}>
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

                    <Form.Group className="mt-4 mb-2">
                    <FormLabel> Priode Mulai <small className='text-danger d-inline'>*</small></FormLabel>
                    <FormControl
                        type="date"
                        value={priode1}
                        onChange={(e) => setPriode1(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mt-4 mb-2">
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

                <Form.Group className="mt-4 mb-2">
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
                    <Button onClick={handleDelete} className="mt-2 mb-4 me-3 bg-danger">Hapus</Button>
                    <Button className="mt-2 mb-4 me-3 bg-warning" href="/ticketschedule">
                    Cancel
                    </Button>
                    <Button className="mt-2 mb-4 bg-success" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}