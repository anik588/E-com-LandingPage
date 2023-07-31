import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import SiteFeatures from './SiteFeatures';
import BtnSlider from './Slider/BtnSlider';

import Footer from './Footer';


const Home = () => {
  return (<div className="nav-over">
      
      <div className="background-images-1">
        <Navbar />
        <h1>Get Smartwatch! Get Healthy!</h1>
      </div>
      <SiteFeatures />
      <BtnSlider />
      <Footer />
      
  </div>
    
  )
}

export default Home