import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { findSportLogoByAbbr } from '../../helpers/findSportLogoByAbbr';

const AboutSportCard = ({ abbreviation, smallAbbreviation, currentAbbr }) => {
  const [isHover, setIsHover] = useState(false);

  const isCurrent = smallAbbreviation === currentAbbr;

  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      to={`/sport/${smallAbbreviation}`}
      _ngcontent-ade-c281=""
      className={cn(
        `sportile sportile--medium sportile--${smallAbbreviation}`,
        {
          current: currentAbbr === smallAbbreviation,
        }
      )}
    >
      <i _ngcontent-ade-c281="" className="fx-icons">
        {findSportLogoByAbbr(smallAbbreviation, true, isHover, isCurrent)}
      </i>
      <b _ngcontent-ade-c281="">{abbreviation}</b>
    </Link>
  );
};

export default AboutSportCard;
