import "./lightanddark.css";
import { useContext } from "react";
import { AppContext } from "../../context";

const LightandDark = () => {
  const { ldMode, setLdMode } = useContext(AppContext);

  const handleLdMode = () => {
    setLdMode(!ldMode);
  };
  return (
    <main className="lightanddark-container">
      <div className={!ldMode ? "ld-outer-div" : "ld-outer-div-toright"}></div>
      <div
        className={!ldMode ? "ld-inner-div" : "ld-inner-div-toright"}
        onClick={handleLdMode}
      ></div>
    </main>
  );
};

export default LightandDark;
