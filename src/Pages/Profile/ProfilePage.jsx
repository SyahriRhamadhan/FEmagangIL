import Profile from '../../Components/user/Profile/ProfilePage.jsx'
import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
import { Helmet } from 'react-helmet';
export default function ProfilePage() {
    return (
      <>
        <Helmet>
          <title >Profile Page</title>
        </Helmet>
        <LandingNav/>
        <Profile/>
        <Footer />
      </>
    );
}