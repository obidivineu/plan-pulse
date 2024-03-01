import React from 'react';
import hero from "../../../assets/database.svg"
import "./Hero.css"


const Hero = () => {


  return (

    <div className="hero">
      <div className="herotext">
        <div className="maintext">
          <h1 className="workout" style={{fontSize: "60px",}}>Workout with <br /><span className="plan">Plan</span></h1>
        </div>
        <div className="subtext">
          <p className="integrate">We encourage you to integrate the <br /> plan method in your
            organization,<br /> as it is a good means to ensure consistency.</p>
        </div>
        <div className="buttonbox">
          <button className="starting" style={{
            fontSize: "15px",
          }}
          >GET STARTED</button>
          <button className="upgrading"  style={{
            fontSize: "15px",
          }}>UPGRADE</button>
        </div>
      </div>
      <div className="heroimage">
        <div className="heropic">
          <img src={hero} alt="img" style={{ height: "400px", width: "500px" }} />
        </div>


      </div>
    </div>

  );
}

export default Hero;
