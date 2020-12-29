import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { passwordResetValidationSchema } from "../../helpers/validationSchema";
import {
  emailConfirmationForPasswordReset,
  resetPassword
} from "../../api/auth.api";
import { useContext } from "react";
import { IsLoggedContext } from "../../state/IsLogged";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      width: "100%"
    },
    "& .MuiInputBase-input": {
      fontSize: "15px"
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.3rem"
    },
    "& .MuiFormLabel-root ": {
      backgroundColor: "#fff"
    }
  },
  option: {
    fontSize: 15,
    "& > span": {
      fontSize: 18
    }
  }
}));

const PasswordReset = ({ match }) => {
  const history = useHistory();
  const [resetToken, setResetToken] = useState("");

  useEffect(() => {
    if (!match.params.reset_token) {
      history.push("forgot-password");
    }
    setResetToken(match.params.reset_token);
    // eslint-disable-next-line
  }, [match.params.reset_token]);

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="layout__outlet ng-tns-c273-0">
        <router-outlet
          name="header"
          role="banner"
          className="ng-tns-c273-0 ng-star-inserted"
        />
        <app-header className="ng-star-inserted">
          <div className="header accent">
            <figure />
          </div>
        </app-header>

        <router-outlet name="notice" className="ng-tns-c273-0" />

        <div className="ng-tns-c273-0 ng-trigger ng-trigger-chatLayoutAnimation">
          <app-register
            _nghost-ucn-c280
            className="ng-star-inserted"
            style={{}}
          >
            <div
              _ngcontent-ucn-c280
              className="content content--center ng-star-inserted"
              style={{}}
            >
              <section
                _ngcontent-ucn-c280
                tabIndex={-1}
                className="main-content content__main content__main--center content__main--smallest"
              >
                <div className="content__headline">
                  <h2>Reset Password</h2>
                  <i className="hide--phone icons icons--large icons--success--bright">
                    lock
                  </i>
                </div>
                <hr />

                <div
                  _ngcontent-ucn-c280
                  className="form-group mobile-clearance "
                >
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      password_confirmation: ""
                    }}
                    validationSchema={passwordResetValidationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);

                      const response = await resetPassword({
                        token: resetToken,
                        email: values.email,
                        password: values.password,
                        password_confirmation: values.password_confirmation
                      });
                      if (response.message === "The password reset successly") {
                        alert(response.message);
                        history.push("/");
                      } else {
                        alert("Something went wrong");
                      }

                      resetForm();
                      setSubmitting(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                    }) => (
                      <form onSubmit={handleSubmit} className={classes.root}>
                        <p>Enter your email and a new password</p>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-3">
                            <div
                              style={{ padding: 0 }}
                              className="mat-form-field-flex ng-tns-c73-3"
                            >
                              <TextField
                                name="email"
                                required
                                id="outlined-required"
                                label="Email"
                                value={values.email}
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-3">
                            <div
                              style={{ padding: 0 }}
                              className="mat-form-field-flex ng-tns-c73-3"
                            >
                              <TextField
                                type="password"
                                name="password"
                                required
                                id="outlined-required"
                                label="Password"
                                value={values.password}
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && errors.password}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div
                            style={{ padding: 0 }}
                            className="mat-form-field-flex ng-tns-c73-3"
                          >
                            <TextField
                              type="password"
                              name="password_confirmation"
                              required
                              id="outlined-required"
                              label="Retype Password"
                              value={values.password_confirmation}
                              variant="outlined"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.password_confirmation &&
                                errors.password_confirmation
                              }
                            />
                          </div>
                        </div>
                        <div
                          style={{ marginTop: "20px" }}
                          className="margin--smaller button-group button-group--space-between"
                        >
                          <button
                            disabled={isSubmitting}
                            mat-raised-button
                            color="primary"
                            type="submit"
                            className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
                          >
                            <span className="mat-button-wrapper">Change</span>
                            <div
                              matripple
                              className="mat-ripple mat-button-ripple"
                            />
                            <div className="mat-button-focus-overlay" />
                          </button>
                        </div>
                        <div class="grecaptcha-terms margin--medium font-size--tiny color--gray-light">
                          {" "}
                          This site is protected by reCAPTCHA and the Google{" "}
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Terms of Service
                          </a>{" "}
                          apply.{" "}
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </section>
            </div>
          </app-register>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default PasswordReset;
