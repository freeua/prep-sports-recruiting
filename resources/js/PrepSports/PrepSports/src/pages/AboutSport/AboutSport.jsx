import React, { useEffect, useState, useContext } from 'react';
import Sports from '../../Sports';
import AboutSportBanner from '../../components/AboutSportBanner/AboutSportBanner';
import AboutSportCard from '../../components/AboutSportCard/AboutSportCard';
import { CurrentSportContext } from '../../state/CurrentSportContext';
import WhyUsTable from '../../components/WhyUsTable/WhyUsTable';

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
              <div
                _ngcontent-ade-c281=""
                class="badge"
                style={{
                  backgroundImage:
                    ' url("https://www.fantrax.com/assets/images/badges/mlb/gameIcon_MLB_COMMISSIONER.svg")',
                }}
              ></div>
            </div>
            <div _ngcontent-ade-c281="" class="long-tiles__content">
              <h2 _ngcontent-ade-c281="">Commissioner</h2>
              <p _ngcontent-ade-c281="">
                Play the only fantasy NASCAR commissioner leagues on the web and
                mobile. Now you can create your own league, invite friends to
                play and draft your team of winning drivers! Our FREE NASCAR
                league manager is the most customizable, easy-to-use and
                feature-rich platform in the industry. Sign up now!{' '}
              </p>
              <div
                _ngcontent-ade-c281=""
                class="long-tiles__content__btns button-group button-group--left"
              >
                <button
                  _ngcontent-ade-c281=""
                  mat-raised-button=""
                  class="mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-star-inserted"
                >
                  <span class="mat-button-wrapper"> Create League </span>
                  <div matripple="" class="mat-ripple mat-button-ripple"></div>
                  <div class="mat-button-focus-overlay"></div>
                </button>
                <button
                  _ngcontent-ade-c281=""
                  mat-raised-button=""
                  class="mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted"
                >
                  <span class="mat-button-wrapper"> Join League </span>
                  <div matripple="" class="mat-ripple mat-button-ripple"></div>
                  <div class="mat-button-focus-overlay"></div>
                </button>
                <button
                  _ngcontent-ade-c281=""
                  mat-raised-button=""
                  class="mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted"
                >
                  <span class="mat-button-wrapper"> Learn More </span>
                  <div matripple="" class="mat-ripple mat-button-ripple"></div>
                  <div class="mat-button-focus-overlay"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-ade-c281="" class="content--center">
          <div _ngcontent-ade-c281="" class="long-tiles ng-star-inserted">
            <div _ngcontent-ade-c281="" class="long-tiles__badge">
              <div
                _ngcontent-ade-c281=""
                class="badge"
                style={{
                  backgroundImage:
                    ' url("https://www.fantrax.com/assets/images/badges/mlb/gameIcon_MLB_COMMISSIONER.svg")',
                }}
              ></div>
            </div>
            <div _ngcontent-ade-c281="" class="long-tiles__content">
              <h2 _ngcontent-ade-c281="">Commissioner</h2>
              <p _ngcontent-ade-c281="">
                Play the only fantasy NASCAR commissioner leagues on the web and
                mobile. Now you can create your own league, invite friends to
                play and draft your team of winning drivers! Our FREE NASCAR
                league manager is the most customizable, easy-to-use and
                feature-rich platform in the industry. Sign up now!{' '}
              </p>
              <div
                _ngcontent-ade-c281=""
                class="long-tiles__content__btns button-group button-group--left"
              >
                <button
                  _ngcontent-ade-c281=""
                  mat-raised-button=""
                  class="mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-star-inserted"
                >
                  <span class="mat-button-wrapper"> Create League </span>
                  <div matripple="" class="mat-ripple mat-button-ripple"></div>
                  <div class="mat-button-focus-overlay"></div>
                </button>
                <button
                  _ngcontent-ade-c281=""
                  mat-raised-button=""
                  class="mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted"
                >
                  <span class="mat-button-wrapper"> Join League </span>
                  <div matripple="" class="mat-ripple mat-button-ripple"></div>
                  <div class="mat-button-focus-overlay"></div>
                </button>
                <button
                  _ngcontent-ade-c281=""
                  mat-raised-button=""
                  class="mat-focus-indicator mat-raised-button mat-button-base ng-star-inserted"
                >
                  <span class="mat-button-wrapper"> Learn More </span>
                  <div matripple="" class="mat-ripple mat-button-ripple"></div>
                  <div class="mat-button-focus-overlay"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUsTable />
    </>
  );
};

export default AboutSport;
