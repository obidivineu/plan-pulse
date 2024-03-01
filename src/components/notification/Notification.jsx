import "./notification.css";
import noti from "../../assets/bell-col.png";

const Notification = () => {
  return (
    <main className="noti-div">
      <div className="noti-text-div">4</div>
      <div className="noti-img-div">
        <img src={noti} alt="noti" className="noti-img" />
      </div>
    </main>
  );
};

export default Notification;
