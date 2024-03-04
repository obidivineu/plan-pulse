import "./batchupload.css";
import logo from "../../assets/image6.png";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../context";

const Batchupload = () => {
  const [dataArray, setDataArray] = useState([]);
  // const [realData, setRealData]  = useState([])
  const nameRef = useRef(null);
  const planRef = useRef(null);
  const nameLooPRef = useRef(null);
  const planLoopRef = useRef(null);

  const { token } = useContext(AppContext);

  const createBatch = () => {
    setDataArray((old) => [...old, old + 1]);
  };

  const handleDeleteAbatch = (num) => {
    const newData = dataArray.filter((item) => item !== num);
    setDataArray(newData);
  };

  const handleSubmitBatch = async () => {
    const bulkData = [
      { fullName: nameRef.current.value, plan: planRef.current.value },
      { fullName: nameLooPRef.current.value, plan: planLoopRef.current.value },
    ];
    try {
      const response = await axios.post(
        "https://planpulse.onrender.com/createBulkUser",
        bulkData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <main className="batch-upload-container">
      <header className="batch-upload-logo-div">
        <img src={logo} alt="logo" className="batch-upload-logo" />
      </header>

      <header className="head-batch-upload">Batch Upload</header>
      <form className="batch-upload-form" onSubmit={handleSubmitBatch}>
        <section className="excel">
          <article className="each-user">
            <div className="batch-upload-input-label-div">
              <label className="batch-upload-label">Name</label>
              <input
                type="text"
                className="batch-upload-input"
                placeholder="Name"
                ref={nameRef}
              />
            </div>
            <div className="batch-upload-input-label-div">
              <label className="batch-upload-label">Plan</label>
              <input
                type="text"
                className="batch-upload-input"
                placeholder="Plan"
                ref={planRef}
              />
            </div>
          </article>
        </section>

        {dataArray.map((item) => {
          return (
            <section className="excel" key={item}>
              <article className="each-user">
                <div className="batch-upload-input-label-div">
                  <label className="batch-upload-label">Name</label>
                  <input
                    type="text"
                    className="batch-upload-input"
                    placeholder="Name"
                    ref={nameLooPRef}
                  />
                </div>
                <div className="batch-upload-input-label-div">
                  <label className="batch-upload-label">Plan</label>
                  <input
                    type="text"
                    className="batch-upload-input"
                    placeholder="Plan"
                    ref={planLoopRef}
                  />
                </div>
              </article>
              <div
                className="batch-exit-loop"
                onClick={() => handleDeleteAbatch(item)}
              >
                X
              </div>
            </section>
          );
        })}
        <div className="btns-Div">
          <button className="batch-upload-adduser" onClick={createBatch}>
            Add user
          </button>
          <button className="batch-upload-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Batchupload;
