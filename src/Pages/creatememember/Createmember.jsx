import "../creatememember/createmember.css";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import Swal from 'sweetalert2'


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
      setLoading(true)
      Swal.fire({
        title: "Member Successfully Added",
        text: response?.data?.message,
        icon: "success",
        confirmButtonText: "okay",
        timer: "5000",
        showConfirmButton: false
      })

      
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
        Swal.fire({
          title: "Added Member Failed",
          text: error?.message,
          icon: "error",
          confirmButtonText: "okay",
          timer: "5000",
          showConfirmButton: false
        })
       

      }
      else {
        Swal.fire({
          title: "Added Member Failed",
          text: error?.response?.data?.message,
          icon: "error",
          confirmButtonText: "okay",
          timer: "5000",
          showConfirmButton: false
        })
      }
    }
    finally{
      setLoading(false)
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
          {loading ? <SpinnerCircular
              size={30}
              thickness={99}
              speed={100}
            /> : 'ADD'}
          </button>
        </form>

    
       
    
      </div>
    </main>
  );
};

export default Createmember;
