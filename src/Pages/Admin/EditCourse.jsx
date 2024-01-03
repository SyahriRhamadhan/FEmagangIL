import EditCoursee from '../../Components/admin/Course/EditCourse';
import { Helmet } from 'react-helmet';
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
export default function EditCourse() {
    return (
      <>
        <Helmet>
          <title >Admin Page</title>
        </Helmet>
        <LandingNav/>
        <EditCoursee/>
        <Footer />
      </>
    );
  }