import "./account.css";
import { useEffect,useContext } from "react";
import { AppContext, } from "../../context";
const Account = () => {

  const { setUserData,userData } = useContext(AppContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDatas"));
    setUserData(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="account-container">
      <div className="account-page"><u>My Company Details</u></div>
      <div className="account-container-data">
        <section className="account-data">
          <div className="data-title-div">Company Name:</div>
          <div className="data-title-div">Email:</div>
          <div className="data-title-div">Contact:</div>
          <div className="data-title-div">Date Of Registration:</div>
        </section>
        <section className="account-data">
          <div className="data-title-div">{userData.companyName}</div>
          <div className="data-title-div">{userData.email}</div>
          <div className="data-title-div">{userData.phoneNumber}</div>
          <div className="data-title-div">{userData.signUpStartDate}</div>
        </section>
      </div>
    </main>
  );
};

export default Account;
