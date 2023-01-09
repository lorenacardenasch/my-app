import React from 'react'
import Header from '../../Partials/Header';
import Footer from '../../Partials/Footer';
import HomeBody from '../../Components/HomeBody/HomeBody'
import "./Assets/styles.css";

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <HomeBody />
      <Footer />
    </div>
  )
}
export default Home