import React from 'react'
import "./forgotpassword.css"
// import FORGOTIMG from "../../asests/forgot.png"

const forgotPassword = () => {
  return (
    <div className='forgotbodyPage'>
   
     <div className='forgotpage'><div className='divtext'>
       <p className='forgotext'>FORGOT PASSWORD ?</p>
       </div>
       <div className='forgotpassinput'>
       <p className='entertext'>Enter the email associated<br/> 
        with the account</p>
        <input type='email' placeholder='Input Your Email' className='emailinput'/>
       </div>
     
     <button className='nextbutton'>
      Next
     </button>
   
     </div>
     
    </div>
  )
}

export default forgotPassword
