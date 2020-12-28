import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { countries } from "../../state/countries";
import { americanStates } from "../../state/americanStates";
import { Formik } from "formik";
import { signUpValidationSchema } from "../../helpers/validationSchema";
import { signUp } from "../../api/auth.api";
import { useHistory } from "react-router-dom";

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

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

const SignUp = () => {
  const history = useHistory();
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1990-08-18T21:11:54")
  );
  const [inputCountry, setInputCountry] = React.useState("");
  const [inputState, setInputState] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setAvatar(file);
  };

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
          <router-outlet role="main" className="ng-tns-c273-0" />
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
                <div _ngcontent-ucn-c280 className="content__headline">
                  <h2 _ngcontent-ucn-c280>Sign up</h2>
                </div>

                <div
                  _ngcontent-ucn-c280
                  className="form-group mobile-clearance margin--small"
                >
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      password: "",
                      checked: false
                    }}
                    validationSchema={signUpValidationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      const resultValue = Object.assign(values, {
                        birthday: selectedDate,
                        country: inputCountry,
                        state: inputState,
                        avatar: avatar
                      });

                      const data = new FormData();
                      data.append("avatar", avatar);
                      data.append("birthday", selectedDate);
                      data.append("country", inputCountry);
                      data.append("username", values.username);
                      data.append("email", values.email);
                      data.append("password", values.password);

                      console.log("email:", data.get("email"));

                      setSubmitting(true);
                      const response = await signUp(data);

                      if (response.success === true) {
                        alert("User Successfuly Created");
                        history.push("/");
                      }

                      resetForm();
                      setSelectedDate(new Date("2014-08-18T21:11:54"));
                      setInputCountry("");
                      setInputState("");
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
                      <form
                        enctype="multipart/form-data"
                        onSubmit={handleSubmit}
                        className={classes.root}
                      >
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-3">
                            <div className="mat-form-field-flex ng-tns-c73-3">
                              <TextField
                                name="username"
                                error={touched.username && errors.username}
                                required
                                id="outlined-required"
                                label="Username"
                                value={values.username}
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-4">
                            <div className="mat-form-field-flex ng-tns-c73-4">
                              <TextField
                                name="email"
                                error={touched.email && errors.email}
                                required
                                id="outlined-required"
                                label="Email"
                                value={values.email}
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-4">
                            <div className="mat-form-field-flex ng-tns-c73-4">
                              <TextField
                                name="password"
                                error={touched.password && errors.password}
                                required
                                id="outlined-required"
                                label="Password"
                                value={values.password}
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-4">
                            <div className="mat-form-field-flex ng-tns-c73-4">
                              <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date of Birth"
                                name="birthday"
                                value={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                KeyboardButtonProps={{
                                  "aria-label": "change date"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          appearance="outline"
                          className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                        >
                          <div className="mat-form-field-wrapper ng-tns-c73-4">
                            <div className="mat-form-field-flex ng-tns-c73-4">
                              <Autocomplete
                                id="country-select-demo"
                                options={countries}
                                classes={{
                                  option: classes.option
                                }}
                                fullWidth={true}
                                autoHighlight
                                inputValue={inputCountry}
                                onInputChange={(event, newInputValue) => {
                                  setInputCountry(newInputValue);
                                }}
                                getOptionLabel={option => option.label}
                                renderOption={option => (
                                  <React.Fragment>
                                    <span>{countryToFlag(option.code)}</span>
                                    &nbsp;
                                    {option.label} ({option.code}) +{" "}
                                    {option.phone}
                                  </React.Fragment>
                                )}
                                renderInput={params => (
                                  <TextField
                                    {...params}
                                    fullWidth={true}
                                    label="Choose a country"
                                    variant="outlined"
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: "new-password"
                                    }}
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        {inputCountry === "United States" ? (
                          <div
                            _ngcontent-ucn-c280
                            appearance="outline"
                            className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
                          >
                            <div className="mat-form-field-wrapper ng-tns-c73-4">
                              <div className="mat-form-field-flex ng-tns-c73-4">
                                <Autocomplete
                                  id="state-select-demo"
                                  options={americanStates}
                                  classes={{
                                    option: classes.option
                                  }}
                                  fullWidth={true}
                                  autoHighlight
                                  inputValue={inputState}
                                  onInputChange={(event, newInputValue) => {
                                    setInputState(newInputValue);
                                  }}
                                  getOptionLabel={option => option.state}
                                  renderOption={option => (
                                    <React.Fragment>
                                      <span>{option.state}</span>
                                    </React.Fragment>
                                  )}
                                  renderInput={params => (
                                    <TextField
                                      {...params}
                                      fullWidth={true}
                                      label="Choose a state"
                                      variant="outlined"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password"
                                      }}
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}

                        <div style={{ padding: "0 0.75em 0 0.75em" }}>
                          <h5>Avatar:</h5>

                          <input
                            multiple={true}
                            name="avatar"
                            onChange={handleAvatarChange}
                            type="file"
                          />
                        </div>

                        <div _ngcontent-ucn-c280 className="margin--smaller">
                          <div
                            _ngcontent-ucn-c280
                            formcontrolname="agree"
                            className="mat-checkbox mat-accent ng-untouched ng-pristine ng-invalid"
                            id="mat-checkbox-1"
                          >
                            <label
                              className="mat-checkbox-layout"
                              htmlFor="mat-checkbox-1-input"
                            >
                              <Checkbox
                                name="checked"
                                color="primary"
                                size="medium"
                                checked={values.check}
                                onChange={handleChange}
                                inputProps={{
                                  "aria-label": "secondary checkbox"
                                }}
                              />

                              <span className="mat-checkbox-label">
                                <span
                                  style={{
                                    display: "none"
                                  }}
                                >
                                  &nbsp;
                                </span>
                                <p
                                  _ngcontent-ucn-c280
                                  className="margin--remove margin--left-smaller"
                                >
                                  {" "}
                                  I have read the{" "}
                                  <a
                                    _ngcontent-ucn-c280
                                    routerlink="/terms-of-service"
                                    href="/terms-of-service"
                                  >
                                    Terms of Service
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    _ngcontent-ucn-c280
                                    routerlink="/privacy-policy"
                                    href="/privacy-policy"
                                  >
                                    {" "}
                                    Privacy Policy
                                  </a>{" "}
                                  and agree to their terms and conditions{" "}
                                  <span
                                    _ngcontent-ucn-c280
                                    className="color--error-hot font-weight--400 font-size--tiny"
                                  />
                                </p>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div
                          _ngcontent-ucn-c280
                          className="margin--smaller button-group button-group--space-between"
                        >
                          <i _ngcontent-ucn-c280 />
                          <button
                            disabled={
                              !values.checked ||
                              isSubmitting ||
                              !inputCountry.trim().length
                            }
                            _ngcontent-ucn-c280
                            mat-raised-button
                            color="primary"
                            type="submit"
                            className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
                          >
                            <span className="mat-button-wrapper">REGISTER</span>
                            <div
                              matripple
                              className="mat-ripple mat-button-ripple"
                            />
                            <div className="mat-button-focus-overlay" />
                          </button>
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

export default SignUp;

// import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Checkbox from '@material-ui/core/Checkbox';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { countries } from '../../state/countries';
// import { americanStates } from '../../state/americanStates';
// import { Formik } from 'formik';
// import { signUpValidationSchema } from '../../helpers/validationSchema';
// // import { signUp } from '../../api/auth.api';

// function countryToFlag(isoCode) {
//   return typeof String.fromCodePoint !== 'undefined'
//     ? isoCode
//         .toUpperCase()
//         .replace(/./g, char =>
//           String.fromCodePoint(char.charCodeAt(0) + 127397)
//         )
//     : isoCode;
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       width: '100%',
//     },
//     '& .MuiInputBase-input': {
//       fontSize: '15px',
//     },
//     '& .MuiFormLabel-root': {
//       fontSize: '1.3rem',
//     },
//     '& .MuiFormLabel-root ': {
//       backgroundColor: '#fff',
//     },
//   },
//   option: {
//     fontSize: 15,
//     '& > span': {
//       fontSize: 18,
//     },
//   },
// }));

// const SignUp = () => {
//   const classes = useStyles();
//   const [selectedDate, setSelectedDate] = React.useState(
//     new Date('1990-08-18T21:11:54')
//   );
//   const [inputCountry, setInputCountry] = React.useState('');
//   const [inputState, setInputState] = useState('');

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <div className="layout__outlet ng-tns-c273-0">
//         <router-outlet
//           name="header"
//           role="banner"
//           className="ng-tns-c273-0 ng-star-inserted"
//         />
//         <app-header className="ng-star-inserted">
//           <div className="header accent">
//             <figure />
//           </div>
//         </app-header>

//         <router-outlet name="notice" className="ng-tns-c273-0" />

//         <div className="ng-tns-c273-0 ng-trigger ng-trigger-chatLayoutAnimation">
//           <router-outlet role="main" className="ng-tns-c273-0" />
//           <app-register
//             _nghost-ucn-c280
//             className="ng-star-inserted"
//             style={{}}
//           >
//             <div
//               _ngcontent-ucn-c280
//               className="content content--center ng-star-inserted"
//               style={{}}
//             >
//               <section
//                 _ngcontent-ucn-c280
//                 tabIndex={-1}
//                 className="main-content content__main content__main--center content__main--smallest"
//               >
//                 <div _ngcontent-ucn-c280 className="content__headline">
//                   <h2 _ngcontent-ucn-c280>Sign up</h2>
//                 </div>

//                 <div
//                   _ngcontent-ucn-c280
//                   className="form-group mobile-clearance margin--small"
//                 >
//                   <Formik
//                     initialValues={{
//                       username: '',
//                       email: '',
//                       password: '',
//                       checked: false,
//                     }}
//                     validationSchema={signUpValidationSchema}
//                     onSubmit={(values, { setSubmitting, resetForm }) => {
//                       const resultValue = Object.assign(values, {
//                         birthday: selectedDate,
//                         country: inputCountry,
//                         state: inputState,
//                       });
//                       setSubmitting(true);

//                       // const response = await signUp(resultValue);

//                       alert(JSON.stringify(resultValue, null, 2));
//                       resetForm();
//                       setSelectedDate(new Date('2014-08-18T21:11:54'));
//                       setInputCountry('');
//                       setInputState('');
//                       setSubmitting(false);
//                     }}
//                   >
//                     {({
//                       values,
//                       errors,
//                       touched,
//                       handleChange,
//                       handleBlur,
//                       handleSubmit,
//                       isSubmitting,
//                     }) => (
//                       <form onSubmit={handleSubmit} className={classes.root}>
//                         <div
//                           _ngcontent-ucn-c280
//                           appearance="outline"
//                           className="mat-form-field ng-tns-c73-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
//                         >
//                           <div className="mat-form-field-wrapper ng-tns-c73-3">
//                             <div className="mat-form-field-flex ng-tns-c73-3">
//                               <TextField
//                                 name="username"
//                                 error={touched.username && errors.username}
//                                 required
//                                 id="outlined-required"
//                                 label="Username"
//                                 value={values.username}
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           _ngcontent-ucn-c280
//                           appearance="outline"
//                           className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
//                         >
//                           <div className="mat-form-field-wrapper ng-tns-c73-4">
//                             <div className="mat-form-field-flex ng-tns-c73-4">
//                               <TextField
//                                 name="email"
//                                 error={touched.email && errors.email}
//                                 required
//                                 id="outlined-required"
//                                 label="Email"
//                                 value={values.email}
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           _ngcontent-ucn-c280
//                           appearance="outline"
//                           className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
//                         >
//                           <div className="mat-form-field-wrapper ng-tns-c73-4">
//                             <div className="mat-form-field-flex ng-tns-c73-4">
//                               <TextField
//                                 name="password"
//                                 error={touched.password && errors.password}
//                                 required
//                                 id="outlined-required"
//                                 label="Password"
//                                 value={values.password}
//                                 variant="outlined"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           _ngcontent-ucn-c280
//                           appearance="outline"
//                           className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
//                         >
//                           <div className="mat-form-field-wrapper ng-tns-c73-4">
//                             <div className="mat-form-field-flex ng-tns-c73-4">
//                               <KeyboardDatePicker
//                                 disableToolbar
//                                 variant="inline"
//                                 format="MM/dd/yyyy"
//                                 margin="normal"
//                                 id="date-picker-inline"
//                                 label="Date of Birth"
//                                 value={selectedDate}
//                                 onChange={date => setSelectedDate(date)}
//                                 KeyboardButtonProps={{
//                                   'aria-label': 'change date',
//                                 }}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           _ngcontent-ucn-c280
//                           appearance="outline"
//                           className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
//                         >
//                           <div className="mat-form-field-wrapper ng-tns-c73-4">
//                             <div className="mat-form-field-flex ng-tns-c73-4">
//                               <Autocomplete
//                                 id="country-select-demo"
//                                 options={countries}
//                                 classes={{
//                                   option: classes.option,
//                                 }}
//                                 fullWidth={true}
//                                 autoHighlight
//                                 inputValue={inputCountry}
//                                 onInputChange={(event, newInputValue) => {
//                                   setInputCountry(newInputValue);
//                                 }}
//                                 getOptionLabel={option => option.label}
//                                 renderOption={option => (
//                                   <React.Fragment>
//                                     <span>{countryToFlag(option.code)}</span>
//                                     &nbsp;
//                                     {option.label} ({option.code}) +{' '}
//                                     {option.phone}
//                                   </React.Fragment>
//                                 )}
//                                 renderInput={params => (
//                                   <TextField
//                                     {...params}
//                                     fullWidth={true}
//                                     label="Choose a country"
//                                     variant="outlined"
//                                     inputProps={{
//                                       ...params.inputProps,
//                                       autoComplete: 'new-password', // disable autocomplete and autofill
//                                     }}
//                                   />
//                                 )}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         {inputCountry === 'United States' ? (
//                           <div
//                             _ngcontent-ucn-c280
//                             appearance="outline"
//                             className="mat-form-field ng-tns-c73-4 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid"
//                           >
//                             <div className="mat-form-field-wrapper ng-tns-c73-4">
//                               <div className="mat-form-field-flex ng-tns-c73-4">
//                                 <Autocomplete
//                                   id="state-select-demo"
//                                   options={americanStates}
//                                   classes={{
//                                     option: classes.option,
//                                   }}
//                                   fullWidth={true}
//                                   autoHighlight
//                                   inputValue={inputState}
//                                   onInputChange={(event, newInputValue) => {
//                                     setInputState(newInputValue);
//                                   }}
//                                   getOptionLabel={option => option.state}
//                                   renderOption={option => (
//                                     <React.Fragment>
//                                       <span>{option.state}</span>
//                                     </React.Fragment>
//                                   )}
//                                   renderInput={params => (
//                                     <TextField
//                                       {...params}
//                                       fullWidth={true}
//                                       label="Choose a state"
//                                       variant="outlined"
//                                       inputProps={{
//                                         ...params.inputProps,
//                                         autoComplete: 'new-password', // disable autocomplete and autofill
//                                       }}
//                                     />
//                                   )}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         ) : null}

//                         <div _ngcontent-ucn-c280 className="margin--smaller">
//                           <div
//                             _ngcontent-ucn-c280
//                             formcontrolname="agree"
//                             className="mat-checkbox mat-accent ng-untouched ng-pristine ng-invalid"
//                             id="mat-checkbox-1"
//                           >
//                             <label
//                               className="mat-checkbox-layout"
//                               htmlFor="mat-checkbox-1-input"
//                             >
//                               <Checkbox
//                                 name="checked"
//                                 color="primary"
//                                 size="medium"
//                                 checked={values.check}
//                                 onChange={handleChange}
//                                 inputProps={{
//                                   'aria-label': 'secondary checkbox',
//                                 }}
//                               />

//                               <span className="mat-checkbox-label">
//                                 <span style={{ display: 'none' }}>&nbsp;</span>
//                                 <p
//                                   _ngcontent-ucn-c280
//                                   className="margin--remove margin--left-smaller"
//                                 >
//                                   {' '}
//                                   I have read the{' '}
//                                   <a
//                                     _ngcontent-ucn-c280
//                                     routerlink="/terms-of-service"
//                                     href="/terms-of-service"
//                                   >
//                                     Terms of Service
//                                   </a>{' '}
//                                   and{' '}
//                                   <a
//                                     _ngcontent-ucn-c280
//                                     routerlink="/privacy-policy"
//                                     href="/privacy-policy"
//                                   >
//                                     {' '}
//                                     Privacy Policy
//                                   </a>{' '}
//                                   and agree to their terms and conditions{' '}
//                                   <span
//                                     _ngcontent-ucn-c280
//                                     className="color--error-hot font-weight--400 font-size--tiny"
//                                   />
//                                 </p>
//                               </span>
//                             </label>
//                           </div>
//                         </div>
//                         <div
//                           _ngcontent-ucn-c280
//                           className="margin--smaller button-group button-group--space-between"
//                         >
//                           {/* <a
//                       _ngcontent-ucn-c280
//                       role="link"
//                       className="ng-star-inserted"
//                     >
//                       Enter Promo Code
//                     </a> */}

//                           <i _ngcontent-ucn-c280 />
//                           <button
//                             disabled={
//                               !values.checked ||
//                               isSubmitting ||
//                               !inputCountry.trim().length
//                             }
//                             _ngcontent-ucn-c280
//                             mat-raised-button
//                             color="primary"
//                             type="submit"
//                             className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
//                           >
//                             <span className="mat-button-wrapper">REGISTER</span>
//                             <div
//                               matripple
//                               className="mat-ripple mat-button-ripple"
//                             />
//                             <div className="mat-button-focus-overlay" />
//                           </button>
//                         </div>
//                       </form>
//                     )}
//                   </Formik>
//                 </div>
//               </section>
//             </div>
//           </app-register>
//         </div>
//       </div>
//     </MuiPickersUtilsProvider>
//   );
// };

// export default SignUp;
