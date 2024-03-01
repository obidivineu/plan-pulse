import "./board.css";
import Dashboard from "../dashboard/Dashboard";
import Allmember from "../allmember/Allmember";
import Account from "../account/Account";
import Batchupload from "../../Pages/batchupload/Batchupload";
import { AppContext } from "../../context";
import { useContext } from "react";

const Board = () => {
  const { title } = useContext(AppContext);
  return (
    <main className="board-container">
      {title === "Dashboard" ? (
        <Dashboard />
      ) : title === "Batch-Upload" ? (
        <Batchupload />
      ) : title === "All Member" ? (
        <Allmember />
      ) : title === "Plan Category" ? (
        <Allmember />
      ) : title === "Account" ? (
        <Account />
      ) : (
        <Dashboard />
      )}
    </main>
  );
};

export default Board;
