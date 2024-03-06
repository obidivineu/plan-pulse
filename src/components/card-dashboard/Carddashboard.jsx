/* eslint-disable react/prop-types */
import "./carddashboard.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { FaPeopleGroup } from "react-icons/fa6";
import { useEffect } from "react";

const Carddashboard = (props) => {
  const { cardDatas, allMember } = useContext(AppContext)

  const [activeMember, setActiveMember] = useState([])

  const [nonActiveMember, setNonActiveMember] = useState([])
  
  const [oneMonthPlan, setOneMonthPlan] = useState([])

  const [twoMonthPlan, setTwoMonthPlan] = useState([])

  const [threeMonthPlan, setThreeMonthPlan] = useState([])

  console.log(allMember.length)

  const handleActiveMember = () => {
    const updatedMember = allMember.filter((e) => e.status === true)
    setActiveMember(updatedMember)
  }

  useEffect(() => {
    handleActiveMember()
  }, [allMember])

  const handleNonActiveMember = () => {
    const updatedMember = allMember.filter((e) => e.status === false)
    setNonActiveMember(updatedMember)
  }

  useEffect(() => {
    handleNonActiveMember()
  }, [allMember])

  const handleOneMonthPlan = () => {
    const updatedMember = allMember.filter((e) => e.plan === "1Month")
    setOneMonthPlan(updatedMember)
  }
  useEffect(() => {
    handleOneMonthPlan()
  }, [allMember])
  
  const handleTwoMonthPlan = () => {
    const updatedMember = allMember.filter((e) => e.plan === "2Month")
    setTwoMonthPlan(updatedMember)
  }
  useEffect(() => {
    handleTwoMonthPlan()
  }, [allMember])

  const handleThreeMonthPlan = () => {
    const updatedMember = allMember.filter((e) => e.plan === "3Month")
    setThreeMonthPlan(updatedMember)
  }
  useEffect(() => {
    handleThreeMonthPlan()
  }, [allMember])

  return (
    <div className="boxing">
      <main className="carddash-container">
        <section className="carddash-img-section">
          <FaPeopleGroup />
        </section>
        <section className="carddash-status">Total Member</section>
        <section className="carddash-number">{allMember.length}</section>
      </main>
      <main className="carddash-container">
        <section className="carddash-img-section">
          <FaPeopleGroup />
        </section>
        <section className="carddash-status">Active Member</section>
        <section className="carddash-number">{activeMember.length}</section>
      </main>
      <main className="carddash-container">
        <section className="carddash-img-section">
          <FaPeopleGroup />
        </section>
        <section className="carddash-status">Non-Active Member</section>
        <section className="carddash-number">{nonActiveMember.length}</section>
      </main>
      <main className="carddash-container">
        <section className="carddash-img-section">
          <FaPeopleGroup />
        </section>
        <section className="carddash-status">1 Month Plan</section>
        <section className="carddash-number">{oneMonthPlan.length}</section>
      </main>
      <main className="carddash-container">
        <section className="carddash-img-section">
          <FaPeopleGroup />
        </section>
        <section className="carddash-status">2 Month Plan</section>
        <section className="carddash-number">{twoMonthPlan.length}</section>
      </main>
      <main className="carddash-container">
        <section className="carddash-img-section">
          <FaPeopleGroup />
        </section>
        <section className="carddash-status">3 Month Plan</section>
        <section className="carddash-number">{threeMonthPlan.length}</section>
      </main>
    </div>
  );
};

export default Carddashboard;
