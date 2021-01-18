import React, { useEffect, useState, useContext } from "react";
import Sports from "../../Sports";
import AboutSportBanner from "../../components/AboutSportBanner/AboutSportBanner";
import AboutSportCard from "../../components/AboutSportCard/AboutSportCard";
import { CurrentSportContext } from "../../state/CurrentSportContext";
// import WhyUsTable from "../../components/WhyUsTable/WhyUsTable";
import { Link } from "react-router-dom";

// Gifs
import baseballGif from "../../assets/gifs/baseball-icon.gif";
import basketballGif from "../../assets/gifs/basketball-icon.gif";
import crossCountryGif from "../../assets/gifs/cross-country-icon.gif";
import fieldHockeyGif from "../../assets/gifs/field-hockey-icon.gif";
import footballGif from "../../assets/gifs/football-icon.gif";
import golfGif from "../../assets/gifs/golf-icon.gif";
import gymnasticsGif from "../../assets/gifs/gymnastics-icon.gif";
import hockeyGif from "../../assets/gifs/hockey-icon.gif";
import lacrosseGif from "../../assets/gifs/lacrosse-icon.gif";
import rugbyGif from "../../assets/gifs/rugby-icon.gif";
import soccerGif from "../../assets/gifs/soccer-icon.gif";
import softballGif from "../../assets/gifs/softball-icon.gif";
import swimmingGif from "../../assets/gifs/swimming-icon.gif";
import tennisGif from "../../assets/gifs/tennis-icon.gif";
import trackAndFieldGif from "../../assets/gifs/track-and-field-icon.gif";
import volleyballGif from "../../assets/gifs/volleyball-icon.gif";
import waterpoloGif from "../../assets/gifs/waterpolo-icon.gif";

// Infographics Male
import crossCountryInfogr from "../../assets/infographics/Male/how-it-works-cross_country-male.png";
import fieldHockeyInfogr from "../../assets/infographics/Male/how-it-works-field_hockey-male.png";
import golfInfogr from "../../assets/infographics/Male/how-it-works-golf-male.png";
import baseballInfogr from "../../assets/infographics/Male/how-it-works-Infographic-baseball-male.png";
import basketballInfogr from "../../assets/infographics/Male/how-it-works-Infographic-basketball-male.png";
import footballInfogr from "../../assets/infographics/Male/how-it-works-Infographic-football-male.png";
import iceHockeyInfogr from "../../assets/infographics/Male/how-it-works-Infographic-ice_hockey-male.png";
import lacrosseInfogr from "../../assets/infographics/Male/how-it-works-lacrosse-male.png";
import rugbyInfogr from "../../assets/infographics/Male/how-it-works-rugby-male.png";
import soccerInfogr from "../../assets/infographics/Male/how-it-works-soccer-male.png";
import swimmingInfogr from "../../assets/infographics/Male/how-it-works-swimming-male.png";
import tennisInfogr from "../../assets/infographics/Male/how-it-works-tennis-male.png";
import trackAndFieldInfogr from "../../assets/infographics/Male/how-it-works-track-and_field-male.png";
import volleyballInfogr from "../../assets/infographics/Male/how-it-works-volleyball-male.png";
import waterpoloInfogr from "../../assets/infographics/Male/how-it-works-waterpolo-male.png";

// Infographics Female
import basketballInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-basketball-female.png";
import crossCountryInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-cross_country-female.png";
import fieldHockeyInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-field_hockey-female.png";
import gymnasticsInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-gimnastics-female.png";
import golfInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-golf-female.png";
import iceHockeyInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-ice_hockey-female.png";
import lacrosseInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-lacrosse-female.png";
import rugbyInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-rugby-female.png";
import soccerInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-soccer-female.png";
import softballInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-softball-female.png";
import swimmingInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-swimming-female.png";
import tennisInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-tennis-female.png";
import trackAndFieldInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-track_and_field-female.png";
import volleyballInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-volleyball-female.png";
import waterpoloInfogrFemale from "../../assets/infographics/Female/how-it-works-Infographic-waterpolo-female.png";

const AboutSport = ({ match }) => {
  const { setCurrentSport } = useContext(CurrentSportContext);
  const [sport, setSport] = useState({});

  useEffect(() => {
    setCurrentSport(
      Sports.find(sport => sport.smallAbbreviation === match.params.abbr)
    );
    setSport(
      Sports.find(sport => sport.smallAbbreviation === match.params.abbr)
    );
    // eslint-disable-next-line
  }, [match.params.abbr]);

  const pickGif = smallAbbreviation => {
    switch (smallAbbreviation) {
      case "baseball":
        return <img src={baseballGif} style={{ height: "100%" }} alt="gif" />;
      case "football":
        return <img src={footballGif} style={{ height: "100%" }} alt="gif" />;
      case "basketball":
        return <img src={basketballGif} style={{ height: "100%" }} alt="gif" />;
      case "hockey":
        return <img src={hockeyGif} style={{ height: "100%" }} alt="gif" />;
      case "golf":
        return <img src={golfGif} style={{ height: "100%" }} alt="gif" />;
      case "soccer":
        return <img src={soccerGif} style={{ height: "100%" }} alt="gif" />;
      case "field_hockey":
        return (
          <img src={fieldHockeyGif} style={{ height: "100%" }} alt="gif" />
        );
      case "gymnastics":
        return <img src={gymnasticsGif} style={{ height: "100%" }} alt="gif" />;
      case "cross_country":
        return (
          <img src={crossCountryGif} style={{ height: "100%" }} alt="gif" />
        );
      case "lacrosse":
        return <img src={lacrosseGif} style={{ height: "100%" }} alt="gif" />;
      case "rugby":
        return <img src={rugbyGif} style={{ height: "100%" }} alt="gif" />;
      case "track_and_field":
        return (
          <img src={trackAndFieldGif} style={{ height: "100%" }} alt="gif" />
        );
      case "softball":
        return <img src={softballGif} style={{ height: "100%" }} alt="gif" />;
      case "swimming_and_diving":
        return <img src={swimmingGif} style={{ height: "100%" }} alt="gif" />;
      case "tennis":
        return <img src={tennisGif} style={{ height: "100%" }} alt="gif" />;
      case "volleyball":
        return <img src={volleyballGif} style={{ height: "100%" }} alt="gif" />;
      case "water_polo":
        return <img src={waterpoloGif} style={{ height: "100%" }} alt="gif" />;
      default:
        return null;
    }
  };

  const pickMaleInfographics = smallAbbreviation => {
    switch (smallAbbreviation) {
      case "baseball":
        return (
          <img
            src={baseballInfogr}
            style={{ maxWidth: "100%" }}
            alt="infographics"
          />
        );
      case "football":
        return (
          <img src={footballInfogr} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "basketball":
        return (
          <img src={basketballInfogr} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "hockey":
        return (
          <img src={iceHockeyInfogr} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "golf":
        return <img src={golfInfogr} style={{ maxWidth: "100%" }} alt="gif" />;
      case "soccer":
        return (
          <img src={soccerInfogr} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "field_hockey":
        return (
          <img src={fieldHockeyInfogr} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "gymnastics":
        return null;
      case "cross_country":
        return (
          <img src={crossCountryInfogr} style={{ height: "100%" }} alt="gif" />
        );
      case "lacrosse":
        return (
          <img src={lacrosseInfogr} style={{ height: "100%" }} alt="gif" />
        );
      case "rugby":
        return <img src={rugbyInfogr} style={{ height: "100%" }} alt="gif" />;
      case "track_and_field":
        return (
          <img src={trackAndFieldInfogr} style={{ height: "100%" }} alt="gif" />
        );
      case "softball":
        return null;
      case "swimming_and_diving":
        return (
          <img src={swimmingInfogr} style={{ height: "100%" }} alt="gif" />
        );
      case "tennis":
        return <img src={tennisInfogr} style={{ height: "100%" }} alt="gif" />;
      case "volleyball":
        return (
          <img src={volleyballInfogr} style={{ height: "100%" }} alt="gif" />
        );
      case "water_polo":
        return (
          <img src={waterpoloInfogr} style={{ height: "100%" }} alt="gif" />
        );
      default:
        return null;
    }
  };

  const pickFemaleInfographics = smallAbbreviation => {
    switch (smallAbbreviation) {
      case "baseball":
        return null;
      case "football":
        return null;
      case "basketball":
        return (
          <img
            src={basketballInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "hockey":
        return (
          <img
            src={iceHockeyInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "golf":
        return (
          <img src={golfInfogrFemale} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "soccer":
        return (
          <img
            src={soccerInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "field_hockey":
        return (
          <img
            src={fieldHockeyInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "gymnastics":
        return (
          <img
            src={gymnasticsInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "cross_country":
        return (
          <img
            src={crossCountryInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "lacrosse":
        return (
          <img
            src={lacrosseInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "rugby":
        return (
          <img src={rugbyInfogrFemale} style={{ maxWidth: "100%" }} alt="gif" />
        );
      case "track_and_field":
        return (
          <img
            src={trackAndFieldInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "softball":
        return (
          <img
            src={softballInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "swimming_and_diving":
        return (
          <img
            src={swimmingInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "tennis":
        return (
          <img
            src={tennisInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "volleyball":
        return (
          <img
            src={volleyballInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      case "water_polo":
        return (
          <img
            src={waterpoloInfogrFemale}
            style={{ maxWidth: "100%" }}
            alt="gif"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AboutSportBanner
        title={sport.title}
        bannerDescription={sport.bannerDescription}
        smallAbbreviation={sport.smallAbbreviation}
      />
      <section _ngcontent-ade-c281="" class="section-wrapper ng-star-inserted">
        <div _ngcontent-ade-c281="" class="content--center">
          <div _ngcontent-ade-c281="" class="sportile__wrapper">
            {Sports.map(sport => (
              <AboutSportCard
                smallAbbreviation={sport.smallAbbreviation}
                abbreviation={sport.abbreviation}
                currentAbbr={match.params.abbr}
              />
            ))}
          </div>
        </div>
        <div _ngcontent-ade-c281="" class="content--center">
          <div _ngcontent-ade-c281="" class="long-tiles ng-star-inserted">
            <div _ngcontent-ade-c281="" class="long-tiles__badge">
              <div _ngcontent-ade-c281="" class="badge">
                {pickGif(sport.smallAbbreviation)}
              </div>
              {/* <div
                _ngcontent-ade-c281=""
                class="badge"
                style={{
                  backgroundImage:
                    ' url("https://www.fantrax.com/assets/images/badges/mlb/gameIcon_MLB_COMMISSIONER.svg")'
                }}
              ></div> */}
            </div>
            <div _ngcontent-ade-c281="" class="long-tiles__content">
              <h2 _ngcontent-ade-c281="">{sport.title}</h2>
              <p _ngcontent-ade-c281="">
                {/* Play the only fantasy NASCAR commissioner leagues on the web and
                mobile. Now you can create your own league, invite friends to
                play and draft your team of winning drivers! Our FREE NASCAR
                league manager is the most customizable, easy-to-use and
                feature-rich platform in the industry. Sign up now!{' '} */}
              </p>
              <div
                _ngcontent-ade-c281=""
                class="long-tiles__content__btns button-group button-group--left"
              >
                <Link to="/register">
                  <button
                    _ngcontent-ade-c281=""
                    mat-raised-button=""
                    class="mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-star-inserted"
                  >
                    <span class="mat-button-wrapper">Sign up for FREE</span>
                    <div
                      matripple=""
                      class="mat-ripple mat-button-ripple"
                    ></div>
                    <div class="mat-button-focus-overlay"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {pickMaleInfographics(sport.smallAbbreviation) ? (
          <div _ngcontent-ade-c281="" class="content--center">
            <div _ngcontent-ade-c281="" class="long-tiles ng-star-inserted">
              {pickMaleInfographics(sport.smallAbbreviation)}
            </div>
          </div>
        ) : null}

        {pickFemaleInfographics(sport.smallAbbreviation) ? (
          <div _ngcontent-ade-c281="" class="content--center">
            <div _ngcontent-ade-c281="" class="long-tiles ng-star-inserted">
              {pickFemaleInfographics(sport.smallAbbreviation)}
            </div>
          </div>
        ) : null}
      </section>
      {/* <WhyUsTable /> */}
    </>
  );
};

export default AboutSport;
