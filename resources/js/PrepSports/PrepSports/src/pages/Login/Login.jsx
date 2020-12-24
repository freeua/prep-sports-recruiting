import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
// import { login } from '../../api/auth.api';
const Login = () => {
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
    option: {
      fontSize: 15,
      '& > span': {
        fontSize: 18,
      },
    },
  }));
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
                {/* ///////////////// */}
                <div className="content__headline">
                  <h2>Secure Login</h2>
                  <i className="hide--phone icons icons--large icons--success--bright">
                    lock
                  </i>
                </div>
                <hr />
                <div className="margin--small">
                  <alert icon="lightbulb_outline" type="accent">
                    <div className="alert alert--accent">
                      <div className="alert__icon ng-star-inserted">
                        <i className="icons icons--medium ng-star-inserted">
                          lightbulb_outline
                        </i>
                      </div>
                      <article>
                        <div className="alert__spacing ng-star-inserted">
                          <div alert-content>
                            <p className="ng-star-inserted">
                              Not already a member?
                            </p>
                            <div className="button-group">
                              <Link
                                mat-raised-button
                                className="mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted"
                                tabIndex={0}
                                aria-disabled="false"
                                to="/register"
                              >
                                <span className="mat-button-wrapper">
                                  {' '}
                                  Sign Up{' '}
                                </span>
                                <div
                                  matripple
                                  className="mat-ripple mat-button-ripple"
                                />
                                <div className="mat-button-focus-overlay" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </alert>
                </div>
                {/* /////// */}

                <div
                  _ngcontent-ucn-c280
                  className="form-group mobile-clearance "
                >
                  <Formik
                    initialValues={{
                      username: '',
                      password: '',
                    }}
                    // validationSchema={signUpValidationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);

                      // const response = await login(values);

                      alert(JSON.stringify(values, null, 2));
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
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit} className={classes.root}>
                        <p>
                          Please enter your username and password to sign in to
                          your Fantrax account.
                        </p>
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
                                name="username"
                                required
                                id="outlined-required"
                                label="Email or User ID"
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
                            <div
                              style={{ padding: 0 }}
                              className="mat-form-field-flex ng-tns-c73-4"
                            >
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
                                type="password"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          _ngcontent-ucn-c280
                          className="margin--smaller button-group button-group--space-between"
                        >
                          {/* <p class="margin--smaller">
                            <Link to="/forgot-password">Forgot Password</Link>
                          </p> */}
                          <i _ngcontent-ucn-c280 />
                          <button
                            disabled={isSubmitting}
                            mat-raised-button
                            color="primary"
                            type="submit"
                            className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
                          >
                            <span className="mat-button-wrapper">Login</span>
                            <div
                              matripple
                              className="mat-ripple mat-button-ripple"
                            />
                            <div className="mat-button-focus-overlay" />
                          </button>
                        </div>
                        <div class="grecaptcha-terms margin--medium font-size--tiny color--gray-light">
                          {' '}
                          This site is protected by reCAPTCHA and the Google{' '}
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Terms of Service
                          </a>{' '}
                          apply.{' '}
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

// <div className="content content--center mobile-clearance">
//   <section
//     tabIndex={-1}
//     className="main-content content__main content__main--center content__main--smallest"
//   >
// <div className="content__headline">
//   <h2>Secure Login</h2>
//   <i className="hide--phone icons icons--large icons--success--bright">
//     lock
//   </i>
// </div>
// <hr />
// <div className="margin--small">
//   <alert icon="lightbulb_outline" type="accent">
//     <div className="alert alert--accent">
//       <div className="alert__icon ng-star-inserted">
//         <i className="icons icons--medium ng-star-inserted">
//           lightbulb_outline
//         </i>
//         {/**/}
//         {/**/}
//       </div>
//       {/**/}
//       <article>
//         <h6 className="alert__spacing" />
//         <div className="alert__spacing ng-star-inserted">
//           <div alert-content>
//             <p className="ng-star-inserted">Not already a member?</p>
//             {/**/}
//             {/**/}
//             {/**/}
//             <div className="button-group">
//               <a
//                 mat-raised-button
//                 routerlink="/register"
//                 className="mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted"
//                 tabIndex={0}
//                 aria-disabled="false"
//                 href="/register"
//               >
//                 <span className="mat-button-wrapper"> Sign Up </span>
//                 <div
//                   matripple
//                   className="mat-ripple mat-button-ripple"
//                 />
//                 <div className="mat-button-focus-overlay" />
//               </a>
//               {/**/}
//               {/**/}
//             </div>
//           </div>
//         </div>
//         {/**/}
//         <a className="alert__click" />
//       </article>
//       {/**/}
//     </div>
//   </alert>
// </div>
//     <form
//       noValidate
//       className="ng-star-inserted ng-dirty ng-touched ng-valid"
//       style={{}}
//     >
//       <p>
//         Please enter your username and password to sign in to your Fantrax
//         account.
//       </p>
//       {/**/}
//       <mat-form-field
//         appearance="outline"
//         className="mat-form-field ng-tns-c73-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-should-float ng-dirty ng-valid ng-touched mat-form-field-autofilled"
//       >
//         <div className="mat-form-field-wrapper ng-tns-c73-8">
//           <div className="mat-form-field-flex ng-tns-c73-8">
//             <div className="mat-form-field-outline ng-tns-c73-8 ng-star-inserted">
//               <div
//                 className="mat-form-field-outline-start ng-tns-c73-8"
//                 style={{ width: '6.25px' }}
//               />
//               <div
//                 className="mat-form-field-outline-gap ng-tns-c73-8"
//                 style={{ width: '89.5px' }}
//               />
//               <div className="mat-form-field-outline-end ng-tns-c73-8" />
//             </div>
//             <div className="mat-form-field-outline mat-form-field-outline-thick ng-tns-c73-8 ng-star-inserted">
//               <div
//                 className="mat-form-field-outline-start ng-tns-c73-8"
//                 style={{ width: '6.25px' }}
//               />
//               <div
//                 className="mat-form-field-outline-gap ng-tns-c73-8"
//                 style={{ width: '89.5px' }}
//               />
//               <div className="mat-form-field-outline-end ng-tns-c73-8" />
//             </div>
//             {/**/}
//             {/**/}
//             {/**/}
//             <div className="mat-form-field-infix ng-tns-c73-8">
//               <input
//                 matinput
//                 autoCorrect="off"
//                 spellCheck="false"
//                 autoCapitalize="off"
//                 formcontrolname="email"
//                 className="mat-input-element mat-form-field-autofill-control ng-tns-c73-8 cdk-text-field-autofill-monitored ng-dirty ng-valid ng-touched cdk-text-field-autofilled"
//                 id="mat-input-0"
//                 aria-describedby="mat-hint-0"
//                 aria-invalid="false"
//                 aria-required="false"
//               />
//               <span className="mat-form-field-label-wrapper ng-tns-c73-8">
//                 <label
//                   className="mat-form-field-label ng-tns-c73-8 ng-star-inserted"
//                   id="mat-form-field-label-1"
//                   htmlFor="mat-input-0"
//                   aria-owns="mat-input-0"
//                 >
//                   {/**/}
//                   <mat-label className="ng-tns-c73-8 ng-star-inserted">
//                     Email or User ID
//                   </mat-label>
//                   {/**/}
//                   {/**/}
//                 </label>
//                 {/**/}
//               </span>
//             </div>
//             {/**/}
//           </div>
//           {/**/}
//           <div className="mat-form-field-subscript-wrapper ng-tns-c73-8">
//             {/**/}
//             <div
//               className="mat-form-field-hint-wrapper ng-tns-c73-8 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
//               style={{ opacity: 1, transform: 'translateY(0%)' }}
//             >
//               {/**/}
//               <div className="mat-form-field-hint-spacer ng-tns-c73-8" />
//               <mat-hint
//                 className="mat-hint mat-right ng-tns-c73-8"
//                 id="mat-hint-0"
//               />
//             </div>
//             {/**/}
//           </div>
//         </div>
//       </mat-form-field>
//       <mat-form-field
//         appearance="outline"
//         className="mat-form-field ng-tns-c73-9 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label mat-form-field-should-float ng-dirty ng-valid ng-touched mat-form-field-autofilled"
//       >
//         <div className="mat-form-field-wrapper ng-tns-c73-9">
//           <div className="mat-form-field-flex ng-tns-c73-9">
//             <div className="mat-form-field-outline ng-tns-c73-9 ng-star-inserted">
//               <div
//                 className="mat-form-field-outline-start ng-tns-c73-9"
//                 style={{ width: '6.25px' }}
//               />
//               <div
//                 className="mat-form-field-outline-gap ng-tns-c73-9"
//                 style={{ width: '59.5px' }}
//               />
//               <div className="mat-form-field-outline-end ng-tns-c73-9" />
//             </div>
//             <div className="mat-form-field-outline mat-form-field-outline-thick ng-tns-c73-9 ng-star-inserted">
//               <div
//                 className="mat-form-field-outline-start ng-tns-c73-9"
//                 style={{ width: '6.25px' }}
//               />
//               <div
//                 className="mat-form-field-outline-gap ng-tns-c73-9"
//                 style={{ width: '59.5px' }}
//               />
//               <div className="mat-form-field-outline-end ng-tns-c73-9" />
//             </div>
//             {/**/}
//             {/**/}
//             {/**/}
//             <div className="mat-form-field-infix ng-tns-c73-9">
//               <input
//                 matinput
//                 type="Password"
//                 formcontrolname="password"
//                 autoComplete="current-password"
//                 className="mat-input-element mat-form-field-autofill-control ng-tns-c73-9 cdk-text-field-autofill-monitored ng-dirty ng-valid ng-touched cdk-text-field-autofilled"
//                 id="mat-input-1"
//                 aria-describedby="mat-hint-1"
//                 aria-invalid="false"
//                 aria-required="false"
//               />
//               <span className="mat-form-field-label-wrapper ng-tns-c73-9">
//                 <label
//                   className="mat-form-field-label ng-tns-c73-9 ng-star-inserted"
//                   id="mat-form-field-label-3"
//                   htmlFor="mat-input-1"
//                   aria-owns="mat-input-1"
//                 >
//                   {/**/}
//                   <mat-label className="ng-tns-c73-9 ng-star-inserted">
//                     Password
//                   </mat-label>
//                   {/**/}
//                   {/**/}
//                 </label>
//                 {/**/}
//               </span>
//             </div>
//             {/**/}
//           </div>
//           {/**/}
//           <div className="mat-form-field-subscript-wrapper ng-tns-c73-9">
//             {/**/}
//             <div
//               className="mat-form-field-hint-wrapper ng-tns-c73-9 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
//               style={{ opacity: 1, transform: 'translateY(0%)' }}
//             >
//               {/**/}
//               <div className="mat-form-field-hint-spacer ng-tns-c73-9" />
//               <mat-hint
//                 className="mat-hint mat-right ng-tns-c73-9"
//                 id="mat-hint-1"
//               />
//             </div>
//             {/**/}
//           </div>
//         </div>
//       </mat-form-field>
//       <div className="grid grid--center" />
//       <div className="button-group button-group--space-between">
//         <p className="margin--smaller">
//           <a routerlink="/forgot-password" href="/forgot-password">
//             Forgot Password
//           </a>
//         </p>
//         <button
//           mat-raised-button
//           color="primary"
//           type="submit"
//           className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
//         >
//           <span className="mat-button-wrapper">Login</span>
//           <div matripple className="mat-ripple mat-button-ripple" />
//           <div className="mat-button-focus-overlay" />
//         </button>
//       </div>
//       <div className="grecaptcha-terms margin--medium font-size--tiny color--gray-light">
//         {' '}
//         This site is protected by reCAPTCHA and the Google{' '}
//         <a href="https://policies.google.com/privacy" target="_blank">
//           Privacy Policy
//         </a>{' '}
//         and{' '}
//         <a href="https://policies.google.com/terms" target="_blank">
//           Terms of Service
//         </a>{' '}
//         apply.{' '}
//       </div>
//     </form>
//     {/**/}
//   </section>
// </div>

export default Login;
