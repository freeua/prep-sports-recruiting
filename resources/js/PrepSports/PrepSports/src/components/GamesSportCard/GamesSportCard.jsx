import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentSportContext } from '../../state/CurrentSportContext';
import cn from 'classnames';
import { findSportLogoByAbbr } from '../../helpers/findSportLogoByAbbr';

const GamesSportCard = ({
  smallAbbreviation,
  abbreviation,
  isLink = true,
  currentAbbr = '',
  onClick,
}) => {
  const { currentSport } = useContext(CurrentSportContext);
  const [isHover, setIsHover] = useState(false);

  const isCurrent = smallAbbreviation === currentSport.smallAbbreviation;

  if (!isLink) {
    return (
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className={cn(
          `sportile sportile--small sportile--${smallAbbreviation}`,
          {
            current: isCurrent,
          }
        )}
      >
        <i class="fx-icons">
          {findSportLogoByAbbr(smallAbbreviation, true, isHover, isCurrent)}
        </i>
        <b>{abbreviation}</b>
      </div>
    );
  }

  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      to={`/sport/${smallAbbreviation}`}
      className={cn(`sportile sportile--small sportile--${smallAbbreviation}`, {
        current: isCurrent,
      })}
    >
      <i class="fx-icons">
        {findSportLogoByAbbr(smallAbbreviation, true, isHover, isCurrent)}
      </i>
      <b>{abbreviation}</b>
    </Link>
  );
};

export default GamesSportCard;
