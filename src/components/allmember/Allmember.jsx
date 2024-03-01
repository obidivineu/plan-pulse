import "./allmember.css";
import { users } from "../../localdata";
import del from "../../assets/delete.png";
import shape from "../../assets/shape (1).png";

const Allmember = () => {
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
        {users.map((item, index) => {
          return (
            <section className="a-user" key={item.id}>
              <div className="a-user-index">{index + 1}</div>
              <div className="a-user-name">{item.name}</div>
              <div className="a-user-id">{item.id}</div>
              <div className="a-user-status">{item.status}</div>
              <div className="a-user-plan">{item.plan}</div>
              <div className="del-div">
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
