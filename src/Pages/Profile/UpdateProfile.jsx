import UpdateProfile from '../../Components/user/Profile/UpdateProfilePage'
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
import { Helmet } from 'react-helmet';
export default function UpdateProfilePage() {
    return (
      <>
        <Helmet>
          <title >Update Profile</title>
        </Helmet>
        <LandingNav/>
        <UpdateProfile/>
        <Footer />
      </>
    );
}