import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
import { Helmet } from 'react-helmet';
export default function Landing() {
    return (
      <>
        <Helmet>
          <title >Landing Page</title>
        </Helmet>
        <LandingNav/>
        <Footer />
      </>
    );
  }