import React from "react";
import { useContext } from "react";
import { UserInfoContext } from "../../state/userInfo";
import { AccountDataContext } from "../../state/accountData";
import { findSportNameBySportId } from "../../utils/helpers";
import { SportsInfoContext } from "../../state/sportsInfo";

const MySubscriptionBox = () => {
  const { userInfo } = useContext(UserInfoContext);
  const { accountData } = useContext(AccountDataContext);

  return (
    <div
      className="nav-menu ng-tns-c255-33 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{ transform: "translateX(-50%) scale(1)", opacity: 1 }}
    >
      <div className="nav-menu__scrollbar ng-tns-c255-33">
        <div className="nav-menu__scrollbar__fix ng-tns-c255-33">
          <league-nav className="ng-tns-c255-33 ng-tns-c188-34">
            <div className="nav-menu__sport-header ng-tns-c188-34 ng-star-inserted">
              <h5 className="ng-tns-c188-34"> Plans </h5>
              {/* <i className="icons fx-icons ng-tns-c188-34">clear_all</i> */}
            </div>
            {/* eslint-disable-next-line  */}
            <a
              tabIndex={0}
              className="nav-menu__link ng-tns-c188-34 ng-star-inserted"
            >
              {userInfo.paid_plans === "1"
                ? accountData?.sports.map(plan => (
                    <Plan key={plan.id} plan={plan} />
                  ))
                : "No plans yet"}
            </a>
          </league-nav>
        </div>
      </div>
    </div>
  );
};

const Plan = ({ plan }) => {
  const { sportsInfo } = useContext(SportsInfoContext);
  return (
    <div>
      {/* TODO: Write sport name, when backend adds this field */}
      <p style={{ margin: "5px 0", fontWeight: "600" }}>
        {findSportNameBySportId(plan.pivot.sport_id, sportsInfo[0])}
      </p>
      <p style={{ margin: "5px 0" }}>
        Emails left: {plan?.pivot.count ? plan?.pivot.count : "Unlimited"}
      </p>

      <div
        style={{
          background: "#0000002e",
          margin: "10px 0",
          height: "1px",
          width: "100%"
        }}
      />
    </div>
  );
};

export default MySubscriptionBox;
