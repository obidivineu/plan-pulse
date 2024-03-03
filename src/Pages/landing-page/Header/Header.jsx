import React from 'react';
import logo from "../../../assets/gymlogo.png"
import "./Header.css"
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';



const Header = () => {
  const nav = useNavigate()

  

  const navHomeScreen = () => {
    nav("/home-screen")
  }


  return (

    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="headertext">
        <p className="home" style={{ fontSize: "15px" }}> <ScrollLink 
        activeClass='active-scroll-link'
        to='HOME'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>HOME</ScrollLink>
        </p>
        <p className="home" style={{ fontSize: "15px" }}>
        <ScrollLink 
        activeClass='active-scroll-link'
        to='FEATURES'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>FEATURES</ScrollLink></p>
        <p className="home" style={{ fontSize: "15px" }}> <ScrollLink 
        activeClass='active-scroll-link'
        to='PRICING'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>PRICING</ScrollLink></p>
        <p className="home" style={{ fontSize: "15px" }}><ScrollLink 
        activeClass='active-scroll-link'
        to='SERVICES'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>SERVICES</ScrollLink></p>
         <p className="home" style={{ fontSize: "15px" }} ><ScrollLink 
        activeClass='active-scroll-link'
        to='ABOUT'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>ABOUT US</ScrollLink></p>
      </div>
      <div className="started">
        <button className="get" onClick={() => {
          nav('/user-login')
        }} style={{ fontSize: "15px" }}>LOGIN</button>
      </div>
    </div>

  );
}

export default Header;
