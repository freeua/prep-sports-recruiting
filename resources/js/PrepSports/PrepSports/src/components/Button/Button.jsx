import React from "react";
import "./Button.module.scss";

const Button = ({ text, onClick = null, margin = false, ...rest }) => {
  return (
    <div
      onClick={onClick}
      className={`btt-container ${margin ? "margin-btt" : null}`}
      {...rest}
    >
      <div className="btt-wrapper">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Button;
