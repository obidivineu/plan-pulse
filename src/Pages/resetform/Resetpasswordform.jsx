import "./resetpassform.css";
import logo from "../../assets/image6.png";
import nav from "../../assets/Vector2.png";
const Resetpasswordform = () => {
  return (
    <main className="reset-form-container">
      <div className="reset-form-logo-div">
        <img src={logo} alt="log" className="reset-form-logo" />
      </div>
      <nav className="reset-form-navigation">
        <img src={nav} alt="nav" className="reset-form-nav-img" />
      </nav>
      <form className="reset-form">
        <header className="head-reset-form">Reset your password</header>
        <div className="reset-form-input-label-div">
          <label className="reset-form-label">New Password</label>
          <input
            type="text"
            className="reset-form-input"
            placeholder="New Password"
          />
        </div>
        <div className="reset-form-input-label-div">
          <label className="reset-form-label">Confirm Password</label>
          <input
            type="text"
            className="reset-form-input"
            placeholder="Confirm Password"
          />
        </div>
        <button className="reset-form-btn">Signup</button>
      </form>
    </main>
  );
};

export default Resetpasswordform;
