import React from 'react';
import "./Feature.css";


const Feature = () => {
  return (
    
       <div className="features">
      <div className="unique">
        <h1>Unique Features</h1>
      </div>  
      <div className="featuring">
        <div className="firstcard">
          <div className="top">
            <div className="round">
              <div className="set">🕒</div>
            </div>
          </div>
          <div className="bottom">
            <h3 className="featuretext">Plan Tracker</h3>
            <div
              className="textHolder"
            >            <p className="plantrack"> This is more like a watch that
              will be actively running when
              a client has an active plan. </p>
              <p
                className="plantrack"
              >
                Whenever a client subscribe
                to a particular plan, the plan tracker
                begins to count-down until the plan
                expires.</p> </div>
          </div>
        </div>
        <div className="secondcard">
          <div className="top">
            <div className="round">
            <div className="set">📉</div>
            </div>
          </div>
          <div className="bottom">
            <h3 className="featuretext">Dynamic Database</h3>
            <div
              className="textHolder"
            >            <p className="plantrack">This is a database that enable
              real time modification of the
              database. </p>
              <p
                className="pulsetrack"
              >
                It simple means you can
                add data, <br />query data and delete
                data. This feature  <br />makes it more
                flexible in handling database.</p> </div>
          </div>
        </div>
        <div className="thirdcard">
          <div className="top">
            <div className="round">
            <div className="set">📲</div>
            </div>
          </div>
          <div className="bottom">
            <h3 className="featuretext">Upgrade System</h3>
            <div className="textHolder">
              <p className="plantrack">This is a pay system that gives
                our users unlimited access to
                this product </p>
              <p
                className="pulsetrack"
              >
                This feature gives our user a better efficiency of our application, After making payment to upgrade.</p> </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Feature;
