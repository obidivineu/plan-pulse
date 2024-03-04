import "../emailvalidation/emailvalidation.css";
import EMAIL from "../../assets/omailR1.png";
import LOG from "../../assets/image6.png";
import { useContext } from "react";
import { AppContext } from "../../context";
import axios from "axios";

const EmailValidation = () => {
  const { emailStore, userId } = useContext(AppContext);

  const handleEmailVerify = async () => {
    const response = await axios.get(
      `https://planpulse.onrender.com/api/v1/verifyEmail/${userId}`
    );
    console.log(response.data);
  };
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
                <span
                  style={{ color: "#FF595E", cursor: "pointer" }}
                  onClick={handleEmailVerify}
                >
                  {emailStore}
                </span>{" "}
                to confirm the validity of our email address. After receiving
                the email follow the link provided to complete registration
              </p>
            </div>
          </header>

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
