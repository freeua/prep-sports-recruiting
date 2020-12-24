import React, { useContext, useState } from "react";
import GeneralSettings from "../Settings/GeneralSettings";
import Button from "../../../components/Button/Button";
import { Formik } from "formik";
import { passwordResetValidationSchema } from "../../../helpers/validationSchema";
import {
  resetPassword,
  emailConfirmationForPasswordReset
} from "../../../api/auth.api";
import { UserInfoContext } from "../../../state/userInfo";
import { AuthMeInfoContext } from "../../../state/authMeInfo";

const PersonalTab = () => {
  const { userInfo } = useContext(UserInfoContext);
  const { authMeInfo } = useContext(AuthMeInfoContext);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  return (
    <div className="sportsContainer">
      <div id="panelPersonal">
        <div id="userProfileForm">
          <h2 className="standalone">Personal Information</h2>
          <div
            className="filterContainer curve2"
            style={{ clear: "both" }}
            id="dvErrors"
          >
            <table id="tblErrors" style={{ width: 768 }}></table>

            <Formik
              initialValues={{
                password: "",
                password_confirmation: ""
                // email: ""
              }}
              validationSchema={passwordResetValidationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                if (isEmailConfirmed) {
                  if (values.password === values.password_confirmation) {
                    const response = await resetPassword({
                      token: userInfo.access_token,
                      email: authMeInfo.email,
                      password: values.password,
                      password_confirmation: values.password_confirmation
                    });
                    console.log(response);
                  } else {
                    alert("Retyped password must match password");
                  }
                } else {
                  const response = await emailConfirmationForPasswordReset(
                    "nikitadv777@gmail.com"
                  );
                  console.log(response);
                }

                resetForm();
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched
              }) => (
                <form onSubmit={handleSubmit}>
                  <div style={{ height: 8 }} />
                  <Button
                    onClick={handleSubmit}
                    isSubmitting={isSubmitting}
                    text="Change Password"
                  />
                  <div style={{ clear: "both" }} />

                  <div className="userOptions">
                    <div className="formatTitle curve2200 splitBar">
                      <h2>General</h2>
                    </div>
                    <div className="columnBlockInfo clearfix curve0022">
                      <div className="sportsTableBlock sportsTableBlockClean">
                        <table className="userTable curve0022">
                          <tbody>
                            <tr>
                              <td className="name">
                                <p>Username:</p>
                              </td>
                              <td className="value">
                                <p>{authMeInfo?.name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="name">
                                <p>Change Password To:</p>
                              </td>
                              <td className="value">
                                <p style={{ whiteSpace: "nowrap" }}>
                                  <input
                                    style={
                                      touched.password && errors.password
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="password"
                                    name="password"
                                    className="tb"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                  />
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="name">
                                <p>Retype New Password:</p>
                              </td>
                              <td className="value">
                                <p>
                                  <input
                                    style={
                                      touched.password_confirmation &&
                                      errors.password_confirmation
                                        ? { border: "1px solid red" }
                                        : {}
                                    }
                                    type="password"
                                    name="password_confirmation"
                                    className="tb"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password_confirmation}
                                  />
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td className="name">
                                <p>Country:</p>
                              </td>
                              <td className="value">
                                <p>{authMeInfo?.country}</p>
                              </td>
                            </tr>

                            <tr>
                              <td className="name">
                                <p>Email:</p>
                              </td>
                              <td className="value">
                                <p>{authMeInfo?.email}</p>
                              </td>
                            </tr>

                            <tr>
                              <td className="name">Avatar:</td>
                              <td className="value">
                                <div
                                  style={{
                                    float: "left",
                                    paddingTop: 8
                                  }}
                                >
                                  <img
                                    src="https://img.fantrax.com/graphics/blankAvtr.png"
                                    title="Avatar Upload"
                                    alt="Avatar"
                                    width={80}
                                    height={80}
                                  />
                                </div>
                                <div
                                  style={{
                                    float: "left",
                                    padding: "20px 0px 0px 10px"
                                  }}
                                >
                                  <input
                                    type="file"
                                    name="avatar"
                                    onchange="__dataChanged()"
                                  />
                                  <br />
                                  <span style={{ fontSize: 11 }}>
                                    Max. image file size 5 MB
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="name">Member Since:</td>
                              <td className="value" colSpan={2}>
                                {authMeInfo?.created_at}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>

            <div style={{ clear: "both" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTab;
