import React from "react";
import { createContext, useState } from "react";

export const Context = createContext({
  isAllowedNotifications: {},
  setIsAllowedNotifications: () => {},
});

export const Provider = ({ children }) => {
  const [isAllowedNotifications, setIsAllowedNotifications] = useState(false);

  const isAllowedNotificationsContext = {
    setIsAllowedNotifications: (isAllowedNotifications) =>
      setIsAllowedNotifications(isAllowedNotifications),
    isAllowedNotifications,
  };

  return (
    <Context.Provider value={isAllowedNotificationsContext}>
      {children}
    </Context.Provider>
  );
};

export {
  Provider as IsAllowedNotificationsContextProvider,
  Context as IsAllowedNotificationsContext,
};
