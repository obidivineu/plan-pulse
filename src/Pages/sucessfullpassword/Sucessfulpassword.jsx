import React from 'react';
import  "./Sucessfulpassword.css"
import IMAGE from "../../assets/gymlogo.png"
const Sucessfulpassword = () => {
  return (
    <div>
      <div className='container'>
        <div className='topping'>
          <div className='backbtn'>
            <button className='backarrow'><h1 className='arrow'>←</h1></button>
          </div>
          <div className='pulselogo'>
            <img src= {IMAGE} style={{width: "60px"}}/>
          </div>
        </div>
    <div className='midcard'>
      <div className='writingahead'>
        <h1>Sucessful password Reset</h1>
      </div>
      <div className='writingmid'>
        <p>You can now use your new password to login
         <br /> to your account 🤝🏼</p>
      </div>
      <div className='log'>
        <button className='logging'>LOGIN</button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Sucessfulpassword;
