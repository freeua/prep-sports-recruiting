import post from "./services/get";

export const getCoaches = () => post("/api/account/get-coaches");

export const getLog = () => post("/api/account/get-log");

export const sendMail = () => post("/api/send_mail");

// export const getPlans = () => post("/get-plans");
