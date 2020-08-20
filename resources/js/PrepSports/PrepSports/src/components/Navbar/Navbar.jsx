import React, { useState, useContext } from 'react';
import { CurrentSportContext } from '../../state/CurrentSportContext';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { IsBlogPageContext } from '../../state/isBlogPageContext';
import SportsBox from './SportsBox';
import RecruitingBox from './RecruitingBox';
import LoginBox from './LoginBox';
import NotificationBox from './NotificationBox';
import BurgerBox from './BurgerBox';

const Navbar = () => {
  const { currentSport } = useContext(CurrentSportContext);
  const { isBlogPage } = useContext(IsBlogPageContext);
  const [isNavbarSports, setIsNavbarSports] = useState(false);
  const [isNavbarRecruiting, setIsNavbarRecruiting] = useState(false);
  const [isNavbarLoginBox, setIsNavbarLoginBox] = useState(false);
  const [isNotificationBox, setIsNotificationBox] = useState(false);
  const [isBurgerBox, setIsBurgerBox] = useState(false);

  return (
    <div
      style={currentSport.color ? { '--color-league': currentSport.color } : {}}
      role="navigation"
      className="layout__nav"
    >
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
          className={cn('nav', {
            blog_navbar: isBlogPage,
          })}
        >
          <div className="nav__container  ng-trigger ng-trigger-chatLayoutAnimation">
            <div className="nav__wrapper content--center ">
              <section className="nav__left ">
                <Link tabindex="0" className="nav-item nav-item--logo " to="/">
                  <u>Prep Sports</u>
                </Link>
                <div
                  onClick={() => {
                    setIsNavbarSports(!isNavbarSports);
                    setIsNavbarRecruiting(false);
                    setIsNavbarLoginBox(false);
                    setIsNotificationBox(false);
                    setIsBurgerBox(false);
                  }}
                  className="nav-item nav-item--arrow "
                >
                  <b tabindex="0" role="menuitem" className="">
                    Sports
                  </b>
                  {isNavbarSports ? <SportsBox /> : null}
                </div>
                <div
                  onClick={() => {
                    setIsNavbarRecruiting(!isNavbarRecruiting);
                    setIsNavbarSports(false);
                    setIsNavbarLoginBox(false);
                    setIsNotificationBox(false);
                    setIsBurgerBox(false);
                  }}
                  className="nav-item nav-item--arrow "
                >
                  <b tabindex="0" role="menuitem" className="">
                    Recruiting Information
                  </b>
                  {isNavbarRecruiting ? <RecruitingBox /> : null}
                </div>
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
                <div className="nav-item  ng-star-inserted">
                  <b
                    onClick={() => {
                      setIsNavbarLoginBox(!isNavbarLoginBox);
                      setIsNavbarRecruiting(false);
                      setIsNavbarSports(false);
                      setIsNotificationBox(false);
                      setIsBurgerBox(false);
                    }}
                    tabindex="0"
                    role="menuitem"
                    className=""
                    aria-label="Login"
                  >
                    Login
                  </b>
                  {isNavbarLoginBox ? <LoginBox /> : null}
                </div>
                <div className="nav-item ">
                  <b
                    onClick={() => {
                      setIsNotificationBox(!isNotificationBox);
                      setIsNavbarLoginBox(false);
                      setIsNavbarRecruiting(false);
                      setIsNavbarSports(false);
                      setIsBurgerBox(false);
                    }}
                    tabindex="0"
                    role="menuitem"
                    aria-label="Notifications"
                    className="nav-item__icon nav-item__icon--notification "
                  ></b>
                  {isNotificationBox ? <NotificationBox /> : null}
                </div>
                <div className="nav-item nav-item--last ">
                  <b
                    onClick={() => {
                      setIsBurgerBox(!isBurgerBox);
                      setIsNotificationBox(false);
                      setIsNavbarLoginBox(false);
                      setIsNavbarRecruiting(false);
                      setIsNavbarSports(false);
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
                <Link
                  className="btn btn--outline btn--white btn--white-over-blue  ng-star-inserted"
                  to="/register"
                >
                  SIGN UP
                </Link>
              </section>
            </div>
          </div>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
