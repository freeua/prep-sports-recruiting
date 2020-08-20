import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{ margin: "100px 200px 500px" }}>
      <h2>404! Page is not Found</h2>
      <Link to="/">
        <h4>Back to Homepage</h4>
      </Link>
    </div>
  );
};

export default NotFound;
