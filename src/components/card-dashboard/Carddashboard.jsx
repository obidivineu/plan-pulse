/* eslint-disable react/prop-types */
import "./carddashboard.css";
// import { useContext } from "react";
// import { AppContext } from "../../context";

const Carddashboard = (props) => {
  // const {cardDatas} = useContext(AppContext)
  return (
    <main className="carddash-container">
      <section className="carddash-img-section">
        <img src={props.icon} alt="" className="carddash-img" />
      </section>
      <section className="carddash-status">{props.status}</section>
      <section className="carddash-number">{props.number}</section>
    </main>
  );
};

export default Carddashboard;
