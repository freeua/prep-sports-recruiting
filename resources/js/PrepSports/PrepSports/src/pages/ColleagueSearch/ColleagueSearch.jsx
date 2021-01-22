import React, { useState, useEffect } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import SmallHeader from "../../components/SmallHeader/SmallHeader";
import GamesSportCard from "../../components/GamesSportCard/GamesSportCard";
import { UserInfoContext } from "../../state/userInfo";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { getCoaches, sendMail } from "../../api/coaches.api";
import { AuthMeInfoContext } from "../../state/authMeInfo";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AccountDataContext } from "../../state/accountData";
import { SportsInfoContext } from "../../state/sportsInfo";
import { findSportNameBySportId } from "../../utils/helpers";
import Loader from "../../components/Loader/Loader";
import Modal from "@material-ui/core/Modal";
import { Formik } from "formik";
import { sendEmailValidationSchema } from "../../helpers/validationSchema";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  paper: {
    position: "absolute",
    width: 700,
    border: "2px solid #000",
    backgroundColor: "#fff",
    outline: "none",
    // boxShadow: theme.shadows[5],
    padding: "15px 10px"
  },
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
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const ColleagueSearch = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [filter, setFilter] = useState("");
  const [coaches, setCoaches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCoachId, setCurrentCoachId] = useState(null);
  const { userInfo } = useContext(UserInfoContext);
  const { authMeInfo } = useContext(AuthMeInfoContext);
  const { accountData } = useContext(AccountDataContext);
  const { sportsInfo } = useContext(SportsInfoContext);

  const [stateCategories, setStateCategories] = useState([]);

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (userInfo?.paid_plans == 0) {
      history.push("/plans");
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getCoaches(
          {
            id: authMeInfo.id,
            sport_id: "1",
            plan_id: "2" // remove it when BE ready
          },
          userInfo?.access_token
        );
        if (response.status === "Successeful") {
          setCoaches(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (currentTab === "" && accountData?.plans && sportsInfo) {
      setCurrentTab(
        findSportNameBySportId(
          accountData?.plans[0]?.pivot?.sport_id,
          sportsInfo[0]
        )
      );
    }
  }, []);

  const handleOpen = id => {
    setCurrentCoachId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = sportName => {
    setIsLoading(true);
    setCurrentTab(sportName);
    setIsLoading(false);
  };

  function createData(
    name,
    state,
    college,
    organization,
    conference,
    sport,
    email,
    id
  ) {
    return { name, state, college, organization, conference, sport, email, id };
  }

  const rows = [];

  // TODO: Change sport_id to sport_name
  if (coaches.length > 0) {
    coaches.forEach(coach => {
      rows.push(
        createData(
          coach.head_coach,
          coach.state,
          coach.college,
          coach.organization,
          coach.conference,
          findSportNameBySportId(coach.sport_id, sportsInfo[0]),
          coach.head_coach_email,
          coach.id
        )
      );
    });
  }

  const tempFilterFind = () => {
    const list = [];
    console.log("start");
    coaches.forEach(coach => {
      if (!list.includes(coach.state)) {
        list.push(coach.state);
      }
    });
    console.log("list", list);
  };

  return (
    <div className="layout__outlet">
      <router-outlet name="header" role="banner" />
      <SmallHeader />

      <router-outlet name="notice" />

      <div>
        <router-outlet role="main" />
        <div>
          <div className="content content--center">
            <section
              tabIndex={-1}
              className="main-content content__main content__main--left mobile-clearance"
            >
              <div onClick={tempFilterFind} className="content__headline">
                <h2>Сolleague Search</h2>
              </div>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div style={modalStyle} className={classes.paper}>
                  <Formik
                    initialValues={{
                      subject: "",
                      description: ""
                    }}
                    validationSchema={sendEmailValidationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);

                      console.log("values.subject", values.subject);
                      console.log("values.description", values.description);
                      console.log("currentCoachId", currentCoachId);

                      const response = await sendMail(
                        {
                          id: currentCoachId,
                          subject: values.subject,
                          description: values.description
                        },
                        userInfo.access_token
                      );
                      resetForm();
                      setSubmitting(false);
                      handleClose();
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
                                name="subject"
                                error={touched.subject && errors.subject}
                                required
                                id="outlined-required"
                                label="Subject"
                                value={values.subject}
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
                                name="description"
                                placeholder="Description"
                                multiline
                                rows={3}
                                rowsMax={4}
                                variant="outlined"
                                required
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                  touched.description && errors.description
                                }
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
                            <span className="mat-button-wrapper">Send</span>
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
              </Modal>
              <div className="sportile__wrapper margin--smaller">
                {accountData?.plans?.map(({ pivot }) => {
                  const sportFullName = findSportNameBySportId(
                    pivot.sport_id,
                    sportsInfo[0]
                  );

                  return (
                    <GamesSportCard
                      sportFullName={sportFullName}
                      isLink={false}
                      onClick={() => handleTabChange(sportFullName)}
                      isFromBackend
                      isCurrentFilter={currentTab === sportFullName}
                    />
                  );
                })}
              </div>
            </section>

            {/*  */}

            <TableContainer component={Paper}>
              {isLoading ? (
                <Loader />
              ) : (
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">State</TableCell>
                      <TableCell align="left">College</TableCell>
                      <TableCell align="left">Organization</TableCell>
                      <TableCell align="left">Conference</TableCell>
                      <TableCell align="left">Sport</TableCell>
                      <TableCell align="left">Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.state}</TableCell>
                        <TableCell align="left">{row.college}</TableCell>
                        <TableCell align="left">{row.organization}</TableCell>
                        <TableCell align="left">{row.conference}</TableCell>
                        <TableCell align="left">{row.sport}</TableCell>
                        <TableCell align="left">
                          {row.email.length > 0 && (
                            <i
                              onClick={() => handleOpen(row.id)}
                              style={{ cursor: "pointer" }}
                              aria-hidden="true"
                              className="icons"
                            >
                              mail_outline
                            </i>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColleagueSearch;
