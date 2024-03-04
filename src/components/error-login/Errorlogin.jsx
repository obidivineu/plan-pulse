import "./errorlogin.css";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Errologin = () => {
  const navigate = useNavigate();
  const { errorMsg } = useContext(AppContext);
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const handleErrorLogClick = () => {
    navigate("/user-login");
    setIsErrorLogin(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsErrorLogin(false);
    }, 1000);
  }, [isErrorLogin, setIsErrorLogin]);

  return (
    <main className="errologin-container">
      <h3 className="error">Error</h3>
      <p className="message">{errorMsg}</p>
      <button
        onClick={handleErrorLogClick}
        className={!isErrorLogin ? "signup-back-btn" : "signup-back-btn-true"}
      >
        Go Back
      </button>
    </main>
  );
};

export default Errologin;
