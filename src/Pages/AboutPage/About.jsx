import React from 'react';
import Header from '../landing-page/Header/Header';
import Agent from "../../assets/gympersonel.webp";
import Personal from "../../assets/gymgirl.webp"
import "./Aboutpage.css"
const Aboutpage = () => {
  return (
    <div
      style={{ overflow: "hidden" }}
    >
      <div><Header /></div>
      <div className='fixwrap'>ABOUT PAGE</div>
      <p className='detail'>HOW IT STARTED</p>
      <div className='aboutdiv'>
        <div className='aboutleft'>
          <div className='mainwriteup'>OUR GOAL IS TO BE ONE OF THE BEST <br />
            TRACKING APPLICATION FOR GYM  <br />AGENTS</div>
          <div className='middlewriteup'>We are your reliable manager that is <br />always up to date to help you safe keep and  <br />produce your clients information when  <br />necessary. We have provided all that is <br />needed for you to find this product very friendly.</div>
          <div className='secondmiddlewriteup'> Our app is designed to streamline your <br />fitness journey, offering powerful tools to track <br />your workouts , monitor progress, and enhance <br />accountability.</div>


        </div>
        <div className='aboutright'>
          <div className='upimage'>
            <img src={Agent} style={{ width: "60%", }} />
          </div>
          <div className='downimage'>
            <img src={Personal} style={{ width: "40%", }} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="all">

          <div className="firstfooter">
            <div className="textwriteup">
              <p className="textinner">
                COMPANY : <span style={{ color: "black" }}> PLAN PULSE</span>
              </p>
              <p className="textinner">
                EMAIL : <span style={{ color: "black" }}> Planpulseapp@gmail.com</span>
              </p>
              <p className="textinner">
                CONTACT : <span style={{ color: "black" }}> +234 813 4565 434</span>
              </p>
            </div>
          </div>
          <div className="secondfooter">
            {/* <img className="mapping" src={MAP}/> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.1462533900512!2d3.3299647695040933!3d6.447291532219994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b897a59a1bbad%3A0x2f3f02b5749fc0c7!2s167%20Muyibi%20St%2C%20Apapa%2C%20Lagos%20102103%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709043668112!5m2!1sen!2sng"
              width='100%'
              height='100%'
              frameBorder='0'
              style={{ border: 0 }}
              allowFullScreen
              title='Google Map'
              className="map"
            ></iframe>
          </div>
        </div>

      </div>
      <p className="ending">
        @2024 Group-fitness All Copyrights reserved
      </p>
    </div>
  );
}

export default Aboutpage;