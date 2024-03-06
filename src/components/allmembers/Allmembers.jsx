import React from 'react'
import "./allmembers.css";
const Allmembers = () => {


  return (
  
          <main className="allmember-container">
      <header className="allmember-header">
        <div className="word">S/N</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Name</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">MemberShip-ID</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Status</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Plan</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Delete</div>
      </header>

      <div className="allmember-line"></div>
 </main>
  )
}

export default Allmembers
