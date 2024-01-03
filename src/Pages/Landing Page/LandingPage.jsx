import LandingNav from '../../Components/user/LandingPage/LandingNav'
import Footer from '../../Components/user/LandingPage/Footer'
import Hero from '../../Components/user/LandingPage/Hero'
import Card from '../../Components/user/LandingPage/Card'
import Course from '../../Components/user/LandingPage/Course'
import Topic from '../../Components/user/LandingPage/Topic'
import { Helmet } from 'react-helmet';
export default function Landing() {
    return (
      <>
        <Helmet>
          <title >Landing Page</title>
        </Helmet>
        <LandingNav/>
        <Hero/>
        <Card/>
        <Course/>
        <Topic/>
        <Footer />
      </>
    );
  }