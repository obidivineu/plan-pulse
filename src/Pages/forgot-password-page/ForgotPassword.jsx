import React, { useState } from 'react'
import "./forgotpassword.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
// import FORGOTIMG from "../../asests/forgot.png"

const forgotPassword = () => {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()



  const url = "https://planpulse.onrender.com/api/v1/forgotPassword"
  async function Forget(e) {
    setLoading(true)
    e.preventDefault()
    axios.post(url, { email })
      .then((res) => {
        console.log(res)
        Swal.fire({
          title: "Email Sent Successfully",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "okay",
          timer: "4000",
          showConfirmButton: false
        })
        nav("/user-login")
        // setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        if (err.code === "ERR_NETWORK") {
          Swal.fire({
            title: "Email Not Sent",
            text: err?.message,
            icon: "error",
            confirmButtonText: "okay",
            timer: "4000",
            showConfirmButton: false
          })
          nav("/user-login")
          setLoading(false)

        }
        else {
          Swal.fire({
            title: "Email Not Sent",
            text: err?.response?.data?.message,
            icon: "error",
            confirmButtonText: "okay",
            timer: "4000",
            showConfirmButton: false
          })
          nav("/user-login")
          setLoading(false)
        }

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
          {loading ? <SpinnerCircular
            size={30}
            thickness={99}
            speed={100}
          /> : 'SEND'}
        </button>

      </div>

    </div>
  )
}

export default forgotPassword
