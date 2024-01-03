import Programm from '../../Components/user/Program/Program';
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
import { Helmet } from 'react-helmet';
export default function Magang() {
    return (
      <>
        <Helmet>
          <title >Magang</title>
        </Helmet>
        <LandingNav/>
        <Programm/>
        <Footer />
      </>
    );
}