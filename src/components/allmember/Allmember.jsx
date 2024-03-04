import "./allmember.css";

import del from "../../assets/delete.png";
import shape from "../../assets/shape (1).png";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context";

const Allmember = () => {
  const { token, setToCreatePlan, setToSeeClient, setTheClientSelectedId } =
    useContext(AppContext);
  const [allMember, setAllMember] = useState([]);

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

  useEffect(() => {
    axios
      .get("https://planpulse.onrender.com/getAllMember", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        localStorage.setItem("allMember", JSON.stringify(res.data.data))
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {!JSON.parse(localStorage.getItem("allMember"))
          ? null
          : JSON.parse(localStorage.getItem("allmember")).map((item, index) => {
              return (
                <section
                  className={!item.selected ? "a-user" : "a-user-true"}
                  key={item.membershipId}
                >
                  <>
                    <div
                      className="a-user-index"
                      onClick={() => handleSelect(item.membershipId)}
                    >
                      {index + 1}
                    </div>
                    <div
                      className="a-user-name"
                      onClick={() => handleSelect(item.membershipId)}
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
                      {item.status ? "1-month Plan" : "No-Plan"}
                    </div>
                  </>
                  <div className="del-div" onClick={() => handleDel(item._id)}>
                    <img src={del} alt="del" className="del" />
                  </div>
                </section>
              );
            })}
      </section>
    </main>
  );
};

export default Allmember;
