import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  sportsInfo: [],
  setSportsInfo: () => []
});

export const Provider = ({ children }) => {
  // sportsInfo[0]: sports array
  // sportsInfo[1]: plans array
  const [sportsInfo, setSportsInfo] = useState([]);

  const sportsInfoContext = {
    setSportsInfo: sportsInfo => setSportsInfo(sportsInfo),
    sportsInfo
  };

  return (
    <Context.Provider value={sportsInfoContext}>{children}</Context.Provider>
  );
};

export { Provider as SportsInfoContextProvider, Context as SportsInfoContext };
