import React, { useEffect, useState, useContext } from "react";
import SportCard from "../../components/SportCard/SportCard";
import Sports from "../../Sports";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import WorldMap from "../../components/WorldMap/WorldMap";
import { CurrentSportContext } from "../../state/CurrentSportContext";
import WhyUsTable from "../../components/WhyUsTable/WhyUsTable";
import { IsLoggedContext } from "../../state/IsLogged";
import { IsAllowedNotificationsContext } from "../../state/isAllowedNotifications";
import { UserInfoContext } from "../../state/userInfo";
import { getAccountData } from "../../api/auth.api";

const Homepage = () => {
  const [isNotifiedCookies, setIsNotifiedCookies] = useState(false);
  const [
    isShownRecieveNotifications,
    setIsShownRecieveNotifications
  ] = useState(false);
  const { setCurrentSport } = useContext(CurrentSportContext);
  const { isLogged } = useContext(IsLoggedContext);
  const { setIsAllowedNotifications } = useContext(
    IsAllowedNotificationsContext
  );
  const { userInfo } = useContext(UserInfoContext);

  useEffect(() => {
    setCurrentSport({});
    const localNotified = localStorage.getItem("isNotifiedCookies");
    const localIsShownRecieveNotifications = localStorage.getItem(
      "isShownRecieveNotifications"
    );
    const localIsAllowedNotifications = localStorage.getItem(
      "isAllowedNofitications"
    );
    setIsNotifiedCookies(localNotified);
    setIsShownRecieveNotifications(localIsShownRecieveNotifications);
    setIsAllowedNotifications(localIsAllowedNotifications);
    // eslint-disable-next-line
  }, []);

  const handleDismissClick = () => {
    localStorage.setItem("isNotifiedCookies", true);
    setIsNotifiedCookies(true);
  };

  const handleAllowNotifications = () => {
    localStorage.setItem("isShownRecieveNotifications", true);
    localStorage.setItem("isAllowedNofitications", true);
    setIsShownRecieveNotifications(true);
    setIsAllowedNotifications(true);
  };
  const handleNeverNotifications = () => {
    localStorage.setItem("isShownRecieveNotifications", true);
    localStorage.setItem("isAllowedNofitications", false);
    setIsShownRecieveNotifications(true);
    setIsAllowedNotifications(false);
  };

  // debug (temporary)
  const getAccData = async () => {
    const response = await getAccountData(
      {
        id: 12
      },
      userInfo.access_token
    );
  };

  return (
    <>
      <div className="layout__outlet ">
        <router-outlet
          name="header"
          role="banner"
          className=" "
        ></router-outlet>
        <router-outlet name="notice"></router-outlet>
        <div>
          <router-outlet role="main"></router-outlet>
          <app-home>
            <section className="home">
              <section className="hero">
                <div className="hero__logo"></div>
                {/* <h1 className="hero__slogan">The Home of Fantasy Sports</h1> */}
                <ScrollLink
                  to="home-intro"
                  spy={true}
                  smooth={true}
                  duration={500}
                  role="link"
                  className="scroll-btn"
                >
                  <i className="scroll-btn__arrow"></i>
                </ScrollLink>
              </section>

              <section
                id="home-intro"
                className="section-wrapper section-wrapper--landing margin--reduce-bottom--medium"
              >
                <div
                  onClick={getAccData}
                  className="content--center mobile-clearance"
                >
                  <h2>Sports Offered</h2>
                  <h6>
                    Choose from a variety of season-long games in nine different
                    sports
                  </h6>
                </div>
                <div
                  tabindex="-1"
                  className="main-content home__tiles content--center margin"
                >
                  <div className="grid">
                    {Sports.map(sport => (
                      <SportCard
                        title={sport.title}
                        shortDescription={sport.shortDescription}
                        buttonText={sport.buttonText}
                        smallAbbreviation={sport.smallAbbreviation}
                      />
                    ))}
                  </div>
                </div>
              </section>
              <WhyUsTable />
              <section className="section-wrapper section-wrapper--landing">
                <div className="content--center mobile-clearance">
                  <h2>What Fantrax Fans Are Saying!</h2>
                  <WorldMap />
                </div>
              </section>
            </section>
          </app-home>
        </div>
      </div>
      <div className="layout__footer   ">
        <router-outlet name="footer" role="contentinfo"></router-outlet>
      </div>
      {/* {isNotifiedCookies ? null : ( */}
      <NotifyOverlay
        handleDismissClick={handleDismissClick}
        isNotifiedCookies={isNotifiedCookies}
        isLogged={isLogged}
        isShownRecieveNotifications={isShownRecieveNotifications}
        handleAllowNotifications={handleAllowNotifications}
        handleNeverNotifications={handleNeverNotifications}
      />
      {/* )} */}
      <div className="nav--fullscreen-fix "></div>
    </>
  );
};

const NotifyOverlay = ({
  handleDismissClick,
  isNotifiedCookies,
  isLogged,
  isShownRecieveNotifications,
  handleAllowNotifications,
  handleNeverNotifications
}) => {
  return (
    <div className="layout__overlay ">
      <overlay-fab className="ng-tns-c258-1"></overlay-fab>
      <overlay-toasts>
        <toast className=" ">
          {isNotifiedCookies ? null : (
            <section
              className="toast   -enterLeave info"
              style={{
                opacity: "1",
                transform: "translateX(0px)"
              }}
            >
              <article>
                <p className=" ">We use cookies to improve your experience</p>
              </article>
              <div className="button-group margin--tiny  ">
                <Link to="/privacy-policy">
                  <button
                    mat-button=""
                    className="mat-focus-indicator mat-button mat-button-base  mat-white-text "
                  >
                    <span className="mat-button-wrapper"> Read more </span>
                    <div
                      matripple=""
                      className="mat-ripple mat-button-ripple"
                    ></div>
                    <div className="mat-button-focus-overlay"></div>
                  </button>
                </Link>
                <Link to="/terms-of-service">
                  <button
                    mat-button=""
                    className="mat-focus-indicator mat-button mat-button-base  mat-white-text "
                  >
                    <span className="mat-button-wrapper"> Terms </span>
                    <div
                      matripple=""
                      className="mat-ripple mat-button-ripple"
                    ></div>
                    <div className="mat-button-focus-overlay"></div>
                  </button>
                </Link>
                <button
                  mat-button=""
                  onClick={handleDismissClick}
                  className="mat-focus-indicator mat-button mat-button-base  mat-white "
                >
                  <span className="mat-button-wrapper"> Dismiss </span>
                  <div
                    matripple=""
                    className="mat-ripple mat-button-ripple"
                  ></div>
                  <div className="mat-button-focus-overlay"></div>
                </button>
              </div>
              <div
                className="toast__progress  "
                style={{ transform: "scaleX(0)" }}
              ></div>
            </section>
          )}
          {isLogged && !isShownRecieveNotifications ? (
            <RecieveNotificationsPopup
              handleAllowNotifications={handleAllowNotifications}
              handleNeverNotifications={handleNeverNotifications}
            />
          ) : null}
        </toast>
      </overlay-toasts>
    </div>
  );
};

const RecieveNotificationsPopup = ({
  handleAllowNotifications,
  handleNeverNotifications
}) => {
  return (
    <section
      className="toast ng-tns-c260-17  -enterLeave info"
      style={{ opacity: 1, transform: "translateX(0px)" }}
    >
      <article className="ng-tns-c260-17">
        <h4 className="ng-tns-c260-17 ng-star-inserted" style={{}}>
          Receive notifications for your leagues?
        </h4>
      </article>
      <div
        className="button-group margin--tiny ng-tns-c260-17 ng-star-inserted"
        style={{}}
      >
        <button
          onClick={handleNeverNotifications}
          mat-button
          className="mat-focus-indicator mat-button mat-button-base ng-tns-c260-17 mat-white-text ng-star-inserted"
        >
          <span className="mat-button-wrapper">
            <i
              role="img"
              className="mat-icon icons notranslate ng-tns-c260-17 material-icons mat-icon-no-color ng-star-inserted"
              aria-hidden="true"
            >
              cancel
            </i>
            Never{" "}
          </span>
          <div matripple className="mat-ripple mat-button-ripple" />
          <div className="mat-button-focus-overlay" />
        </button>
        <button
          onClick={handleAllowNotifications}
          mat-button
          className="mat-focus-indicator mat-button mat-button-base ng-tns-c260-17 mat-white ng-star-inserted"
        >
          <span className="mat-button-wrapper">
            <i
              role="img"
              className="icons mat-icon notranslate ng-tns-c260-17 material-icons mat-icon-no-color ng-star-inserted"
              aria-hidden="true"
            >
              done
            </i>
            Allow{" "}
          </span>
          <div matripple className="mat-ripple mat-button-ripple" />
          <div className="mat-button-focus-overlay" />
        </button>
      </div>

      <div
        className="toast__progress ng-tns-c260-17 ng-star-inserted"
        style={{ transform: "scaleX(0)" }}
      />
    </section>
  );
};

export default Homepage;
