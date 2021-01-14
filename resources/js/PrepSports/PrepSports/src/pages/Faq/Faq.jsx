import React, { useState } from "react";
import General from "./Tabs/General";
// import Roster from "./Tabs/Roster";
// import Scoring from "./Tabs/Scoring";
// import Transactions from "./Tabs/Transactions";
// import Salaries from "./Tabs/Salaries";
// import Fees from "./Tabs/Fees";
// import Other from "./Tabs/Other";
import { TextField, makeStyles } from "@material-ui/core";
import SmallHeader from "../../components/SmallHeader/SmallHeader";

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
const Faq = () => {
  const [currentTab, setCurrentTab] = useState("general");
  const [filter, setFilter] = useState("");
  const classes = useStyles();

  const pickTab = () => {
    switch (currentTab) {
      case "general":
        return <General filter={filter} />;
      // case 'roster':
      //   return <Roster filter={filter} />;
      // case 'scoring':
      //   return <Scoring filter={filter} />;
      // case 'transactions':
      //   return <Transactions filter={filter} />;
      // case 'salaries':
      //   return <Salaries filter={filter} />;
      // case 'fees':
      //   return <Fees filter={filter} />;
      // case 'other':
      //   return <Other filter={filter} />;
      default:
        return <General filter={filter} />;
    }
  };

  return (
    <div className="layout__outlet ">
      <router-outlet name="header" role="banner" />
      <SmallHeader />

      <router-outlet name="notice" />

      <div className=" ng-trigger ng-trigger-chatLayoutAnimation">
        <router-outlet role="main" />
        <app-faq>
          <div className="content content--center">
            <section
              tabIndex={-1}
              className="main-content content__main content__main--left"
            >
              <div className="content__headline">
                <h2>FAQ &amp; Help</h2>
              </div>
              <div className="mobile-clearance">
                <div className="form-group">
                  <mat-form-field
                    appearance="outline"
                    className="mat-form-field  mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-has-label ng-pristine ng-valid ng-touched mat-form-field-hide-placeholder"
                  >
                    <div className="mat-form-field-wrapper ">
                      <div className="mat-form-field-flex ">
                        <div
                          className={`mat-form-field-infix  ${classes.root}`}
                        >
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

                      {/* <div className="mat-form-field-subscript-wrapper ">
                        <div
                          className="mat-form-field-hint-wrapper  ng-trigger ng-trigger-transitionMessages "
                          style={{ opacity: 1, transform: "translateY(0%)" }}
                        >
                          <div className="mat-form-field-hint-spacer " />
                        </div>
                      </div> */}
                    </div>
                  </mat-form-field>
                </div>
                {/* <div className="margin--small margin--remove-top">
                  <div className="cat-tiles">
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("general")}
                      className={currentTab === "general" && "current"}
                    >
                      {" "}
                      General <i className="icons">help</i>
                    </a>
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("roster")}
                      className={currentTab === "roster" && "current"}
                    >
                      {" "}
                      Roster <i className="icons">group</i>
                    </a>
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("scoring")}
                      className={currentTab === "scoring" && "current"}
                    >
                      {" "}
                      Scoring <i className="icons">stars</i>
                    </a>
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("transactions")}
                      className={currentTab === "transactions" && "current"}
                    >
                      {" "}
                      Transactions <i className="icons">swap_horiz</i>
                    </a>
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("salaries")}
                      className={currentTab === "salaries" && "current"}
                    >
                      {" "}
                      Salaries &amp;
                      <br />
                      Contracts <i className="icons">assignment</i>
                    </a>
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("fees")}
                      className={currentTab === "fees" && "current"}
                    >
                      {" "}
                      Fees &amp; Prizes <i className="icons">redeem</i>
                    </a>
                    eslint-disable-next-line
                    <a
                      onClick={() => setCurrentTab("other")}
                      className={currentTab === "other" && "current"}
                    >
                      {" "}
                      Other <i className="icons">help_outline</i>
                    </a>
                  </div>
                </div> */}
              </div>
              {pickTab()}
              {/* <dl className="blades ">
                <div className="head-row"> League Commissioners </div>
                <dt >
                  How can I include the games played in Japan between Oakland
                  and Seattle on March 20 and March 21 in my league schedule?
                </dt>
                <dd ></dd>
                <dt >
                  Why is there no commissioner link on the app? How can I access
                  commissioner settings on the app?
                </dt>
                <dd ></dd>
              </dl>

              <dl className="blades ">
                <div className="head-row" hidden>
                  {" "}
                  Team Owners{" "}
                </div>
                <dt >Where do I get help?</dt>
                <dd ></dd>
                <dt >
                  What does the green asterisk and red dot mean beside a
                  player's name?
                </dt>
                <dd ></dd>
                <dt >
                  Is Fantrax free? If not, how much does it cost?
                </dt>
                <dd ></dd>
                <dt >
                  How does Fantrax make money? Is there anything I can do to
                  help?
                </dt>
                <dd ></dd>
                <dt >
                  Where do I change my password, email, or other personal info?
                </dt>
                <dd ></dd>
                <dt >
                  How do I change my User ID / Username?
                </dt>
                <dd ></dd>
                <dt >
                  I forgot/lost my Password. How can I retrieve it?
                </dt>
                <dd ></dd>
                <dt >
                  What time zone does Fantrax use? Can I change it?
                </dt>
                <dd ></dd>
                <dt >
                  How does the Fantrax Rewards System work? How can I use my
                  Fantrax Points?
                </dt>
                <dd ></dd>
                <dt >
                  Is my league safe on Fantrax?
                </dt>
                <dd ></dd>
                <dt >
                  How do I join a Commissioner league?
                </dt>
                <dd ></dd>
                <dt >
                  How do I create a Commissioner league?
                </dt>
                <dd ></dd>
                <dt >
                  What is a Private Commissioner league?
                </dt>
                <dd ></dd>
                <dt >
                  What is a Listed Commissioner league?
                </dt>
                <dd ></dd>
                <dt >
                  Where can I find all the games/leagues that you offer, both
                  for cash and for free?
                </dt>
                <dd ></dd>
                <dt >
                  Where do I find the league(s) that I have created or have a
                  team in?
                </dt>
                <dd ></dd>
                <dt >
                  Why should I use Fantrax over any other fantasy sports
                  website?
                </dt>
                <dd ></dd>
                <dt >
                  I'm a sports writer and would like to work for Fantrax. Who do
                  I contact?
                </dt>
                <dd ></dd>
                <dt >
                  Do you have an online tutorial on how to set up or play in one
                  of your leagues or games?
                </dt>
                <dd ></dd>
                <dt >
                  {" "}
                  Where can I view Fantrax's Terms of Service?{" "}
                </dt>
                <dd ></dd>
                <dt >
                  {" "}
                  Where can I view Fantrax's Privacy Policy?{" "}
                </dt>
                <dd ></dd>
                <dt >
                  Where do you get your stats from?
                </dt>
                <dd ></dd>
                <dt >
                  Where do you get your player news from?
                </dt>
                <dd ></dd>
                <dt >
                  Is there a way to see which player news sources appear to me?
                </dt>
                <dd ></dd>
                <dt >
                  {" "}
                  What screen resolution is best to use when accessing
                  Fantrax.com?{" "}
                </dt>
                <dd ></dd>
                <dt >
                  What is a Commissioner league/game, for example NFL
                  Commissioner?
                </dt>
                <dd ></dd>
                <dt >
                  What is a Standard Commissioner league?
                </dt>
                <dd ></dd>
                <dt >
                  What is a Premium Commissioner league?
                </dt>
                <dd ></dd>
                <dt >
                  {" "}
                  How do I downgrade my Premium Commissioner league to a
                  Standard (free) Commissioner league?{" "}
                </dt>
                <dd ></dd>
                <dt >
                  Do you have any sample Commissioner leagues for me to try out?
                </dt>
                <dd ></dd>
                <dt >
                  Where can I find more information on your site-wide Salary Cap
                  games/contests, such as the rules, salaries and cash/prize
                  payouts?
                </dt>
                <dd ></dd>
                <dt >
                  Where can I see how much cash and/or credit I have in my
                  Fantrax account?
                </dt>
                <dd ></dd>
                <dt >
                  {" "}
                  What's the difference between Cash, Credit and Premium League
                  Credit in my Fantrax Account?{" "}
                </dt>
                <dd ></dd>
                <dt >
                  Are Fantrax's pay-to-play games legal?
                </dt>
                <dd ></dd>
                <dt >
                  How do I withdraw money from my Fantrax account?
                </dt>
                <dd ></dd>
                <dt >
                  How do I deposit money into my Fantrax account?
                </dt>
                <dd ></dd>
                <dt >
                  How do I use the money in my Fantrax account?
                </dt>
                <dd ></dd>
                <dt >
                  Are your stats accurate/reliable?
                </dt>
                <dd ></dd>
                <dt >
                  Is there a place I can see which features you have recently
                  implemented?
                </dt>
                <dd ></dd>
                <dt >
                  How does FANTRAX handle tax forms?&nbsp; Will I be receiving a
                  1099-MISC and if so, when does it come and by what method is
                  the amount calculated?
                </dt>
                <dd ></dd>
              </dl> */}
            </section>
            {/* <aside className="side-content content__column content__column--sticky content__column--sticky-public">
              <long-column-ad>
                <div className="content__column__item">
                  <side-ad>
                    <div className="placeholder--fluid placeholder--fluid-right-col ">
                      <ad adid="ad-med_rect_atf">
                        <div id="ad-med_rect_atf" />
                      </ad>
                    </div>
                  </side-ad>
                </div>
              </long-column-ad>
            </aside> */}
          </div>
        </app-faq>
      </div>
    </div>
  );
};

export default Faq;
