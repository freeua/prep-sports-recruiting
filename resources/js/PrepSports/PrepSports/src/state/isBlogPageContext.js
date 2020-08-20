import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  isBlogPage: null,
  setIsBlogPage: () => {},
});

export const Provider = ({ children }) => {
  const [isBlogPage, setIsBlogPage] = useState(false);

  const isBlogPageContext = {
    setIsBlogPage: (isBlogPage) => setIsBlogPage(isBlogPage),
    isBlogPage,
  };

  return (
    <Context.Provider value={isBlogPageContext}>{children}</Context.Provider>
  );
};

export { Provider as IsBlogPageContextProvider, Context as IsBlogPageContext };
