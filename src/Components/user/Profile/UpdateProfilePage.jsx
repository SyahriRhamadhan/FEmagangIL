import { useState, useEffect } from "react";
import { Button, Container, Form, FormControl, FormLabel, FormSelect } from 'react-bootstrap';
import { MDBCol,  MDBRow, MDBBreadcrumb, MDBBreadcrumbItem} from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState(null);
    const [kampus, setKampus] = useState("");
    const [jenis_kelamin, setJenis_kelamin] = useState("");
    const [tempat_lahir, setTempat_lahir] = useState("");
    const [tgl_lahir, setTgl_lahir] = useState(""); 
    const [agama, setAgama] = useState("");
    const [program_studi, setProgram_studi] = useState("");
    const [jenjang, setJenjang] = useState("");

    const navigate = useNavigate();
    const whoami = () => {
        axios
            .get('http://localhost:8080/v1/api/current-user', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setName(response.data.name);
                setAddress(response.data.address)
                setPhone(response.data.phone)
            });
    };
    useEffect(() => {
        whoami();
    }, [])
    async function handleSubmit(e) {
        e.preventDefault();

        const form = new FormData();

        form.append("name", name);
        form.append("phone", phone);
        form.append("address", address);
        form.append("image_user", image);
        form.append("kampus", kampus);
        form.append("jenis_kelamin", jenis_kelamin);
        form.append("tempat_lahir", tempat_lahir);
        form.append("tgl_lahir", tgl_lahir);
        form.append("agama", agama);
        form.append("program_studi", program_studi);
        form.append("jenjang", jenjang);

        try {
            if (name === null || address === null || phone === null ) {
                toast("Isi Semua data");
            } else {
                // eslint-disable-next-line no-unused-vars
                const response = await axios.put(
                    "http://localhost:8080/v1/api/users",
                    form,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                setTimeout(() => {
                    navigate("/profile");
                    window.location.reload();
                }, 1000);
                swal({
                    title: "Berhasil!",
                    text: "Profil Updated",
                    icon: "success",
                    button: "Oke",
                });
            }
        } catch (error) {
            swal(error.response.data.message);
        }
    }
    return (
        <Container >
            <MDBRow>
                <MDBCol>
                    <MDBBreadcrumb className="bg-light rounded-3 p-3 my-2">
                    <MDBBreadcrumbItem>
                        <a href='/landing'>Home</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <a href='/profile'>Profile</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <a href="/profile/update_profile">Update Profile</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>Update Profile</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBCol>
            </MDBRow>
            <Button className="mt-2 mb-2 me-3" style={{ backgroundColor: "#F97316" }} href="/profile">
                Kembali
            </Button>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="my-2 mt-3">
                    <Form.Label>Nama <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nama Kamu"
                        required
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Alamat <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Contoh: Jalan Asoka dalam no.5"
                        required
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>No. Handphone <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: 0812345678"
                        required
                        value={phone || ''}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Asal Kampus <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: Universitas Maritim Raja Ali Haji"
                        required
                        value={kampus || ''}
                        onChange={(e) => setKampus(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel>Jenis Kelamin <small className='text-danger d-inline'>*</small></FormLabel>
                    <FormSelect
                        required
                        onChange={(e) => {
                        const JK = e.target.value;
                        setJenis_kelamin(JK);
                        }}
                        as="select" defaultValue="Pilih disini"
                        >
                        <option >Pilih disini</option>
                        <option value={'Laki-Laki'}>Laki-Laki</option>
                        <option value={'Perempuan'}>Perempuan</option>
                    </FormSelect>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Kota Kelahiran <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: Batam"
                        required
                        value={tempat_lahir || ''}
                        onChange={(e) => setTempat_lahir(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mt-4 mb-2">
                  <FormLabel>Tanggal Lahir <small className='text-danger d-inline'>*</small></FormLabel>
                  <FormControl
                    type="date"
                    value={tgl_lahir || ''}
                    onChange={(e) => setTgl_lahir(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                    <FormLabel>Agama <small className='text-danger d-inline'>*</small></FormLabel>
                    <FormSelect
                        required
                        onChange={(e) => {
                        const JK = e.target.value;
                        setAgama(JK);
                        }}
                        as="select" defaultValue="Pilih disini"
                        >
                        <option >Pilih disini</option>
                        <option value={'Islam'}>Islam</option>
                        <option value={'Protestan'}>Protestan</option>
                        <option value={'Katolik'}>Katolik</option>
                        <option value={'Hindu'}>Hindu</option>
                        <option value={'Buddha'}>Buddha</option>
                        <option value={'Khonghucu'}>Khonghucu</option>
                    </FormSelect>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Program Studi <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: Teknik Informatika"
                        required
                        value={program_studi || ''}
                        onChange={(e) => setProgram_studi(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label> Jenjang <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: S1/D3/D4"
                        required
                        value={jenjang || ''}
                        onChange={(e) => setJenjang(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Picture <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </Form.Group>

                <Button className="mt-2 mb-4 bg-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditProfile