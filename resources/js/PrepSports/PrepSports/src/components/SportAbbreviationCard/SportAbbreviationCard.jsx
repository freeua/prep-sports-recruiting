import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { CurrentSportContext } from '../../state/CurrentSportContext';

const SportAbbreviationCard = ({ abbreviation, smallAbbreviation }) => {
  const { currentSport } = useContext(CurrentSportContext);
  const currentSmallAbbreviation = currentSport.smallAbbreviation;

  return (
    <Link
      to={`/sport/${smallAbbreviation}`}
      className={cn(`sportile--${smallAbbreviation} ng-star-inserted`, {
        current: currentSmallAbbreviation === smallAbbreviation,
      })}
    >
      {abbreviation}
    </Link>
  );
};

export default SportAbbreviationCard;
