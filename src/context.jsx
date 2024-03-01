import { createContext, useState } from "react";
import { data, cardData } from "./localdata";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [datas, setDatas] = useState(data);
  const [title, setTitle] = useState("Overview");
  const [cardDatas, setCardDatas] = useState(cardData);
  const [showPlanCategory, setShowPlanCategory] = useState(false);
  const [exitTog, setExitTog] = useState(false);
  const [iconTextTog, setIconTextTog] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const [ldMode, setLdMode] = useState(false);
  const [emailStore, setEmailStore] = useState("");
  return (
    <AppContext.Provider
      value={{
        datas,
        setDatas,
        title,
        setTitle,
        cardDatas,
        setCardDatas,
        showPlanCategory,
        setShowPlanCategory,
        exitTog,
        setExitTog,
        iconTextTog,
        setIconTextTog,
        isLogOut,
        setIsLogOut,
        ldMode,
        setLdMode,
        emailStore,
        setEmailStore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
