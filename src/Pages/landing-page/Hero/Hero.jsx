import React from 'react';
import hero from "../../../assets/database.svg"
import "./Hero.css"
import { useNavigate } from 'react-router-dom';
import { payKorapay } from '../../../payment';
const Hero = () => {

  const nav = useNavigate()

  const navToSignUp = () =>{
    nav("/user-signup")
  }

  return (

    <div className="hero"  id='HOME'>
      <div className="herotext"  id='HOME'>
        <div className="maintext">
          <h1 className="workout" style={{fontSize: "60px",}}>Workout with <br /><span className="plan">Plan</span></h1>
        </div>
        <div className="subtext">
          <p className="integrate">We encourage you to integrate the <br /> plan in your
            organization which is<br/> good means to ensure consistency.</p>
        </div>
        <div className="buttonbox">
          <button className="starting" style={{
            fontSize: "15px",
          }}
          onClick={navToSignUp}
          >GET STARTED</button>
          <button className="upgrading"  style={{
            fontSize: "15px",
          }} onClick={payKorapay}>UPGRADE</button>
        </div>
      </div>
      <div className="heroimage">
        <div className="heropic">
          <img src={hero} alt="img" style={{ height: "100%", width: "500px" }} />
        </div>


      </div>
    </div>

  );
}

export default Hero;
