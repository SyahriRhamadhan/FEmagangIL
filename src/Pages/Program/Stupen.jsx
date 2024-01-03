import Stupenn from '../../Components/user/Program/Stupen';
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
import { Helmet } from 'react-helmet';
export default function Stupen() {
    return (
      <>
        <Helmet>
          <title >Studi Independent</title>
        </Helmet>
        <LandingNav/>
        <Stupenn/>
        <Footer />
      </>
    );
}