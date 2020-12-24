import post from "./services/post";

export const signUp = payload => post("/registration", payload);

export const login = payload => post("/auth/login", payload);

export const logout = () => post("/auth/logout");

export const forgotPassword = payload => post("/forgot-password", payload);

export const getAccountData = payload => post("/get-account-data", payload);

export const authMe = token =>
  post(
    "/auth/me",
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
