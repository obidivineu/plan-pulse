import "./header.css";
import Notification from "../notification/Notification";
import Search from "../search/Search";
import { AppContext } from "../../context";
import { useContext } from "react";

const Header = () => {
  const { title } = useContext(AppContext);

  return (
    <main className="header-container">
      <section className="left-leader-section">
        <div className="header-time">{`${new Date().toUTCString()}`}</div>
        <div className="header-message">Welcome, The Red Bit</div>
        <div className="header-board-section">{title}</div>
      </section>
      <section className="right-leader-section">
        <article className="notifcation-div">
          <Notification />
        </article>
        <article className="search-div">
          <Search />
        </article>
      </section>
    </main>
  );
};

export default Header;
