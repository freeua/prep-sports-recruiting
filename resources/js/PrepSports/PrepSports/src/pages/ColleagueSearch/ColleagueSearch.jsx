import React, { useState, useEffect } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import SmallHeader from "../../components/SmallHeader/SmallHeader";
import Sports from "../../Sports";
import GamesSportCard from "../../components/GamesSportCard/GamesSportCard";
import { UserInfoContext } from "../../state/userInfo";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { getCoaches } from "../../api/coaches.api";
import { AuthMeInfoContext } from "../../state/authMeInfo";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const ColleagueSearch = () => {
  const [currentTab, setCurrentTab] = useState({});
  const [filter, setFilter] = useState("");
  const [coaches, setCoaches] = useState([]);
  const { userInfo } = useContext(UserInfoContext);
  const { authMeInfo } = useContext(AuthMeInfoContext);
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
        const response = await getCoaches(
          {
            id: authMeInfo.id,
            sport_id: "1",
            plan_id: "2"
          },
          userInfo.access_token
        );
        if (response.status === "Successeful") {
          setCoaches(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleTabChange = smallAbbr => {
    setCurrentTab(
      Sports.find(({ smallAbbreviation }) => smallAbbreviation === smallAbbr)
    );
  };

  function createData(name, state, college, organization, sport, email) {
    return { name, state, college, organization, sport, email };
  }

  const rows = [];

  // TODO: Change sport_id to sport_name
  if (coaches.length > 0) {
    coaches.map(coach => {
      rows.push(
        createData(
          coach.head_coach,
          coach.state,
          coach.college,
          coach.organization,
          coach.sport_id,
          coach.head_coach_email
        )
      );
    });
  }
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
              <div className="sportile__wrapper margin--smaller">
                {Sports.map(({ smallAbbreviation, abbreviation }) => (
                  <GamesSportCard
                    smallAbbreviation={smallAbbreviation}
                    abbreviation={abbreviation}
                    isLink={false}
                    currentAbbr={currentTab.abbreviation}
                    onClick={() => handleTabChange(smallAbbreviation)}
                  />
                ))}
              </div>
              {currentTab.abbreviation ? (
                <div className="margin--small margin--remove-bottom ">
                  <div
                    appearance="outline"
                    className="mat-form-field  mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label   mat-form-field-hide-placeholder"
                  >
                    <div className="mat-form-field-wrapper ">
                      <div className="mat-form-field-flex ">
                        <div className={`mat-form-field-infix ${classes.root}`}>
                          <TextField
                            required
                            id="outlined-required"
                            label="Search"
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div className="mat-form-field-subscript-wrapper ">
                        <div
                          className="mat-form-field-hint-wrapper"
                          style={{
                            opacity: 1,
                            transform: "translateY(0%)"
                          }}
                        >
                          <div className="mat-form-field-hint-spacer" />
                          <div
                            className="mat-hint mat-right ng-star-inserted"
                            id="mat-hint-1"
                          >
                            At least 3 characters required
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p class="margin--medium text--center ">
                  Please pick a sport to continue
                </p>
              )}
            </section>
          </div>
          {/*  */}
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">State</TableCell>
                  <TableCell align="left">College</TableCell>
                  <TableCell align="left">Organization</TableCell>
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
                    <TableCell align="left">{row.sport}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ColleagueSearch;
