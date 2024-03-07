import React from 'react';
import "./Payment.css"
import Master from "../../../src/assets/mastercard.png"
import Verve from "../../../src/assets/verveimg.png"
import Uba from "../../../src/assets/ubadebitcard.png"
const Payment = () => {
  return (
  
      <div className='fullscreen'>
        <div className='fullmid'>
            <div className='one' >
                <div className='oneright'>
                    <div className='oval'></div><div className='pcard'> <img src= {Master} style={{width: "35px"}}/> </div>
                </div>
                <div className='onemiddle'>
                <div className='oval'></div><div className='vcard'> <img src={Verve} style={{width: "40px"}} /></div>
                </div>
                <div className='oneleft'>
                <div className='oval'></div><div className='acard'> <img src={Uba} style={{ width: "40px"}} /></div>
                </div>
            </div>
            {/* <div className='two'>
            <div className='tworight'>
                <p className='number'>CARD NUMBER</p>
                <input type="text" className='inputstyle' placeholder='0000 0000 0000 0000' />
            </div>
                <div className='twoleft'>
                <p className='number'>CARD HOLDER</p>
                <input type="text" className='inputstyle' placeholder='Username' />
                </div>
            </div>
            <div className='three'>
                <div className='threeright'>
                <p className='number'>EXPIRY DATE</p> 
         <div
         className='dateHolder'
         >
         <input type="text" className='date' placeholder='Month' /> <input type="text"  className='date' placeholder='Year' />
         </div>
                </div>
                <div className='threeleft'>
                <p className='number'>CVC</p>
                <input type="text" className='inputstyle' placeholder='123' />
                </div>
            </div> */}
            <div className='four'>
            <p className='number'>Amount:</p>
            <input type="text" className='amount' placeholder='₦0'/>
            </div>
            <div className='five'>
                <button className='confirming'>Confirm Payment</button>
            </div>
        </div>
      </div>
  
  );
}

export default Payment;

