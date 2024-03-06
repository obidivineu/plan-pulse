import "./userlogin.css";
import LOG from "../../assets/image6.png";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import { useState, useContext } from "react";
import { AppContext } from "../../context";

const schema = yup.object().shape({
  email: yup.string().required("please fill up the email field"),
  password: yup
    .string()
    .required("please fill up the  password field")
    .min(8)
    .max(32),
});

const UserLogin = () => {
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
      setToken(response.data.token);
      setChangeSigninBtn(false);
      navigate("/user-dashboard");
      localStorage.setItem("pass",response.data.token);
      localStorage.setItem("userDatas", JSON.stringify(response.data.data));
      console.log(response.data.data)
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
      setChangeSigninBtn(false);
      navigate("/erroLogin");
    }
  };

  return (
    <div className="loginbodypage">
      {!changeSigninBtn ? (
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
                  LOGIN
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserLogin;
