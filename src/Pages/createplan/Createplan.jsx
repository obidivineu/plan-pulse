import "./createplan.css";
import { useContext, useRef } from "react";
import { AppContext } from "../../context";
import axios from "axios";

const CreatePlan = () => {
  const { setToCreatePlan, token, theClientSelectedId } =
    useContext(AppContext);
  const nameRef = useRef(null);
  const planRef = useRef(null);

  const handleExit = () => {
    setToCreatePlan(false);
  };

  const handleSub = async () => {
    const client = {
      id: nameRef.current.value,
      plan: planRef.current.value,
    };
    try {
      const response = await axios.post(
        "https://planpulse.onrender.com/addPlan",
        client,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <main className="create">
      <div className="creatememberbox">
        <div className="logodelete" onClick={handleExit}>
          X
        </div>
        <form className="inputs" onClick={handleSub}>
          <input
            type="text"
            placeholder="User-Id"
            ref={nameRef}
            value={theClientSelectedId}
            onChange={(e) => console.log(e.target.value)}
          />
          <select type="text" ref={planRef} className="selec">
            <option value="">Choose Plan</option>
            <option value="one month plan">1-Month-Plan</option>
            <option value="two month plan">2-Month-Plan</option>
            <option value="three month plan">3-Month-Plan</option>
          </select>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePlan;
