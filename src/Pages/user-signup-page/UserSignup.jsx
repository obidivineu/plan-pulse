import "./usersignup.css";
import wallpaper from "../../assets/welcome2.png";
import logo from "../../assets/image6.png";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import face from "../../assets/user.png";
import Loader from "../../components/loader/Loader";
import { useContext } from "react";
import { AppContext } from "../../context";

const schema = yup.object().shape({
  email: yup.string().required("please fill up the email field"),
  companyName: yup.string().required("please fill up the first name field"),
  password: yup
    .string()
    .required("please fill up the  password field")
    .min(8)
    .max(32),
  confirmPassword: yup
    .string()
    .required("please fill up the confirm password field")
    .min(8)
    .max(32),
  phoneNumber: yup.string().required().min(11).max(11),
});

const UserSignup = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [data, setData] = useState({
    photo: "",
  });
  const [isPhoto, setIsPhoto] = useState(false);
  const [profPic, setProfPic] = useState("");
  const [changeSigninBtn, setChangeSigninBtn] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const { setEmailStore, setErrorMsg } = useContext(AppContext);

  const handleBack = () => {
    setGoBack(true);
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setGoBack(false);
    }, 1000);
  }, [goBack, setGoBack]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const overSubmit = async (data) => {
    const url = "https://planpulse.onrender.com/api/v1/sign-up";
    setChangeSigninBtn(true);

    const formdata = new FormData();

    formdata.append("companyName", data.companyName);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("confirmPassword", data.confirmPassword);
    formdata.append("phoneNumber", data.phoneNumber);
    formdata.append("profilePicture", profPic);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(url, formdata, config);
      console.log(response.data);
      navigate("/user-dashboard");
      setChangeSigninBtn(false);
      navigate("/email-validation");
      localStorage.setItem("userDatas", JSON.stringify(response.data.data));
    } catch (error) {
      console.log(error.message);
      setChangeSigninBtn(false);
      setErrorMsg(error.message);
      navigate("/error");
    }
    setEmailStore(data.email);
  };

  const handleAllClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "foto") {
      setIsPhoto(true);
      const file = URL.createObjectURL(inputRef.current.files[0]);
      setData({ ...data, photo: file });
      setProfPic(inputRef.current.files[0]);
    }
  };

  return (
    <main className="signup-container">
      {!changeSigninBtn ? (
        <section className="signup-form">
          <section className="left-sec">
            <div className="signup-inside-div">
              <img src={wallpaper} alt="wall" className="signup-wallpaper" />
            </div>
            <div className="signup-middle-div"></div>
            <div className="signup-upper-div">
              <header className="signup-logo-div">
                <img src={logo} alt="logo" className="signup-logo" />
              </header>

              <div className="signup-headertext">
                Please enter your details to signup and be part of our great
                community
              </div>
              <div className="signup-subtext">
                Already have an account ?
                <span
                  className="signup-subtext-span"
                  onClick={() => navigate("/user-login")}
                >
                  Login
                </span>
              </div>
              <button
                className={!goBack ? "signup-goback" : "signup-goback-true"}
                onClick={handleBack}
              >
                Go Back
              </button>
            </div>
          </section>
          <form className="right-sec" onSubmit={handleSubmit(overSubmit)}>
            <header className="signup-logo-div2">
              <img src={logo} alt="logo" className="signup-logo2" />
            </header>

            <div className="profile-div" onClick={handleAllClick}>
              <div className="face">
                {!isPhoto ? (
                  <img src={face} alt="photo" className="default-photo" />
                ) : (
                  <img src={data.photo} alt="fot" className="real-photo" />
                )}
              </div>
              <input
                type="file"
                className="input-file"
                name="foto"
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
            <div className="signup-input-label-div">
              <label className="signup-label">Company Name</label>
              <input
                type="text"
                className="signup-input"
                placeholder="company name"
                {...register("companyName")}
              />
              <p className="signup-error-message">
                {errors.companyName?.message}
              </p>
            </div>
            <div className="signup-input-label-div">
              <label className="signup-label">Email </label>
              <input
                type="text"
                className="signup-input"
                placeholder="Email"
                {...register("email")}
              />
              <p className="signup-error-message">{errors.email?.message}</p>
            </div>
            <div className="signup-input-label-div">
              <label className="signup-label">Phone Number</label>
              <input
                type="text"
                className="signup-input"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
              <p className="signup-error-message">
                {errors.phoneNumber?.message}
              </p>
            </div>
            <div className="signup-input-label-div">
              <label className="signup-label">Password</label>
              <input
                type="text"
                className="signup-input"
                placeholder="Password"
                {...register("password")}
              />
              <p className="signup-error-message">{errors.password?.message}</p>
            </div>
            <div className="signup-input-label-div">
              <label className="signup-label">Confirm Password</label>
              <input
                type="text"
                className="signup-input"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              <p className="signup-error-message">
                {errors.confirmPassword?.message}
              </p>
            </div>
            <button
              className={!changeSigninBtn ? "signup-btn" : "signup-btn-true"}
              type="submit"
            >
              Signup
            </button>
            <div className="signup-subtext-down">
              Already have an account ?
              <span className="signup-subtext-span-down">Login</span>
            </div>
          </form>
        </section>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default UserSignup;
