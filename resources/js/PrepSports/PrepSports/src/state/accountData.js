import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  accountData: {},
  setAccountData: () => {}
});

export const Provider = ({ children }) => {
  const [accountData, setAccountData] = useState({});

  const accountDataContext = {
    setAccountData: accountData => setAccountData(accountData),
    clearAccountData: () => setAccountData({}),
    accountData
  };

  return (
    <Context.Provider value={accountDataContext}>{children}</Context.Provider>
  );
};

export {
  Provider as AccountDataContextProvider,
  Context as AccountDataContext
};
