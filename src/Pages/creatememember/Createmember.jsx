import "../creatememember/createmember.css";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context";
import axios from "axios";


const Createmember = () => {
  const { setAddMember } = useContext(AppContext);
  const [loading, setLoading] = useState(false)

  const [createMemeber, setCreateMember] = useState({
    fullName: '',
    plan: '',
  })

  const handleExit = () => {
    setAddMember(false);
  };

  const handleChange = (e) => {
    setCreateMember({
      ...createMemeber,
      [e.target.name]: e.target.value
    })
  };

  const token = localStorage.getItem('pass')

  const handleSub = async (e) => {
    e.preventDefault()
    setLoading(true)
    // console.log(token)
    console.log(createMemeber)
    try {
      const response = await axios.post(
        "https://planpulse.onrender.com/addClient",
        createMemeber,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setLoading(false)
      
    } catch (error) {
      console.log(error);
    }
  };
  



  return (
    <main className="create">
      <div className="creatememberbox">
        <div className="logodelete" onClick={handleExit}>
          X
        </div>
        <form className="inputs" onSubmit={handleSub}>
      
          <input type="text" placeholder="Name" name="fullName" onChange={handleChange}/>
          <select  id="" className="plan-cat-selects" name='plan' onChange={handleChange} >
          <option value="" className="plan-cat-option" >
            Choose Plan
          </option>
          <option className="plan-cat-option" value="1Month">
            1Month
          </option>
          <option value="2Month" className="plan-cat-option">
          2Month
          </option>
          <option value="3Month" className="plan-cat-option">
            3Month
          </option>
        </select>
      
        
          <button type="submit">
           ADD
          </button>
        </form>

    
       
    
      </div>
    </main>
  );
};

export default Createmember;
