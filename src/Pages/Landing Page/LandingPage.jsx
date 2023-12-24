import LandingNav from '../../Components/user/LandingPage/LandingNav'
import { Helmet } from 'react-helmet';
export default function Landing() {
    return (
      <>
        <Helmet>
          <title >Landing Page</title>
        </Helmet>
        <LandingNav/>
      </>
    );
  }