import React from "react";
import { Link } from "react-router-dom";

const BurgerBox = ({ setIsBurgerBox }) => {
  return (
    <div
      onClick={() => setIsBurgerBox(false)}
      className="nav-menu nav-menu--hamburger"
      style={{ transform: "translateX(-50%) scale(1)", opacity: 1 }}
    >
      <Link className="nav-menu__link color--orange " to="/plans">
        Subscription Plans
        <i aria-hidden="true" className="icons ">
          new_releases
        </i>
      </Link>
      <Link className="nav-menu__link " to="/colleague-search">
        College Search
        <i aria-hidden="true" className="icons ">
          search
        </i>
      </Link>
      <Link className="nav-menu__link " to="/contact">
        Contact Us
        <i aria-hidden="true" className="icons ">
          mail_outline
        </i>
      </Link>
      <Link className="nav-menu__link " to="/faq">
        FAQ &amp; Help
        <i aria-hidden="true" className="icons ">
          help_outline
        </i>
      </Link>
      <Link className="nav-menu__link " to="/about">
        About Us
        <i aria-hidden="true" className="icons ">
          timeline
        </i>
      </Link>
      <Link className="nav-menu__link " to="/">
        Forums (coming soon)
        <i aria-hidden="true" className="icons ">
          chatbubble
        </i>
      </Link>
      <Link className="nav-menu__link " to="/">
        Prep Sports Academy (coming soon)
        <i aria-hidden="true" className="icons ">
          school
        </i>
      </Link>
    </div>
  );
};

export default BurgerBox;
