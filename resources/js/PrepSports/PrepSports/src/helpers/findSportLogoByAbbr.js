import React from 'react';
import BaseballLogo from '../components/sportLogos/BaseballLogo';
import FootballLogo from '../components/sportLogos/FootballLogo';
import BasketballLogo from '../components/sportLogos/BasketballLogo';
import HockeyLogo from '../components/sportLogos/HockeyLogo';
import GolfLogo from '../components/sportLogos/GolfLogo';
import CollegeFootballLogo from '../components/sportLogos/CollegeFootballLogo';
import SoccerLogo from '../components/sportLogos/SoccerLogo';
import FieldHockeyLogo from '../components/sportLogos/FieldHockeyLogo';
import GymnasticsLogo from '../components/sportLogos/GymnasticsLogo';
import LacrosseLogo from '../components/sportLogos/LacrosseLogo';
import RugbyLogo from '../components/sportLogos/RugbyLogo';
import CrossCountryLogo from '../components/sportLogos/CrossCountryLogo';
import TrackAndFieldLogo from '../components/sportLogos/TrackAndFieldLogo';
import SoftballLogo from '../components/sportLogos/SoftballLogo';
import SwimmingAndDivingLogo from '../components/sportLogos/SwimmingAndDivingLogo';
import TennisLogo from '../components/sportLogos/TennisLogo';
import VolleyballLogo from '../components/sportLogos/VolleyballLogo';
import WaterPoloLogo from '../components/sportLogos/WaterPoloLogo';

// import baseballImage from '../assets/icons/Baseball-icon.png';
// import footballImage from '../assets/icons/football-icon.png';
// import basketballImage from '../assets/icons/Basketball-icon.png';
// import hockeyImage from '../assets/icons/Hockey-icon.png';
// import golfImage from '../assets/icons/Golf-icon.png';
// // import baseballImage from '../assets/icons/';
// import soccerImage from '../assets/icons/Soccer-icon.png';

export const findSportLogoByAbbr = (
  smallAbbreviation,
  isAboutSportPage = false,
  isHover,
  isCurrent = false
) => {
  switch (smallAbbreviation) {
    case 'mlb':
      return (
        <BaseballLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={baseballImage} alt="baseball" />
      );
    case 'nfl':
      return (
        <FootballLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={footballImage} alt="baseball" />
      );
    case 'nba':
      return (
        <BasketballLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={basketballImage} alt="baseball" />
      );
    case 'nhl':
      return (
        <HockeyLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={hockeyImage} alt="baseball" />
      );
    case 'pga':
      return (
        <GolfLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={golfImage} alt="baseball" />
      );
    case 'cfb':
      return (
        <CollegeFootballLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
      );
    case 'epl':
      return (
        <SoccerLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );

    ////////////////////////////////////////

    // NEW Sports:
    case 'field_hockey':
      return (
        <FieldHockeyLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'gymnastics':
      return (
        <GymnasticsLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'cross_country':
      return (
        <CrossCountryLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'lacrosse':
      return (
        <LacrosseLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'rugby':
      return (
        <RugbyLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'track_and_field':
      return (
        <TrackAndFieldLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'softball':
      return (
        <SoftballLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'swimming_and_diving':
      return (
        <SwimmingAndDivingLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'tennis':
      return (
        <TennisLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'volleyball':
      return (
        <VolleyballLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );
    case 'water_polo':
      return (
        <WaterPoloLogo
          isAboutSportPage={isAboutSportPage}
          isHover={isHover || isCurrent}
        />
        // <img style={{ height: '170px' }} src={soccerImage} alt="baseball" />
      );

    default:
      return null;
  }
};
