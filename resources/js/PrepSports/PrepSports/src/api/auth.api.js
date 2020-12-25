import post from "./services/post";

export const signUp = payload => post("/api/registration", payload);

export const login = payload => post("/api/auth/login", payload);

export const logout = () => post("/api/auth/logout");

export const forgotPassword = payload => post("/forgot-password", payload);

export const getAccountData = (payload, token) =>
  post("/api/account/get-account-data", payload, {
    headers: {
      Authorization: "Bearer " + token
    }
  });

export const authMe = token =>
  post(
    "/api/auth/me",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json"
      }
    }
  );

export const resetPassword = payload =>
  post("/password/reset", payload, {
    headers: {
      Accept: "application/json"
    }
  });

export const emailConfirmationForPasswordReset = email =>
  post(
    "/password/email",
    { email },
    {
      headers: {
        Accept: "application/json"
      }
    }
  );
