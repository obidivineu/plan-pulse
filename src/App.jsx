import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "../src/Pages/user-login-page/UserLogin";
import ForgotPassword from "../src/Pages/forgot-password-page/ForgotPassword";
import EmailValidation from "../src/Pages/emailvalidation/EmailValidation";
import Createmember from "../src/Pages/creatememember/Createmember";
import DecisionPage from "../src/Pages/decisionpage/DecisionReset";
import Landingpage from "../src/Pages/landing-page/HomeScreen/HomeScreen";
import Failedtransfer from "../src/Pages/failedtransfer/Failedtransfer";
import Successful from "../src/Pages/sucessfullpassword/Sucessfulpassword";
import Successfultransfer from "../src/Pages/sucessfultransferpage/Sucessfultransfer";
import HomeScreen from "../src/Pages/landing-page/HomeScreen/HomeScreen";
import UserSignup from "../src/Pages/user-signup-page/UserSignup";
import Userdashboard from "./Pages/user-dashboard/Userdashboard";
import Resetpasswordform from "./Pages/resetform/Resetpasswordform";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-screen" element={<HomeScreen />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/email-validation" element={<EmailValidation />} />
          <Route path="/create-member" element={<Createmember />} />
          <Route path="/decision-page" element={<DecisionPage />} />
          <Route path="/failed-transfer" element={<Failedtransfer />} />
          <Route path="/success-pass" element={<Successful />} />
          <Route path="/success-transfer" element={<Successfultransfer />} />
          <Route path="/user-dashboard" element={<Userdashboard />} />
          <Route path="/reset-form" element={<Resetpasswordform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
