
import "./landingpage.css";


import fitness from "../../../assets/fitness.png"
const Landingpage = () => {
  return <div
    style={{ overflow: "hidden" }}
  >
    <div className="clients">
      <div className="photo">
        <img src={fitness} alt="fitnesspic" style={{ width: "350px" }} />
      </div>
      <div className="writeup">
        <div className="up">
          <h1 className="online">Keep  Track Of  Your
            Clients  Online</h1>
        </div>
        <div className="center">
          <p>We are your reliable manager that is always <br />
            up to date to help you safe keep and produce <br />
            your clients information when necessary. We <br />
            have provided all that is needed for you to <br />
            find this product very friendly.</p>
        </div>
        <div className="below">
        <button className="starting">GET STARTED</button>
        </div>
      </div>
    </div>
    <div className="offer">
      <div className="ouroffer"> <h1> Our Offer</h1> <br /><p className="choose">Choose any of our offer to enjoy Plan Pulse</p></div>
      <div className="version">
        <div className="versiona">
          <div className="freeversion">
            <div className="topversion">
              <h3 className="Freeversion">Free version</h3><span className="naira">₦0</span>
            </div>
            <div className="bottomversion">
              <div className="group">
                <div className="dot"></div>
                <p>limited Database Storage</p>
              </div>
              <div className="group">
                <div className="dot"></div>
                <p>No access to search CTA</p>
              </div>
              <div className="group">
                <div className="dot"></div>
                <p>7 Days Trial (new client)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="versionb">
          <div className="payedversion">
            <div className="topversion">
              <h3 className="Freeversion">Payed Version</h3><span className="naira">₦50,000</span>
            </div>
            <div className="bottomversion">
              <div className="group">
                <div className="dot"></div>
                <p>Unlimited Database Storage</p>
              </div>
              <div className="group">
                <div className="dot"></div>
                <p>Unlimited  access to  CTA</p>
              </div>
              <div className="accessbtn">
                <button className="paying">PAY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="service">
      <div className="topservice"><h1> Our Service</h1> <br /><p className="choose">We offer more than just the product</p></div>
      <div className="lowservice">
        <div className="carding">
          <div className="leftcard">
            <div className="top">
              <div className="round">
              <div className="set">📃</div>
              </div>
            </div>
            <div className="bottom">
              <h3 className="featuretext">Partnership</h3>
              <div
                className="textHolder"
              >            <p className="plantrack"> We partner with various gym
                equipment vendors to
                advertise their product. </p>
              </div>
            </div>
          </div>
          <div className="middlecard">
            <div className="top">
              <div className="round">
              <div className="set">⏱</div>
              </div>
            </div>
            <div className="bottom">
              <h3 className="featuretext">Training</h3>
              <div className="textHolder"
              >            <p className="plantrack"> We provide training session
                for gym staff management
                to maximize the utilization
                of the platform </p>
              </div>
            </div>
          </div>
          <div className="rightcard">
            <div className="top">
              <div className="round">
              <div className="set">👨‍💼</div>
              </div>
            </div>
            <div className="bottom">
              <h3 className="featuretext">Refferal Programn</h3>
              <div className="textHolder"
              >            <p className="plantrack"> We create referral programs
                where gym agencies can
                discount </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="all">

        <div className="firstfooter">
          <div className="textwriteup">
            <p className="textinner">
              COMPANY : <span style={{ color : "black" }}> PLAN PULSE</span>
            </p>
            <p className="textinner">
              EMAIL : <span style={{ color : "black" }}> Planpulseapp@gmail.com</span>
            </p>
            <p className="textinner">
              CONTACT : <span style={{ color : "black" }}> +234 813 4565 434</span>
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
    
  </div>;
};

export default Landingpage;
