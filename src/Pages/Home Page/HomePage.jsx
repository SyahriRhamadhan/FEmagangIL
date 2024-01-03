import HomeNav from '../../Components/user/HomePage/HomeNav'
import Footer from '../../Components/user/LandingPage/Footer'
import Hero from '../../Components/user/LandingPage/Hero'
import Card from '../../Components/user/LandingPage/Card'
import Course from '../../Components/user/LandingPage/Course'
import Topic from '../../Components/user/LandingPage/Topic'
import { Helmet } from 'react-helmet';
export default function Home() {
    return (
      <>
        <Helmet>
          <title >Home Page</title>
        </Helmet>
        <HomeNav/>
        <Hero/>
        <Card/>
        <Course/>
        <Topic/>
        <Footer />
      </>
    );
  }