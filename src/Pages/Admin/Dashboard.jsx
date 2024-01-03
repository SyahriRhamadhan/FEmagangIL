import Cards from '../../Components/admin/Course/CardCourse';
import { Helmet } from 'react-helmet';
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
export default function Dashboard() {
    return (
      <>
        <Helmet>
          <title >Admin Page</title>
        </Helmet>
        <LandingNav/>
        <Cards/>
        <Footer />
      </>
    );
  }