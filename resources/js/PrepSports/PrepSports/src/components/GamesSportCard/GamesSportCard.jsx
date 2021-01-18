import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentSportContext } from "../../state/CurrentSportContext";
import cn from "classnames";
import { findSportLogoByAbbr } from "../../helpers/findSportLogoByAbbr";

const GamesSportCard = ({
  sportFullName = "",
  isFromBackend = false,
  smallAbbreviation,
  abbreviation,
  isLink = true,
  onClick,
  isCurrentFilter = false
}) => {
  const { currentSport } = useContext(CurrentSportContext);
  const [isHover, setIsHover] = useState(false);

  const isCurrent = smallAbbreviation === currentSport.smallAbbreviation;

  if (isFromBackend) {
    return (
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className={cn(`sportile sportile--small`, {
          current: isCurrentFilter
        })}
      >
        {/* <i class="fx-icons">
          {findSportLogoByAbbr(smallAbbreviation, true, isHover, isCurrent)}
        </i> */}
        <b>{sportFullName}</b>
      </div>
    );
  }

  if (!isLink && !isFromBackend) {
    return (
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className={cn(
          `sportile sportile--small sportile--${smallAbbreviation}`,
          {
            current: isCurrent
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
        current: isCurrent
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
