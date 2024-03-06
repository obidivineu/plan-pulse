import "./menu.css";
import Category from "../category/Category";
import Logout from "../logout/Logout";
import logout from "../../assets/logout.png";
import logoutC from "../../assets/logout-color.png";
import { useContext, useEffect } from "react";
import { data } from "../../localdata";
import { AppContext } from "../../context";
import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();
  const {
    datas,
    setDatas,
    setTitle,
    setShowPlanCategory,
    setIsLogOut,
    isLogOut,
    userData,
    setUserData,
  } = useContext(AppContext);

  const handleChange = (num) => {
    const newData = data.map((item) => {
      if (item.id === num) {
        setTitle(item.title);
        return { ...item, clicked: true };
      } else {
        return { ...item, clicked: false };
      }
    });
    setDatas(newData);
    if (num === 4) {
      setShowPlanCategory(true);
    } else setShowPlanCategory(false);
  };
  const handleLogout = () => {
    setIsLogOut(true);
    navigate("/user-login");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLogOut(false);
    }, 1000);
  }, [isLogOut, setIsLogOut]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDatas"));
    setUserData(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="menu-container">
      <section className="menu-company-logo">
        <img
          src={userData?.profilePicture}
          alt="logo"
          className="menu-company-logo-img"
        />
      </section>
      <section className="menu-category">
        {datas.map((item) => {
          return (
            <div
              className={
                !item.clicked ? "menu-category-box" : "menu-category-box-red"
              }
              key={item.id}
              onClick={() => handleChange(item.id)}
            >
              <Category
                icon={!item.clicked ? item.img : item.img2}
                text={item.title}
                id={item.id}
                col={item.clicked}
              />
            </div>
          );
        })}
      </section>
      <section className="menu-logout" onClick={handleLogout}>
        <Logout text="Logout" logout={!isLogOut ? logout : logoutC} />
      </section>
    </main>
  );
};

export default Menu;
