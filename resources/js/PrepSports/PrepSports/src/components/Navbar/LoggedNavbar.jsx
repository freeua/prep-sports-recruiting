import React, { useState, useContext } from "react";
import { CurrentSportContext } from "../../state/CurrentSportContext";
import { Link } from "react-router-dom";
import cn from "classnames";
import { IsBlogPageContext } from "../../state/isBlogPageContext";
import SportsBox from "./SportsBox";
// import RecruitingBox from "./RecruitingBox";
import NotificationBox from "./NotificationBox";
import BurgerBox from "./BurgerBox";
import MySubscriptionBox from "./MySubscriptionBox";
import ProfileBox from "./ProfileBox";
import AvatarPlaceholder from "../AvatarPlaceholder";
import { UserInfoContext } from "../../state/userInfo";
import { AuthMeInfoContext } from "../../state/authMeInfo";

const LoggedNavbar = () => {
  const { currentSport } = useContext(CurrentSportContext);
  const { isBlogPage } = useContext(IsBlogPageContext);
  const { userInfo } = useContext(UserInfoContext);
  const [isNavbarSports, setIsNavbarSports] = useState(false);
  // const [isNavbarRecruiting, setIsNavbarRecruiting] = useState(false);
  const [isNotificationBox, setIsNotificationBox] = useState(false);
  const [isBurgerBox, setIsBurgerBox] = useState(false);
  const [isMySubscription, setIsMySubscription] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const { authMeInfo } = useContext(AuthMeInfoContext);

  const isAnyPopupOpened = () => {
    if (isNavbarSports) return true;
    // if (isNavbarRecruiting) return true;
    if (isNotificationBox) return true;
    if (isBurgerBox) return true;
    if (isMySubscription) return true;
    if (isProfile) return true;
    return false;
  };

  return (
    <div
      style={currentSport.color ? { "--color-league": currentSport.color } : {}}
      role="navigation"
      className="layout__nav"
    >
      {isAnyPopupOpened() && (
        <div
          className="dropbox-close"
          onClick={() => {
            setIsMySubscription(false);
            setIsNavbarSports(false);
            // setIsNavbarRecruiting(false);
            setIsNotificationBox(false);
            setIsBurgerBox(false);
            setIsProfile(false);
          }}
        ></div>
      )}

      <router-outlet
        name="navbar"
        role="navigation"
        className="ng-tns-c273-0"
      ></router-outlet>
      <navbar className=" ng-star-inserted">
        {/* eslint-disable-next-line */}
        <a tabindex="0" className="nav--a11y ">
          Skip to main content
        </a>
        {/* eslint-disable-next-line */}
        <a tabindex="0" className="nav--a11y ">
          Skip to footer
        </a>
        <nav
          role="navigation"
          className={cn("nav", {
            blog_navbar: isBlogPage
          })}
        >
          <div className="nav__container  ng-trigger ng-trigger-chatLayoutAnimation">
            <div className="nav__wrapper content--center ">
              <section className="nav__left ">
                <Link tabindex="0" className="nav-item nav-item--logo " to="/">
                  <u>PrepSports</u>
                </Link>

                <div
                  onClick={() => {
                    setIsMySubscription(!isMySubscription);
                    setIsNavbarSports(false);
                    // setIsNavbarRecruiting(false);
                    setIsNotificationBox(false);
                    setIsBurgerBox(false);
                    setIsProfile(false);
                  }}
                  className="nav-item nav-item--arrow "
                >
                  <b tabindex="0" role="menuitem" className="">
                    My Subscription
                  </b>
                  {isMySubscription ? <MySubscriptionBox /> : null}
                </div>

                <div
                  onClick={() => {
                    setIsNavbarSports(!isNavbarSports);
                    // setIsNavbarRecruiting(false);
                    setIsNotificationBox(false);
                    setIsBurgerBox(false);
                    setIsMySubscription(false);
                    setIsProfile(false);
                  }}
                  className="nav-item nav-item--arrow "
                >
                  <b tabindex="0" role="menuitem" className="">
                    Sports
                  </b>
                  {isNavbarSports ? <SportsBox /> : null}
                </div>
                {/* <div
                  onClick={() => {
                    // setIsNavbarRecruiting(!isNavbarRecruiting);
                    setIsNavbarSports(false);
                    setIsNotificationBox(false);
                    setIsBurgerBox(false);
                    setIsMySubscription(false);
                    setIsProfile(false);
                  }}
                  className="nav-item nav-item--arrow "
                >
                  <b tabindex="0" role="menuitem" className="">
                    Recruiting Information
                  </b>
                  {isNavbarRecruiting ? <RecruitingBox /> : null}
                </div> */}
                <div className="nav-item ">
                  <Link
                    to="/blog"
                    tabindex="0"
                    mattooltip="Fantasy advice, articles, news, and more!"
                    mattooltipshowdelay="340"
                    className=""
                    aria-describedby="cdk-describedby-message-1"
                    cdk-describedby-host=""
                  >
                    Blog HQ
                  </Link>
                </div>
              </section>
              <section className="nav__right ">
                <div className="nav-item ng-tns-c255-19 ng-star-inserted">
                  <b
                    onClick={() => {
                      setIsProfile(!isProfile);
                      setIsNotificationBox(false);
                      // setIsNavbarRecruiting(false);
                      setIsNavbarSports(false);
                      setIsBurgerBox(false);
                      setIsMySubscription(false);
                    }}
                    tabIndex={0}
                    role="menuitem"
                    className="ng-tns-c255-19"
                    aria-label="User profile"
                  >
                    <AvatarPlaceholder url={authMeInfo?.avatar} />
                  </b>

                  {isProfile ? (
                    <ProfileBox setIsProfile={setIsProfile} />
                  ) : null}
                </div>

                <div className="nav-item ">
                  <b
                    onClick={() => {
                      setIsNotificationBox(!isNotificationBox);
                      // setIsNavbarRecruiting(false);
                      setIsNavbarSports(false);
                      setIsBurgerBox(false);
                      setIsMySubscription(false);
                      setIsProfile(false);
                    }}
                    tabindex="0"
                    role="menuitem"
                    aria-label="Notifications"
                    className="nav-item__icon nav-item__icon--notification "
                  ></b>
                  {isNotificationBox ? <NotificationBox logged={true} /> : null}
                </div>
                <div className="nav-item nav-item--last ">
                  <b
                    onClick={() => {
                      setIsBurgerBox(!isBurgerBox);
                      setIsNotificationBox(false);
                      // setIsNavbarRecruiting(false);
                      setIsNavbarSports(false);
                      setIsMySubscription(false);
                      setIsProfile(false);
                    }}
                    tabindex="0"
                    role="menuitem"
                    aria-label="Main menu"
                    className="nav-item__icon nav-item__icon--veggieburger "
                  ></b>
                  {isBurgerBox ? (
                    <BurgerBox setIsBurgerBox={setIsBurgerBox} />
                  ) : null}
                </div>
              </section>
            </div>
          </div>
        </nav>
      </navbar>
    </div>
  );
};

export default LoggedNavbar;
