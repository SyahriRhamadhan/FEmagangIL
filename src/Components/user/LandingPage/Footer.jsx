import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    // <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <MDBFooter style={{ backgroundColor: '#31304D', minHeight: '50vh' }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ color:'#F0ECE5'}} >Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://api.whatsapp.com/send?phone=6285967235440' className='me-4 text-reset'>
            <MDBIcon fab icon="whatsapp" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon far icon="envelope" />
          </a>
          <a href='https://youtube.com/@infinitelearningid' className='me-4 text-reset'>
           <MDBIcon fab icon="youtube" />
          </a>
          <a href='https://instagram.com/infinitelearning_id' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/infinite-learning-indonesia/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section style={{ color:'#F0ECE5'}} >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon fas icon="chalkboard-teacher" className="me-3"/>
                Infinite Learning
              </h6>
              <p>
              We believe that anyone can be anything, be the best version of they are. Take your opportunity to learn more and to scale up your skill for the future.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Program</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Game Developer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mobile Developer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  IBM Academy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hybrid Cloud & Red Hat
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='https://kampusmerdeka.kemdikbud.go.id/profile/mitra/863c3409-8b4e-4c96-9edd-71ee61e9fc41/eaf4d364-d429-11ed-baaf-c2abb55b0a08' className='text-reset'>
                  Kampus Merdeka
                </a>
              </p>
              <p>
                <a href='https://bit.ly/ILcommunity' className='text-reset'>
                  Our Community
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Digital Park, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau 29466
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@infinitelearning.id
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (0778) 7100673
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' , color:'#F0ECE5' }}>
        © 2023 Copyright: 
         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           Magang Infinte Learning X UMRAH
        </a>
      </div>
    </MDBFooter>
  );
}