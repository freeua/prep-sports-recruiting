import post from "./services/post";
import get from "./services/get";

export const getCoaches = (payload, token) =>
  post("/api/account/get-coaches", payload, {
    headers: {
      Authorization: "Bearer " + token
    }
  });

export const getLog = () => post("/api/account/get-log");

export const sendMail = () => post("/api/send_mail");

export const getPlans = token =>
  get("/api/account/get-plans", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

export const getSports = token =>
  get("/api/account/get-sports", {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json"
    }
  });

export const getPlansWithSports = token =>
  get("/api/account/get-sports-plans", {
    headers: {
      Authorization: "Bearer " + token
    }
  });
