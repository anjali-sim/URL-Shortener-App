import React from 'react'
// import SignUp from '../SignUp/SignUp';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
// import Login from '../Login/Login';

const MainPage:React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />

      {/* <Login /> */}

      {/* <SignUp /> */}
    </div>
  )
}

export default MainPage;
