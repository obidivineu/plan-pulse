import "./dashboard.css";
import Carddashboard from "../card-dashboard/Carddashboard";
import Button from "../button/Button";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import groupW from "../../assets/gw.png";

const Dashboard = () => {
  const { cardDatas } = useContext(AppContext);
  const [addTog, setAddTog] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddTog(false);
    }, 1000);
  }, [addTog, setAddTog]);

  return (
    <main className="dashboard-container">
      <div className="btn-dash" onClick={() => setAddTog(true)}>
        <Button
          btn="Add New Member"
          wid={120}
          bg="#FF595E"
          bg2="#fdfdf7"
          hei={40}
          col="white"
          bod={1}
          font={11}
          br={20}
          addCheck={addTog}
        />
      </div>
      <div className="dashboard-content">
        {cardDatas.map((item) => {
          return (
            <Carddashboard
              key={item.id}
              status={item.status}
              number={5}
              icon={groupW}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Dashboard;
