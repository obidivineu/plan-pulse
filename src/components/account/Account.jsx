import "./account.css";

const Account = () => {
  return (
    <main className="account-container">
      <div className="account-page">My Company Details</div>
      <div className="account-container-data">
        <section className="account-data">
          <div className="data-title-div">Company Name :</div>
          <div className="data-title-div">Email :</div>
          <div className="data-title-div">Reg No :</div>
          <div className="data-title-div">Contact :</div>
          <div className="data-title-div">DOR :</div>
        </section>
        <section className="account-data">
          <div className="data-title-div">Company Name :</div>
          <div className="data-title-div">Email :</div>
          <div className="data-title-div">Reg No :</div>
          <div className="data-title-div">Contact :</div>
          <div className="data-title-div">DOR :</div>
        </section>
      </div>
    </main>
  );
};

export default Account;
