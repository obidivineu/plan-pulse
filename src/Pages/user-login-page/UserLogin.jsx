import "./userlogin.css";
import LOG from "../../assets/image6.png";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from 'sweetalert2'
import { useState, useContext } from "react";
import { AppContext } from "../../context";
import { SpinnerCircular } from "spinners-react";

const schema = yup.object().shape({
  email: yup.string().required("please fill up the email field"),
  password: yup
    .string()
    .required("please fill up the  password field")
    .min(8)
    .max(32),
});

const UserLogin = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [changeSigninBtn, setChangeSigninBtn] = useState(false);
  const { setErrorMsg, setToken } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const overSubmit = async (data) => {
    const url = "https://planpulse.onrender.com/api/v1/login";

    setChangeSigninBtn(true);

    //const formdata = new FormData();

    // formdata.append("email", data.email);
    // formdata.append("password", data.password);
    setLoading(true)

    const mainData = {
      email: data.email,
      password: data.password,
    };
    // const config = {
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    // };
    try {
      const response = await axios.post(url, mainData);
      console.log(response.data.token);
      Swal.fire({
        title: "Login Successful",
        text: response?.data?.message,
        icon: "success",
        confirmButtonText: "okay",
        timer: "3000",
        showConfirmButton: false
      })
      setToken(response.data.token);
      setChangeSigninBtn(false);

      navigate("/user-dashboard");
      localStorage.setItem("pass",response.data.token);
      localStorage.setItem("userDatas", JSON.stringify(response.data.data));
      console.log(response.data.data)

    } catch (error) {
      console.log(error);

      if (error.code === "ERR_NETWORK") {
          Swal.fire({
            title: "Login Failed",
            text: error?.message,
            icon: "error",
            confirmButtonText: "okay",
            timer: "2000",
            showConfirmButton: false
          })
          setLoading(false)

        }
        else {
          Swal.fire({
            title: "Login Failed",
            text: error?.response?.data?.message,
            icon: "error",
            confirmButtonText: "okay",
            timer: "2000",
            showConfirmButton: false
          })
          setLoading(false)
        }

      setErrorMsg(error.response.data.message);
      setChangeSigninBtn(false);
      // navigate("/erroLogin");
    }
  };

  return (
    <div className="loginbodypage">
      {/* {!changeSigninBtn ? ( */}
        <section className="loginbodypage-section">
          <div className="loginpage">
            <img
              src={LOG}
              className="image"
              onClick={() => {
                navigate("/home-screen");
              }}
            />
            <p className="textsign">
              Sign in by entering the information below
            </p>
            <form className="loging-form" onSubmit={handleSubmit(overSubmit)}>
              <div className="inputDiv">
                <section className="email-detail">
                  <span className="span-text">
                    Email<span style={{ color: "red" }}>*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="input-data"
                    {...register("email")}
                  />
                  <p className="login-error-message">{errors.email?.message}</p>
                </section>
                <section className="pass-detail">
                  <span className="span-text">
                    Password<span style={{ color: "red" }}>*</span>
                  </span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-data"
                    {...register("password")}
                  />
                  <p className="login-error-message">
                    {errors.password?.message}
                  </p>
                </section>
                <div className="remeber-text">
                  <input type="checkbox" className="checkbox" />
                  Remember Password
                </div>
                <div
                  className="forgotpass"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password ?
                </div>
              </div>

              <center>
                <button
                  className={
                    !changeSigninBtn ? "loginbutton" : "loginbutton-true"
                  }
                  type="submit"
                >
                           {loading ? <SpinnerCircular
            size={30}
            thickness={99}
            speed={100}
          /> : 'LOGIN'}
                </button>
              </center>
            </form>
            <p className="donthaveaccount">
              Don’t have an account?
              <span
                style={{ color: "#2400FF", cursor: "pointer" }}
                onClick={() => {
                  navigate("/user-signup");
                }}
              >
                Create One Here
              </span>
            </p>
          </div>
          <div className="imagepage">
            <p className="welcomtext">WELCOME</p>
            <span className="PlanPulse">
              Welcome To Plan Pulse Thank You For Choosing Us!!
            </span>
          </div>
        </section>
      {/* ) : (
        <Loader />
      )} */}
    </div>
  );
};

export default UserLogin;
