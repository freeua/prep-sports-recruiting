import React from "react";

const MySubscriptionBox = () => {
  return (
    <div
      className="nav-menu ng-tns-c255-33 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{ transform: "translateX(-50%) scale(1)", opacity: 1 }}
    >
      <div className="nav-menu__scrollbar ng-tns-c255-33">
        <div className="nav-menu__scrollbar__fix ng-tns-c255-33">
          <league-nav className="ng-tns-c255-33 ng-tns-c188-34">
            <div className="nav-menu__sport-header ng-tns-c188-34 ng-star-inserted">
              <h5 className="ng-tns-c188-34"> Misc </h5>
              {/* <i className="icons fx-icons ng-tns-c188-34">clear_all</i> */}
            </div>
            {/* eslint-disable-next-line  */}
            <a
              tabIndex={0}
              className="nav-menu__link ng-tns-c188-34 ng-star-inserted"
            >
              {" "}
              All Current/Past Subscriptions
              <i aria-hidden="true" className="icons ng-tns-c188-34">
                clear_all
              </i>
            </a>
          </league-nav>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptionBox;
