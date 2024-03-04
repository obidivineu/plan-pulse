import "./error.css";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const { errorMsg } = useContext(AppContext);
  const [isErrorSign, setIsErrorSign] = useState(false);

  const handleErrorClick = () => {
    navigate("/user-signup");
    setIsErrorSign(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsErrorSign(false);
    }, 1000);
  }, [isErrorSign, setIsErrorSign]);
  return (
    <main className="main-container">
      <h3 className="error">Error</h3>
      <p className="message">{errorMsg}</p>
      <button
        onClick={handleErrorClick}
        className={!isErrorSign ? "signup-back-btn" : "signup-back-btn-true"}
      >
        Go Back
      </button>
    </main>
  );
};

export default Error;
