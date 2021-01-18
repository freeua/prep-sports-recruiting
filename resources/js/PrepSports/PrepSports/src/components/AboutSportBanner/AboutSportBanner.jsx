import React from "react";

const AboutSportBanner = ({
  smallAbbreviation,
  // bannerDescription,
  title
}) => {
  return (
    <section class={`hero hero--small ${smallAbbreviation}`}>
      <div class="hero__logo"></div>
      <h1 class="hero__slogan">The Home of {title} Recruiting</h1>
      <div class="hero__description">
        <div class="content--center mobile-clearance">
          {/* <p>{bannerDescription}</p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSportBanner;
