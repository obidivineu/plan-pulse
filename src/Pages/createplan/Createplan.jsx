import "./createplan.css";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CreatePlan = (props) => {
  const {id} = useParams()
  console.log(id);
  const { setToCreatePlan, token, theClientSelectedId, modalId, setmodalId, fullName, setfullName } =
    useContext(AppContext);
  const nameRef = useRef(null);
  const planRef = useRef(null);
  console.log(fullName)
  console.log(modalId)
  console.log(props)
  const handleExit = () => {
    setToCreatePlan(false);
  };

  const [dataId, setDataId] = useState(localStorage.getItem('userDatas'))
  console.log(dataId)

  

  const handleSub = async () => {
    // const client = {
    //   id: nameRef.current.value,
    //   plan: planRef.current.value,
    // };
    const userDataId = dataId._id
    console.log(userDataId)
    // try {
    //   const response = await axios.put(
    //     `https://planpulse.onrender.com/addPlan/${id}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   console.log(response.data);
    //   console.log(client.id);
    // } catch (error) {
    //   console.log(error.message);
    // }

  };

  


  const getOne=async ()=>{
    try{
      const response = await axios.get('https://planpulse.onrender.com/getOneMember');
      console.log(response.data)

    }catch(error){
      console.error(error)
    }
  }

  
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
            <div className='planadd'>Full Name:<div className="user">{fullName}</div></div>
            <div className='planadd'> Membership-id: <div className="user">{modalId}</div></div>
          </div>
          <div className="mid">
            <select type="text" ref={planRef} className="selec">
              <option value="">Choose Plan</option>
              <option value="one month plan">1Month</option>
              <option value="two month plan">2Month</option>
              <option value="three month plan">3Month</option>
            </select>
            <button className='clickon' onClick={handleSub}>Subscribe</button>
          </div>
        </div>
      </div>


    </main>
  );
};

export default CreatePlan;
