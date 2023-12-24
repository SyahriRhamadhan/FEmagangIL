import HomePage from '../../Components/user/HomePage/HomePage'
import HomeNav from '../../Components/user/HomePage/HomeNav'
import { Helmet } from 'react-helmet';
export default function Home() {
    return (
      <>
        <Helmet>
          <title >Home Pge</title>
        </Helmet>
        <HomeNav/>
        <HomePage/>
      </>
    );
  }