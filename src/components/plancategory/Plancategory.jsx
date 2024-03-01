import "./plancategory.css";
import { useContext } from "react";
import { AppContext } from "../../context";
import { data } from "../../localdata";

const Plancategory = () => {
  const { setShowPlanCategory, setTitle, setDatas } = useContext(AppContext);

  const handleExitPlan = (num) => {
    setShowPlanCategory(false);
    const newData = data.map((item) => {
      if (item.id === num) {
        setTitle(item.title);
        return { ...item, clicked: true };
      } else {
        return { ...item, clicked: false };
      }
    });
    setDatas(newData);
  };
  return (
    <main className="plancategory-container">
      <section className="plancategory-container-main">
        <div className="plan-cat-title">
          Click the button below to select category
        </div>
        <select name="" id="" className="plan-cat-select">
          <option value="" className="plan-cat-option">
            Choose category
          </option>
          <option value="" className="plan-cat-option">
            1-Month-Plan
          </option>
          <option value="" className="plan-cat-option">
            2-Month-Plan
          </option>
          <option value="" className="plan-cat-option">
            3-Month-Plan
          </option>
        </select>
      </section>
      <div className="plancategory-exit" onClick={() => handleExitPlan(2)}>
        X
      </div>
    </main>
  );
};

export default Plancategory;
