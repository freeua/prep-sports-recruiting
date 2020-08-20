import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  currentSport: {},
  setCurrentSport: () => {},
});

export const Provider = ({ children }) => {
  const [currentSport, setCurrentSport] = useState({});

  const currentSportContext = {
    setCurrentSport: (sport) => setCurrentSport(sport),
    currentSport,
  };

  return (
    <Context.Provider value={currentSportContext}>{children}</Context.Provider>
  );
};

export {
  Provider as CurrentSportContextProvider,
  Context as CurrentSportContext,
};
