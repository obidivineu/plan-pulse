import { Navigate, Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "./context";

const Userprivacy = () => {
  //const { token } = useContext(AppContext);
  const myPass = JSON.parse(localStorage.getItem("pass"));

  return <>{!myPass ? <Navigate to="/home-screen" /> : <Outlet />}</>;
};

export default Userprivacy;
