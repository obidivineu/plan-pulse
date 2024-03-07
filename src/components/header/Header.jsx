import "./header.css";
import Notification from "../notification/Notification";
import Search from "../search/Search";
import { AppContext } from "../../context";
import { useContext, useEffect } from "react";

const Header = () => {
  const { title, setUserData, userData } = useContext(AppContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDatas"));
    setUserData(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="header-container">
      <section className="left-leader-section">
        <div className="header-time">{`${new Date().toUTCString()}`}</div>
        <div className="header-message">{`Welcome, ${userData.companyName}`}</div>
        <div className="header-board-section">{title}</div>
      </section>
      <section className="right-leader-section">
       
        <article className="search-div">
          <Search />
        </article>
      </section>
    </main>
  );
};

export default Header;
