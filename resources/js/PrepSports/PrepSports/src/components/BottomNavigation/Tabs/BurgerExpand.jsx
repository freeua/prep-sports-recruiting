import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Sports from "../../../Sports";
import GamesSportCard from "../../GamesSportCard/GamesSportCard";
import AvatarPlaceholder from "../../AvatarPlaceholder";
import RefreshButton from "../../RefreshButton/RefreshButton";
import { IsLoggedContext } from "../../../state/IsLogged";
import { UserInfoContext } from "../../../state/userInfo";

const BurgerExpand = ({ closeNav }) => {
  const { isLogged } = useContext(IsLoggedContext);
  const { userInfo } = useContext(UserInfoContext);

  return (
    <section style={{ display: "block" }}>
      <bottom-nav-menu>
        <nav className="bottom-nav-menu ">
          {isLogged ? (
            <header className="bottom-nav-menu__header  ">
              <AvatarPlaceholder />
              <dl>
                <h4> </h4>
                <h6>{userInfo.email}</h6>
              </dl>
              <RefreshButton />
            </header>
          ) : (
            <div className="button-group  ">
              <Link
                to="/register"
                color="primary"
                className="mat-focus-indicator  mat-raised-button mat-button-base mat-primary"
                tabindex="0"
                aria-disabled="false"
              >
                <span className="mat-button-wrapper">SIGN UP</span>
                <div
                  matripple=""
                  className="mat-ripple mat-button-ripple"
                ></div>
                <div className="mat-button-focus-overlay"></div>
              </Link>
              <Link
                mat-raised-button=""
                className="mat-focus-indicator  mat-raised-button mat-button-base"
                tabindex="0"
                aria-disabled="false"
                to="/login"
              >
                <span className="mat-button-wrapper">LOGIN</span>
                <div
                  matripple=""
                  className="mat-ripple mat-button-ripple"
                ></div>
                <div className="mat-button-focus-overlay"></div>
              </Link>
              <RefreshButton />
            </div>
          )}

          <hr />
          <div
            onClick={closeNav}
            className="sportile__wrapper sportile__wrapper--mobile margin--smallest "
          >
            <Link
              to="/"
              routerlinkactive="current"
              className="sportile sportile--small sportile--plain  "
              // className="current" (for curent link)
            >
              <i className="icons ">home</i>
              <b>Home</b>
            </Link>

            <Link
              routerlink="/faq"
              routerlinkactive="current"
              className="sportile sportile--small sportile--plain "
              to="/faq"
            >
              <i className="icons ">help_outline</i>
              <b>FAQ</b>
            </Link>
            <Link
              routerlinkactive="current"
              className="sportile sportile--small sportile--plain "
              to="/contact"
            >
              <i className="icons ">mail_outline</i>
              <b>Support</b>
            </Link>
          </div>

          <div>
            <div className="nav-menu__sport-header color--accent">
              <h5>Sports Available</h5>
              <i className="icons">P</i>
            </div>
            <div
              onClick={closeNav}
              className="sportile__wrapper sportile__wrapper--mobile margin--smaller"
            >
              {Sports.map(sport => (
                <GamesSportCard
                  smallAbbreviation={sport.smallAbbreviation}
                  abbreviation={sport.abbreviation}
                />
              ))}
            </div>
          </div>
          {/* <div className="nav-menu__sport-header color--accent ">
            <h5>News</h5>
            <i className="icons ">speaker_notes</i>
          </div>
          <b className="nav-menu__link depth-0--NEWS ">
            Press Box
            <i className="icons icons--medium "> expand_more</i>
          </b>
          <div className="nav-menu__sport-header ">
            <h5>Other</h5>
            <i className="icons ">link</i>
          </div> */}
          <div onClick={closeNav}>
            <Link className="nav-menu__link color--orange " to="/plans">
              Subscription Plans<i className="icons ">new_releases</i>
            </Link>
            <Link className="nav-menu__link " to="colleague-search">
              College Search<i class="icons ">search</i>
            </Link>
            <Link className="nav-menu__link " to="colleague-search">
              Forums (coming soon)<i class="icons ">chatbubble</i>
            </Link>
            <Link className="nav-menu__link " to="colleague-search">
              Prep Sports Academy (coming soon)<i class="icons ">school</i>
            </Link>
          </div>

          {/* eslint-disable-next-line */}

          <div className="button-group ">
            <span className="color--gray-lighter font-size--smaller ">
              Version: 17.0.0 - 18.0.2
            </span>
            <button
              mat-icon-button=""
              color="gray"
              className="mat-focus-indicator  mat-icon-button mat-button-base mat-gray"
            >
              <span className="mat-button-wrapper">
                <span
                  role="img"
                  className="mat-icon notranslate material-icons mat-icon-no-color"
                  aria-hidden="true"
                >
                  tap_and_play
                </span>
              </span>
              <div
                matripple=""
                className="mat-ripple mat-button-ripple mat-button-ripple-round"
              ></div>
              <div className="mat-button-focus-overlay"></div>
            </button>
          </div>
        </nav>
      </bottom-nav-menu>
    </section>
  );
};

export default BurgerExpand;
