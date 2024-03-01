import React from 'react';
import Header from '../Header/Header';
import Landingpage from '../LandingPage/Landingpage';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';
import "./homescreen.css"
const HomeScreen = () => {
  return (
    <>
    <div className='overall'>
      <Header/>
      <Hero/>
      <Feature/>
      <Landingpage/>
    </div>
    </>
  );
}

export default HomeScreen;