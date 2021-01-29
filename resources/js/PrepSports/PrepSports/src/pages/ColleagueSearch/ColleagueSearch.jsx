import React, { useState, useEffect } from "react";
import {
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
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
import { findSportNameBySportId, findIdBySportName } from "../../utils/helpers";
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
  },
  formControl: {
    marginRight: "15px",
    minWidth: 120
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
  const [coaches, setCoaches] = useState([]);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCoachId, setCurrentCoachId] = useState(null);
  const { userInfo } = useContext(UserInfoContext);
  const { authMeInfo } = useContext(AuthMeInfoContext);
  const { accountData } = useContext(AccountDataContext);
  const { sportsInfo } = useContext(SportsInfoContext);

  // Filter Categories for Select inputs
  const [stateCategories, setStateCategories] = useState([]);
  const [organizationCategories, setOrganizationCategories] = useState([]);
  const [conferenceCategories, setConferenceCategories] = useState([]);
  const [collegeCategories, setCollegeCategories] = useState([]);

  // Current Filters
  const [currentStateFilter, setCurrentStateFilter] = useState(null);
  const [currentOrganizationFilter, setCurrentOrganizationFilter] = useState(
    null
  );
  const [currentConferenceFilter, setCurrentConferenceFilter] = useState(null);
  const [currentCollegeFilter, setCurrentCollegeFilter] = useState(null);

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
    if (stateCategories.length === 0) {
      setFilters();
    }
  }, [coaches]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (findIdBySportName(currentTab, sportsInfo[0])) {
          const response = await getCoaches(
            {
              sport_id: findIdBySportName(currentTab, sportsInfo[0])
            },
            userInfo?.access_token
          );
          if (response.status === "Successeful") {
            setCoaches(response.data);
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentTab]);

  useEffect(() => {
    let filtered = coaches;

    if (currentStateFilter) {
      filtered = filtered.filter(coach => coach.state === currentStateFilter);
    }

    if (currentOrganizationFilter) {
      filtered = filtered.filter(
        coach => coach.organization === currentOrganizationFilter
      );
    }

    if (currentConferenceFilter) {
      filtered = filtered.filter(
        coach => coach.conference === currentConferenceFilter
      );
    }

    if (currentCollegeFilter) {
      filtered = filtered.filter(
        coach => coach.college === currentCollegeFilter
      );
    }

    setFilteredCoaches(filtered);
  }, [
    currentStateFilter,
    currentOrganizationFilter,
    currentConferenceFilter,
    currentCollegeFilter,
    coaches
  ]);

  useEffect(() => {
    if (currentTab === "" && accountData?.sports && sportsInfo) {
      setCurrentTab(
        findSportNameBySportId(
          accountData?.sports[0]?.pivot?.sport_id,
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
    setCurrentTab(sportName);
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

  if (filteredCoaches.length > 0) {
    filteredCoaches.forEach(coach => {
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

  const setFilters = () => {
    const stateFilter = [];
    const conferenceFilter = [];
    const organizationFilter = [];
    const collegeFilter = [];

    coaches.forEach(coach => {
      if (!stateFilter.includes(coach.state)) {
        stateFilter.push(coach.state);
      }
      if (!conferenceFilter.includes(coach.conference)) {
        conferenceFilter.push(coach.conference);
      }
      if (!organizationFilter.includes(coach.organization)) {
        organizationFilter.push(coach.organization);
      }
      if (!collegeFilter.includes(coach.college)) {
        collegeFilter.push(coach.college);
      }
    });

    setStateCategories(stateFilter);
    setConferenceCategories(conferenceFilter);
    setOrganizationCategories(organizationFilter);
    setCollegeCategories(collegeFilter);
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
              <div className="content__headline">
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

                      const response = await sendMail(
                        {
                          id: currentCoachId,
                          subject: values.subject,
                          description: values.description
                        },
                        userInfo.access_token
                      );

                      if (response.status === "Successeful") {
                        alert("Email was sent successfully");
                      } else {
                        alert(response.status);
                      }
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
                {accountData?.sports?.map(({ pivot }) => {
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

              <div
                style={{ margin: "20px 0" }}
                className="sportile__wrapper margin--smaller"
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={currentStateFilter}
                    onChange={e => setCurrentStateFilter(e.target.value)}
                    label="State"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {stateCategories.map(state => (
                      <MenuItem value={state}>{state}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Organization
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={currentOrganizationFilter}
                    onChange={e => setCurrentOrganizationFilter(e.target.value)}
                    label="Organization"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {organizationCategories.map(organization => (
                      <MenuItem value={organization}>{organization}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Conference
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={currentConferenceFilter}
                    onChange={e => setCurrentConferenceFilter(e.target.value)}
                    label="Conference"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {conferenceCategories.map(conference => (
                      <MenuItem value={conference}>{conference}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    College
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={currentCollegeFilter}
                    onChange={e => setCurrentCollegeFilter(e.target.value)}
                    label="College"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {collegeCategories.map(college => (
                      <MenuItem value={college}>{college}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
