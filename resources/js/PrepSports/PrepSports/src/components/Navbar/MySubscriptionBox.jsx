import React from "react";
import { useContext } from "react";
import { UserInfoContext } from "../../state/userInfo";
import { AccountDataContext } from "../../state/accountData";

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
                ? accountData?.plans.map(plan => (
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
  return (
    <div>
      {/* TODO: Write sport name, when backend adds this field */}
      <h5>Sport ID: {plan.pivot.sport_id}</h5>
    </div>
  );
};

export default MySubscriptionBox;
