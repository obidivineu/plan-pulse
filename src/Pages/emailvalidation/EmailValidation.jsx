import "../emailvalidation/emailvalidation.css";
import EMAIL from "../../assets/omailR1.png";
import LOG from "../../assets/image6.png";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

const EmailValidation = () => {
  const { emailStore } = useContext(AppContext);
  const [loginBtn, setLoginBtn] = useState(false);
  const navigate = useNavigate();

  const handleEmailVerify = () => {
    setLoginBtn(true);
    navigate("/user-login");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoginBtn(false);
    }, 1000);
  }, [setLoginBtn]);
  return (
    <>
      <main className="mainmail">
        <img src={LOG} />
        <section className="emailtext">
          <header className="wrapcontain">
            <img src={EMAIL} />
            <h1 className="emailwrite">Email Confirmation</h1>
            <div className="emailmsg">
              <p>
                We have sent an email to{" "}
                <span style={{ color: "#FF595E", cursor: "pointer" }}>
                  {emailStore}
                </span>{" "}
                to confirm the validity of our email address. After receiving
                the email follow the link provided to complete registration
              </p>
            </div>
          </header>
          <button
            className={!loginBtn ? "verified" : "verified-true"}
            onClick={handleEmailVerify}
          >
            Login
          </button>

          <p className="resend">
            If you did not get any mail,{" "}
            <span style={{ color: "#111E3F", cursor: "pointer" }}>
              Resend confirmation mail
            </span>
          </p>
        </section>
      </main>
    </>
  );
};

export default EmailValidation;
