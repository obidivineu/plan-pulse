/* eslint-disable react/prop-types */
import "./logout.css";
import { useContext } from "react";
import { AppContext } from "../../context";

const Logout = (props) => {
  const { isLogOut } = useContext(AppContext);
  return (
    <main className={!isLogOut ? "logout-container" : "logout-container-true"}>
      <div className="logout-div">
        <img src={props.logout} alt="logout" className="logout-img" />
      </div>
      <div className={!isLogOut ? "logout-text" : "logout-text-true"}>
        {props.text}
      </div>
    </main>
  );
};

export default Logout;
