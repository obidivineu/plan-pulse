import React from 'react';
import "./Failedtransfer.css"
import Mark from "../../../src/assets/BADMARK.svg"

const Failedtransfer = () => {
  return (
    <div>
      <div className='sucesspage'>
        <div className='midwrap'>
          <div className='goodtransfer'>
    <img src={Mark} style={{height: "60px"}}/>
          </div>
          <p className='transferrin'> oops! <br />
          Transaction Failed</p>
          <button className="transfersent">OK</button>
        </div>
      </div>
    </div>
  );
}

export default Failedtransfer;
