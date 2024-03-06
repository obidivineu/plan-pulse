import "./createplan.css";
import { useContext, useRef } from "react";
import { AppContext } from "../../context";
import axios from "axios";
import { useEffect } from "react";

const CreatePlan = (props) => {
  const { setToCreatePlan, token, theClientSelectedId, modalId, setmodalId, fullName, setfullName } =
    useContext(AppContext);
  const nameRef = useRef(null);
  const planRef = useRef(null);
  console.log(fullName)
  console.log(modalId)
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



  const getOne=async ()=>{
    try{
      const response = await axios.get("https://planpulse.onrender.com/getOneMember/:id");
      console.log(response.data)

    }catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{

  },[])
  
  return (
    <main className="create">
      <div className="creatememberbox">
        <div className="logodelete" onClick={handleExit}>
          X
        </div>
        <div>


          <div className='include'>
            <div className='cancelling'>
            </div>
            <div className='planadd'>Full Name:<div className="user">{props.inactivefullName}</div></div>
            <div className='planadd'> Membership-id: <div className="user">{modalId}</div></div>
          </div>
          <div className="mid">
            <select type="text" ref={planRef} className="selec">
              <option value="">Choose Plan</option>
              <option value="one month plan">1Month</option>
              <option value="two month plan">2Month</option>
              <option value="three month plan">3Month</option>
            </select>
            <button className='clickon'>Subscribe</button>
          </div>
        </div>
      </div>


    </main>
  );
};

export default CreatePlan;
