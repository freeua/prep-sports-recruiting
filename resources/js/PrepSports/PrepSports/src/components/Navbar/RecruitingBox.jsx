import React, { useState } from "react";
import Sports from "../../Sports";
import { Link } from "react-router-dom";

const RecruitingBox = () => {
  const [currentSport, setCurrentSport] = useState(Sports[0].smallAbbreviation);

  return (
    <div
      className="nav-menu nav-menu--wide ng-tns-c254-2 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{
        transform: "translateX(-50%) scale(1)",
        opacity: "1",
        // maxHeight: "400px", // TODO: Test On Windows
        // overflow: "auto" // TODO: Test On Windows

        maxHeight: "90vh", // TODO: Test On Windows
        overflow: "auto" // TODO: Test On Windows
      }}
    >
      <flyout-nav className="ng-tns-c254-2">
        <nav className="flyout__wrapper">
          {Sports.map((sport, index) => (
            <div
              className={`flyout flyout--nhl ng-star-inserted ${
                currentSport === sport.smallAbbreviation ? "flyout--active" : ""
              }`}
            >
              <span
                onMouseEnter={() => setCurrentSport(sport.smallAbbreviation)}
                className={`flyout__category`}
              >
                <div style={{ maxWidth: "92px" }}>{sport.title}</div>
                <i className="icons">chevron_right</i>
              </span>
              {index === 0 && (
                <div className="flyout__links ng-star-inserted">
                  <Link
                    to={`/sport/${currentSport}`}
                    className="ng-star-inserted"
                  >
                    <u>Home</u>
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* <div className="flyout flyout--nba ng-star-inserted">
          <a className="flyout__category" href="/news/nba">
            NBA <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--nfl ng-star-inserted">
          <a className="flyout__category" href="/news/nfl">
            NFL <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--cfb ng-star-inserted">
          <a className="flyout__category" href="/news/cfb">
            NCAAF <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--epl ng-star-inserted">
          <a className="flyout__category" href="/news/epl">
            EPL <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--pga ng-star-inserted">
          <a className="flyout__category" href="/news/pga">
            PGA <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--mlb ng-star-inserted">
          <a className="flyout__category" href="/news/mlb">
            MLB <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--cbb ng-star-inserted">
          <a className="flyout__category" href="/news/cbb">
            NCAAB <i className="icons">chevron_right</i>
          </a>
        </div>
        <div className="flyout flyout--nascar ng-star-inserted">
          <a className="flyout__category" href="/news/nascar">
            NASCAR <i className="icons">chevron_right</i>
          </a>
        </div> */}
        </nav>
      </flyout-nav>
    </div>
  );
};

export default RecruitingBox;
