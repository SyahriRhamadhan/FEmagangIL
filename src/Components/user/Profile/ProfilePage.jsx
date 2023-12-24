import React from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem,  MDBIcon, MDBListGroup, MDBListGroupItem} from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
export default function ProfilePage() {
  const [users, setUsers] = useState("");
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
  if (
    users.name === null ||
    users.address === null
  ) {
    swal({
      title: "Perhatian!",
      text: "Anda belum melengkapi Info Akun, mohon lengkapi terlebih dahulu!",
      icon: "warning",
      button: "Mengerti",
    });
  }
  useEffect(() => {
    whoami();
  }, [])
  return (
    <section style={{ backgroundColor: '#FBFBFB' }}>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 my-2">
              <MDBBreadcrumbItem>
                <a href='/landing'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="/profile">Profile</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
        <MDBBtn href='/profile/update_profile' className='mb-2' style={{ backgroundColor: "#F97316" }} >Edit Profile</MDBBtn>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={users.image_user}
                  alt="avatar"
                  className="square bg-primary rounded mx-auto"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1 mt-3">{users.name}</p>
                <p className="text-muted mb-4">{users.address}</p>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mt-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush="true" className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="envelope fa-lg text-warning" />
                    <MDBCardText>{users.email}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Asal Kampus</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.kampus}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Jenis Kelamin</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.jenis_kelamin}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Tempat Lahir</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.tempat_lahir}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Tanggal Lahir</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.tgl_lahir}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>agama</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.agama}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Progtam Studi</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.program_studi}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className='fw-bold'>Jenjang</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{users.jenjang}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
    );
  }