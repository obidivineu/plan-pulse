import React from 'react';
import "./Sucessfultransfer.css"
import Mark from "../../../src/assets/GOODMARK.svg"

const Sucessfultransfer = () => {
  return (
    <div>
      <div className='sucesspage'>
        <div className='midwrap'>
          <div className='goodtransfer'>
    <img src={Mark} style={{height: "60px"}}/>
          </div>
          <p className='transferrin'> Transaction Sucessful</p>
          <button className="transfersent">OK</button>
        </div>
      </div>
    </div>
  );
}

export default Sucessfultransfer