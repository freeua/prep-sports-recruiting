import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  userInfo: {},
  setUserInfo: () => {}
});

export const Provider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    location: "",
    paid_plans: null, // 1 если человек оплатил подписку, 0 если нет
    access_token: null
  });

  const userInfoContext = {
    setUserInfo: userInfo => setUserInfo(userInfo),
    clearUser: () =>
      setUserInfo({
        username: "",
        email: "",
        location: "",
        paid_plans: null,
        access_token: null
      }),
    userInfo
  };

  return (
    <Context.Provider value={userInfoContext}>{children}</Context.Provider>
  );
};

export { Provider as UserInfoContextProvider, Context as UserInfoContext };
