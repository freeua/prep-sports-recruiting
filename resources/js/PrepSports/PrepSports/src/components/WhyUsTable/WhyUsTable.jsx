import React from "react";
import baseballInfogr from "../../assets/infographics/Male/how-it-works-Infographic-baseball-male.png";
import { Link } from "react-router-dom";

const WhyUsTable = () => {
  return (
    <section className="section-wrapper section-wrapper--landing section-wrapper--gray">
      <div className="content--center mobile-clearance">
        <h2>How it works</h2>
      </div>
      <div className="content--center margin">
        <div _ngcontent-ade-c281="" class="long-tiles ng-star-inserted">
          <img
            src={baseballInfogr}
            style={{ maxWidth: "100%" }}
            alt="infographics"
          />
        </div>
      </div>
      <div className="button-group button-group--center">
        <Link
          mat-raised-button=""
          className="mat-focus-indicator mat-raised-button mat-button-base mat-primary-large"
          tabindex="0"
          aria-disabled="false"
          to="/register"
        >
          <span className="mat-button-wrapper">Sign Up for FREE!</span>
          <div matripple="" className="mat-ripple mat-button-ripple"></div>
          <div className="mat-button-focus-overlay"></div>
        </Link>
      </div>
    </section>
  );
};

export default WhyUsTable;
