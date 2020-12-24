import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  authMeInfo: {},
  setAuthMeInfo: () => {}
});

export const Provider = ({ children }) => {
  const [authMeInfo, setAuthMeInfo] = useState({});

  const authMeInfoContext = {
    setAuthMeInfo: authMeInfo => setAuthMeInfo(authMeInfo),
    clearAuthMeInfo: () => setAuthMeInfo({}),
    authMeInfo
  };

  return (
    <Context.Provider value={authMeInfoContext}>{children}</Context.Provider>
  );
};

export { Provider as AuthMeInfoContextProvider, Context as AuthMeInfoContext };
