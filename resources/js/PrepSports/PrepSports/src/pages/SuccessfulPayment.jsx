import React from "react";
import SmallHeader from "../components/SmallHeader/SmallHeader";
import { Link } from "react-router-dom";

const SuccessfulPayment = () => {
  return (
    <div className="layout__outlet">
      <SmallHeader />

      <div style={{ padding: "30px 100px" }}>
        <h1>Successful Payment!</h1>
        <Link to="/">
          <h4>Back to Homepage</h4>
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
