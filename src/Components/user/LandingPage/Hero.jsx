import HeroImage from '../../../Image/HeroImage.jpeg'

export default function Hero() {
    return(
        <header style={{ paddingLeft: 0 }}>
        <div
          className=' text-center bg-image'
          style={{ backgroundImage: `url(${HeroImage})` , height: 400 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>We believe that anyone can be anything</h1>
                <h4 className='mb-3'> Be the best version of they are. Take your opportunity to learn more and to scale up your skill for the future.</h4>
                <a className='btn btn-outline-light btn-lg' href='https://kampusmerdeka.kemdikbud.go.id/profile/mitra/863c3409-8b4e-4c96-9edd-71ee61e9fc41/eaf4d364-d429-11ed-baaf-c2abb55b0a08' role='button'>
                  Program Kamdek
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}