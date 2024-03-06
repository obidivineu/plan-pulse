import "./allmember.css";
import { MdAutoDelete } from "react-icons/md";
import shape from "../../assets/shape (1).png";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context";
import CreatePlans from "../../Pages/createplan/Createplan";

const Allmember = () => {
  const { setToCreatePlan, setToSeeClient, setTheClientSelectedId, allMember, setAllMember, modalId ,setmodalId} =
    useContext(AppContext);
  //  const [allMember, setAllMember] = useState([]);

  const [toCreatePlans, setToCreatePlans] = useState(false);

  console.log(allMember)
  const handleDel = async (num) => {
    const newData = await axios.delete(
      `https://planpulse.onrender.com/delete/${num} `,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(newData);
  };

  const handleSelect = (num) => {
    const theSelected = allMember.map((item) => {
      if (item.membershipId === num && item.status === false) {
        setToCreatePlan(true);
        setTheClientSelectedId(item.membershipId);
        return { ...item, selected: true };
      } else if (item.membershipId === num && item.status === true) {
        setToSeeClient(true);
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setAllMember(theSelected);
  };

  const getAllMember = async () => {
    const token = localStorage.getItem('pass')
    // console.log(token)
    await axios.get("https://planpulse.onrender.com/getAllMember", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data),
          setAllMember(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getAllMember()
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // const getAllMember = JSON.parse(localStorage.getItem("allMember"));

  const handleOpenModal = (_id,fullName)=>{
    const updatedMembers = allMember.map((item)=>{
      if(item._id===_id){
        return {...item,Open:true}
      }
      return item
    })
    setAllMember(updatedMembers)
    setmodalId(_id)
    setfullName(fullName)
  }


  return (
    <main className="allmember-container">
      <header className="allmember-header">
        <div className="word">S/N</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Name</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">MemberShip-ID</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Status</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Plan</div>
        <div className="shape-div">
          <img src={shape} alt="shape" className="shape" />
        </div>
        <div className="word">Delete</div>
      </header>

      <div className="allmember-line"></div>
      <section className="allmember-person">

      



        {allMember?.map((item, index) => {
          return (
            <section
              className={!item.selected ? "a-user" : "a-user-true"}
              key={item._id}
              onClick={()=>handleOpenModal(item._id,item.fullName)}
            >
              <>
                <div
                  className="a-user-index"
                  // onClick={() => handleSelect(item.membershipId)}
                  onClick={()=>handleOpenModal(item._id,item.fullName)}
                  
                >
                  {index + 1}
                </div>
                <div
                  className="a-user-name"
                  // onClick={() => handleSelect(item.membershipId)}
                  onClick={()=>handleOpenModal(item._id , item.fullName)}
                  
                >
                  {item.fullName}
                </div>
                <div
                  className="a-user-id"
                  onClick={() => handleSelect(item.membershipId)}
                >
                  {item.membershipId}
                </div>
                <div
                  className="a-user-status"
                  onClick={() => handleSelect(item.membershipId)}
                >
                  {item.status ? "Active" : "Not-Active"}
                </div>
                <div
                  className="a-user-plan"
                  onClick={() => handleSelect(item.membershipId)}
                >
                  {item.plan ? item.plan : "No-Plan"}
                </div>
              </>
              <div className="del-div" onClick={() => handleDel(item._id)}>
                <MdAutoDelete className="del" />
              </div>
              {allMember.Open&&<CreatePlans inactiveId={item._id}  inactiveMembershipId={item.membershipId} inactivefullName={item.fullName}/>}
            </section>
          );
        }
        )}

      </section>
    </main>
  );
};

export default Allmember;
