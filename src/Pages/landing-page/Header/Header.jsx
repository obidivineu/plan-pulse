import React from 'react';
import logo from "../../../assets/gymlogo.png"
import "./Header.css"
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const nav = useNavigate()


  return (

    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="headertext">
        <p className="home"  style={{ fontSize: "15px"}}>HOME</p>
        <p className="home"  style={{ fontSize: "15px"}}>ABOUT</p>
        <p className="home"  style={{ fontSize: "15px"}}>FEATURES</p>
        <p className="home"  style={{ fontSize: "15px"}}>PRICING</p>
        <p className="home"  style={{ fontSize: "15px"}}>SERVICE</p>
      </div>
      <div className="started">
        <button className="get" onClick={()=>{
          nav('/user-login')}} style={{ fontSize: "15px"}}>LOGIN</button>
      </div>
    </div>

  );
}

export default Header;
