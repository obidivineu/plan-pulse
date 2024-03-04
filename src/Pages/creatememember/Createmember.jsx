import "../creatememember/createmember.css";
import { useContext, useRef } from "react";
import { AppContext } from "../../context";
import axios from "axios";

const Createmember = () => {
  const { setAddMember, token } = useContext(AppContext);
  const nameRef = useRef(null);
  //const planRef = useRef(null);

  const handleExit = () => {
    setAddMember(false);
  };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  const handleSub = async () => {
    const client = {
      fullName: nameRef.current.value,
      // plan: planRef.current.value,
    };
    try {
      const response = await axios.post(
        "https://planpulse.onrender.com/addClient",
        client,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      nameRef.current.value = "";
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
        <form className="inputs" onSubmit={handleSub}>
          <input type="text" placeholder="Name" ref={nameRef} />
          {/* <select type="text" ref={planRef} className="selec">
            <option value="">Choose Plan</option>
            <option value="one">1-Month-Plan</option>
            <option value="two">2-Month-Plan</option>
            <option value="three">3-Month-Plan</option>
          </select> */}
          <button type="submit">Add</button>
        </form>
      </div>
    </main>
  );
};

export default Createmember;
