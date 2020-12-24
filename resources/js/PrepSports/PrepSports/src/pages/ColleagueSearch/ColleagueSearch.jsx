import React, { useState, useEffect } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import SmallHeader from "../../components/SmallHeader/SmallHeader";
import Sports from "../../Sports";
import GamesSportCard from "../../components/GamesSportCard/GamesSportCard";
import { UserInfoContext } from "../../state/userInfo";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { getCoaches } from "../../api/coaches.api";

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
const ColleagueSearch = () => {
  const [currentTab, setCurrentTab] = useState({});
  const [filter, setFilter] = useState("");
  const classes = useStyles();
  const { userInfo } = useContext(UserInfoContext);
  const history = useHistory();

  useEffect(() => {
    console.log(userInfo);

    if (userInfo?.paid_plans == 0) {
      history.push("/plans");
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCoaches();
        console.log(response);
        // if (response.message === "success") {
        //     setMediaReleases(response.data["media-release"].data);
        // }
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
                <h3>Find players in all your leagues</h3>
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
                  <mat-form-field
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
                          <mat-hint
                            className="mat-hint mat-right ng-star-inserted"
                            id="mat-hint-1"
                          >
                            At least 3 characters required
                          </mat-hint>
                        </div>
                      </div>
                    </div>
                  </mat-form-field>
                </div>
              ) : (
                <p class="margin--medium text--center ">
                  Please pick a sport to continue
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColleagueSearch;
