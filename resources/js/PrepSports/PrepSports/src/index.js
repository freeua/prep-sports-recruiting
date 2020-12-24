import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { UserInfoContextProvider } from "./state/userInfo";
import { IsLoggedContextProvider } from "./state/IsLogged";

ReactDOM.render(
  <React.StrictMode>
    <UserInfoContextProvider>
      <IsLoggedContextProvider>
        <App />
      </IsLoggedContextProvider>
    </UserInfoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
