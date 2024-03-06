import "./batchupload.css";
import logo from "../../assets/image6.png";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../context";

const Batchupload = () => {
  const [dataArray, setDataArray] = useState([]);
  const [useArray, setUseArray] = useState([]);
  const [save, setSave] = useState(false);
  // const nameRef = useRef(null);
  // const planRef = useRef(null);
  const [setAddName, setName] = useState("")
  const [setPlan, setAddPlan] = useState("")

  const token = localStorage.getItem('pass')

  // const createBatch = () => {
  //   setDataArray((old) => [...old, {}]);
  // };
  const createBatch = () => {
    setDataArray((old) => [
      ...old,
      {
        fullName: setAddName,
        plan: setPlan,
      },
    ]);
    setUseArray([
      ...dataArray,
      {
        fullName: setAddName,
        plan: setPlan,
      },
    ])
    console.log("clicked")
  };
  const handleDeleteAbatch = (index) => {
    const newData = [...dataArray];
    newData.splice(index, 1);
    setDataArray(newData);
  };

  const handleSubmitBatch = async () => {
    setUseArray([
      ...dataArray,
      {
        fullName: setAddName,
        plan: setPlan,
      },
    ]);

    try {
      const response = await axios.post(
        "https://planpulse.onrender.com/createBulkUser",
        useArray,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log(useArray)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSave =()=>{
    setUseArray([
      ...dataArray,
      {
        fullName: setAddName,
        plan: setPlan,
      },
    ]);
    setSave(true)
    console.log("save")
  }

  return (
    <main className="batch-upload-container">
      <header className="batch-upload-logo-div">
        <img src={logo} alt="logo" className="batch-upload-logo" />
      </header>

      <header className="head-batch-upload">Batch Upload</header>

      <div className="batch-upload-form">
        <section className="excel">
          <article className="each-user">
            <div className="batch-upload-input-label-div">
              <label className="batch-upload-label">Name</label>
              <input
                type="text"
                className="batch-upload-input"
                placeholder="Name"
                onChange={(e) => setAddPlan(e.target.value)}
              />
            </div>
            <div className="batch-upload-input-label-div">
              <label className="batch-upload-label">Plan</label>
              <input
                type="text"
                className="batch-upload-input"
                placeholder="Plan"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </article>
        </section>

        {dataArray.map((item, index) => (
          <section className="excel" key={index}>
            <article className="each-user">
              <div className="batch-upload-input-label-div">
                <label className="batch-upload-label">Name</label>
                <input
                  type="text"
                  className="batch-upload-input"
                  placeholder="Name"
                  onChange={(el) => setAddPlan(el.target.value)}
                />
              </div>
              <div className="batch-upload-input-label-div">
                <label className="batch-upload-label">Plan</label>
                <input
                  type="text"
                  className="batch-upload-input"
                  placeholder="Plan"
                  onChange={(el) => setName(el.target.value)}
                />
              </div>
            </article>
            <div
              className="batch-exit-loop"
              onClick={() => handleDeleteAbatch(index)}
            >
              X
            </div>
          </section>
        ))}
        <div className="btns-Div">
          <button className="batch-upload-adduser" onClick={createBatch}>
            Add user
          </button>
          <button className="batch-upload-submit" type="submit" onClick={save? handleSubmitBatch: handleSave}>
            {save? "Submit": "Save"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Batchupload;
