import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context";

const Userprivacy = () => {
  const { token } = useContext(AppContext);

  return <>{!token ? <Navigate to="/home-screen" /> : <Outlet />}</>;
};

export default Userprivacy;
