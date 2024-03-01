import "./batchupload.css";
import logo from "../../assets/image6.png";

const Batchupload = () => {
  return (
    <main className="batch-upload-container">
      <header className="batch-upload-logo-div">
        <img src={logo} alt="logo" className="batch-upload-logo" />
      </header>
      <div className="batch-exit">X</div>
      <form className="batch-upload-form">
        <header className="head-batch-upload">Batch Upload</header>
        <section className="excel">
          <article className="each-user">
            <div className="batch-upload-input-label-div">
              <label className="batch-upload-label">Name</label>
              <input
                type="text"
                className="batch-upload-input"
                placeholder="Name"
              />
            </div>
            <div className="batch-upload-input-label-div">
              <label className="batch-upload-label">Email</label>
              <input
                type="text"
                className="batch-upload-input"
                placeholder="Email"
              />
            </div>
          </article>
        </section>
        <div className="btns-Div">
          <button className="batch-upload-adduser">Add user</button>
          <button className="batch-upload-submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Batchupload;
