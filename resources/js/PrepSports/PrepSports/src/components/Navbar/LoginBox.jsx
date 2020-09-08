import React, { useContext } from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { validationSchema } from '../../helpers/validationSchema';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { IsLoggedContext } from '../../state/IsLogged';
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      fontSize: '15px',
    },
    '& .MuiFormLabel-root': {
      fontSize: '1.3rem',
    },
    '& .MuiFormLabel-root ': {
      backgroundColor: '#fff',
    },
  },
}));

const LoginBox = () => {
  const { setIsLogged } = useContext(IsLoggedContext);
  const classes = useStyles();

  return (
    <div
      className="nav-menu  ng-tns-c254-7 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{ transform: 'translateX(-50%) scale(1)', opacity: 1 }}
    >
      <nav-profile className="ng-tns-c254-7">
        <div className="nav-login ng-star-inserted" style={{}}>
          <h5>
            Secure Login
            <i
              role="img"
              className="icons mat-icon notranslate material-icons mat-icon-no-color"
              aria-hidden="true"
            >
              lock
            </i>
          </h5>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              //...some side effects (server post requests)
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));

              axios.post("auth/login",
                  {
                      email : values.email, password : values.password, _token : window.token})
                      .then(response => {
                          setIsLogged(true);
                      })
                      .catch(function(error) {
                          alert(error)
                      });
                  resetForm();
                  setSubmitting(false);
                // TEMPORARY
                // setIsLogged(true);
                // TEMPORARY
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className={classes.root}>
                   <input type="hidden" name="_token" value={window.token} />
                  <div style={{ marginTop: '20px' }} className="form-group">
                  <div className="mat-form-field-wrapper ng-tns-c73-10">
                    <TextField
                      name="email"
                      error={touched.email && errors.email}
                      required
                      id="outlined-required"
                      label="Email or User ID"
                      value={values.email}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mat-form-field-wrapper ng-tns-c73-10">
                    <TextField
                      name="password"
                      error={touched.password && errors.password}
                      required
                      id="outlined-required"
                      type="password"
                      label="Password"
                      value={values.password}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="grid grid--center" />
                <div className="button-group">
                  <div className="nav-login__links">
                    <a routerlink="/forgot-password" href="/forgot-password">
                      Forgot Password
                    </a>
                    /
                    <Link routerlink="/register" to="/register">
                      Sign Up
                    </Link>
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    mat-raised-button
                    color="primary"
                    className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
                  >
                    <span className="mat-button-wrapper">LOG IN</span>
                    <div matripple className="mat-ripple mat-button-ripple" />
                    <div className="mat-button-focus-overlay" />
                  </button>
                </div>
                <div className="grecaptcha-terms margin--small margin--remove-bottom font-size--tiny color--gray-light">
                  This site is protected by reCAPTCHA and the Google
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  apply.
                </div>
              </form>
            )}
          </Formik>
        </div>
      </nav-profile>
    </div>
  );
};

export default LoginBox;
