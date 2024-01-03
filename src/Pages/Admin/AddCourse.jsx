import { Helmet } from 'react-helmet';
import Addcourse from '../../Components/admin/Course/AddCourse'
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
export default function AddCourse() {
    return (
      <>
        <Helmet>
          <title >Admin Page</title>
        </Helmet>
        <LandingNav/>
        <Addcourse/>
        <Footer />
      </>
    );
  }