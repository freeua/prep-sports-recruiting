import React from "react";
import GamesSportCard from "../GamesSportCard/GamesSportCard";
import Sports from "../../Sports";

const SportsBox = () => {
  return (
    <div
      className="nav-menu ng-tns-c254-34 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{ transform: "translateX(-50%) scale(1)", opacity: "1" }}
    >
      <div className="nav-menu__scrollbar ng-tns-c254-34">
        <div className="nav-menu__scrollbar__fix ng-tns-c254-34">
          <game-nav className="ng-tns-c254-34">
            <div className="nav-menu__sport-header color--accent">
              <h5>Season-Long Fantasy Sports</h5>
              <i className="icons">sports</i>
            </div>
            <div className="sportile__wrapper sportile__wrapper--mobile margin--smaller">
              {Sports.map((sport) => (
                <GamesSportCard
                  abbreviation={sport.abbreviation}
                  smallAbbreviation={sport.smallAbbreviation}
                />
              ))}
            </div>
          </game-nav>
        </div>
      </div>
    </div>
  );
};

export default SportsBox;
