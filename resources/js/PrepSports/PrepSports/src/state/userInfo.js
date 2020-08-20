import React from 'react';
import { createContext, useState } from 'react';

export const Context = createContext({
  userInfo: {},
  setUserInfo: () => {},
});

export const Provider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    username: 'Test_Name',
    email: 'test@mail.com',
    location: '35, USA (EET)',
  });

  const userInfoContext = {
    setUserInfo: userInfo => setUserInfo(userInfo),
    userInfo,
  };

  return (
    <Context.Provider value={userInfoContext}>{children}</Context.Provider>
  );
};

export { Provider as UserInfoContextProvider, Context as UserInfoContext };
