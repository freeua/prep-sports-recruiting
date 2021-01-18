import React from "react";
import { TextField, makeStyles, MenuItem } from "@material-ui/core";
import { subjects } from "../../state/subjects";
import { Formik } from "formik";
import { contactValidationSchema } from "../../helpers/validationSchema";
import { Link } from "react-router-dom";

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
    },
    "& .MuiList-root .MuiListItem-root": {
      fontSize: "calc(var(--content) * 1.5rem);"
    }
  },
  option: {
    fontSize: 15,
    "& > span": {
      fontSize: 18
    }
  },
  menuItem: {
    fontSize: "calc(var(--content) * 1.5rem);"
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className="layout__outlet ng-tns-c274-0">
      <router-outlet
        name="header"
        role="banner"
        className="ng-tns-c274-0 ng-star-inserted"
      />
      <app-header className="ng-star-inserted">
        <div className="header accent">
          <figure />
        </div>
      </app-header>

      <router-outlet name="notice" className="ng-tns-c274-0" />

      <div className="ng-tns-c274-0 ng-trigger ng-trigger-chatLayoutAnimation">
        <router-outlet role="main" className="ng-tns-c274-0" />
        <app-contact _nghost-rae-c284 className="ng-star-inserted" style={{}}>
          <div
            _ngcontent-rae-c284
            className="content content--center ng-star-inserted"
            style={{}}
          >
            <section
              _ngcontent-rae-c284
              tabIndex={-1}
              className="main-content content__main content__main--small content__main--center"
            >
              <div _ngcontent-rae-c284 className="content__headline">
                <h2 _ngcontent-rae-c284>Contact Us</h2>
              </div>

              <div _ngcontent-rae-c284 className="notice ng-star-inserted">
                <div _ngcontent-rae-c284 className="notice__icon">
                  <i _ngcontent-rae-c284 className="icons">
                    info_outline
                  </i>
                </div>
                <div _ngcontent-rae-c284 className="notice__content">
                  <p _ngcontent-rae-c284>
                    {" "}
                    Your feedback is very important to us. We personally respond
                    to every message that we receive. Response emails will be
                    sent from info@prepsportsrecruiting.com, so please add that
                    to your email contact lists to prevent it from ending up in
                    your spam/junk mail folder.{" "}
                  </p>
                  <p _ngcontent-rae-c284>
                    <b _ngcontent-rae-c284 className="color--gray-dark">
                      IMPORTANT:
                    </b>{" "}
                    Please check the <Link to="/faq">FAQ</Link> before sending
                    your inquiry.{" "}
                  </p>
                </div>
              </div>
              <div
                _ngcontent-rae-c284
                className="mobile-clearance ng-star-inserted"
              >
                <div
                  _ngcontent-rae-c284
                  className="grid grid--no-spacing grid--align-top margin--small"
                >
                  <div
                    _ngcontent-rae-c284
                    className="cell cell--7-col cell--8-col-tablet"
                  >
                    <h3 _ngcontent-rae-c284>Contact Us</h3>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",

                        question: ""
                      }}
                      validationSchema={contactValidationSchema}
                      onSubmit={async (
                        values,
                        { setSubmitting, resetForm }
                      ) => {
                        // const resultValue = Object.assign(values, {
                        //   birthday: selectedDate,
                        //   country: inputCountry,
                        //   state: inputState,
                        // });
                        setSubmitting(true);
                        //...some side effects (server post requests)

                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          resetForm();
                          // setSelectedDate(new Date("2014-08-18T21:11:54"));
                          // setInputCountry("");
                          // setInputState("");
                          setSubmitting(false);
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
                        isSubmitting
                      }) => (
                        <form
                          onSubmit={handleSubmit}
                          noValidate
                          className={classes.root}
                          style={{ paddingTop: "30px" }}
                        >
                          <div
                            appearance="outline"
                            className="mat-form-field ng-tns-c73-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label mat-form-field-disabled ng-star-inserted"
                          >
                            <div className="mat-form-field-wrapper ng-tns-c73-8">
                              <div className="mat-form-field-flex ng-tns-c73-8">
                                <TextField
                                  name="name"
                                  error={touched.name && errors.name}
                                  required
                                  id="outlined-required"
                                  label="Name"
                                  value={values.name}
                                  variant="outlined"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            appearance="outline"
                            className="mat-form-field ng-tns-c73-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label mat-form-field-disabled ng-star-inserted"
                          >
                            <div className="mat-form-field-wrapper ng-tns-c73-8">
                              <div className="mat-form-field-flex ng-tns-c73-8">
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
                            appearance="outline"
                            className="mat-form-field ng-tns-c73-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label mat-form-field-disabled ng-star-inserted"
                          >
                            <div className="mat-form-field-wrapper ng-tns-c73-8">
                              <div className="mat-form-field-flex ng-tns-c73-8">
                                <TextField
                                  name="question"
                                  placeholder="Question/Comment"
                                  multiline
                                  rows={3}
                                  rowsMax={4}
                                  variant="outlined"
                                  required
                                  value={values.question}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.question && errors.question}
                                />
                              </div>
                            </div>
                          </div>

                          <div _ngcontent-rae-c284 className="button-group">
                            <button
                              disabled={isSubmitting}
                              mat-raised-button
                              color="primary"
                              type="submit"
                              className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
                            >
                              <span className="mat-button-wrapper">Next</span>
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
                  <div
                    _ngcontent-rae-c284
                    className="cell cell--5-col cell--8-col-tablet grid grid--no-spacing _left-spacing--desktop"
                  >
                    <div
                      _ngcontent-rae-c284
                      className="cell cell--12-col cell--8-col-tablet"
                    >
                      <h3 _ngcontent-rae-c284>Address</h3>
                      <p _ngcontent-rae-c284 className="margin--remove-bottom">
                        {" "}
                        For correspondence by mail, please contact us at{" "}
                      </p>
                    </div>
                    <div
                      _ngcontent-rae-c284
                      className="cell cell--6-col cell--4-col-tablet"
                    >
                      <p _ngcontent-rae-c284>Mailing Address Coming Soon</p>
                    </div>
                    <div _ngcontent-rae-c284 className="cell cell--12-col">
                      <h3
                        _ngcontent-rae-c284
                        className="margin margin--remove-bottom"
                      >
                        Customer Support
                      </h3>
                      <p _ngcontent-rae-c284>
                        Please email us first before calling. Only call if the
                        issue is urgent or you have not received a response in
                        12 hours(24 hours during a federal holiday).
                      </p>
                    </div>
                    <div
                      _ngcontent-rae-c284
                      className="cell cell--6-col cell--4-col-tablet"
                    >
                      <p _ngcontent-rae-c284>Phone Number:</p>
                      <h4 _ngcontent-rae-c284>262-751-1964</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </app-contact>
      </div>
    </div>
  );
};

export default Contact;
