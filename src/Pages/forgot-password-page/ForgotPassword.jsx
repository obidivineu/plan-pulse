import React, { useState } from 'react'
import "./forgotpassword.css"
import axios from 'axios'
// import FORGOTIMG from "../../asests/forgot.png"

const forgotPassword = () => {

  const [email, setEmail] = useState()
  const url = "https://planpulse.onrender.com/api/v1/forgotPassword"
  async function Forget(e) {
    e.preventDefault()
    axios.post(url, email)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  console.log(email)

  return (
    <div className='forgotbodyPage'>

      <div className='forgotpage'><div className='divtext'>
        <p className='forgotext'>FORGOT PASSWORD ?</p>
      </div>
        <div className='forgotpassinput'>
          <p className='entertext'>Enter the email associated<br />
            with the account</p>
          <input type='email' placeholder='Input Your Email' className='emailinput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className='nextbutton' onClick={Forget}>
          Next
        </button>

      </div>

    </div>
  )
}

export default forgotPassword
