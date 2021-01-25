import React, { useContext } from "react";
import { AccountDataContext } from "../../../state/accountData";
import { UserInfoContext } from "../../../state/userInfo";
import { Link } from "react-router-dom";
import { findSportNameBySportId } from "../../../utils/helpers";
import { SportsInfoContext } from "../../../state/sportsInfo";

const AccountTab = () => {
  const { userInfo } = useContext(UserInfoContext);
  const { accountData } = useContext(AccountDataContext);

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="sportsContainer"
    >
      <h2 className="standalone">Purchased Plans</h2>
      <div style={{ padding: "0 20px" }}>
        {userInfo?.paid_plans === "1" ? (
          accountData?.sports.map(plan => <Plan key={plan?.id} plan={plan} />)
        ) : (
          <>
            <h5>You don't have any plans</h5>
            <Link to="/plans">
              <h5 style={{ textDecoration: "underline" }}>Go to Plans Page</h5>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const Plan = ({ plan }) => {
  const { sportsInfo } = useContext(SportsInfoContext);

  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0px 0px 4px 0.1px grey",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "0 7px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h5>{findSportNameBySportId(plan?.pivot?.sport_id, sportsInfo[0])}</h5>
      <h5>
        Emails Left: <b style={{ fontWeight: "600" }}>{plan?.pivot?.count}</b>
      </h5>
    </div>
  );
};

export default AccountTab;
