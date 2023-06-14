import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const MainPage:React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  )
}

export default MainPage;
