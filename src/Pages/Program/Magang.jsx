import Magangg from '../../Components/user/Program/Magang';
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
        <Magangg/>
        <Footer />
      </>
    );
}