import React from 'react';
import { Link } from 'react-router-dom';

const BurgerBox = ({ setIsBurgerBox }) => {
  return (
    <div
      onClick={() => setIsBurgerBox(false)}
      className="nav-menu nav-menu--hamburger"
      style={{ transform: 'translateX(-50%) scale(1)', opacity: 1 }}
    >
      <Link className="nav-menu__link color--orange " to="/plans">
        Go Ad Free!
        <i aria-hidden="true" className="icons ">
          new_releases
        </i>
      </Link>
      <Link className="nav-menu__link " to="/colleague-search">
        Colleague Search
        <i aria-hidden="true" className="icons ">
          search
        </i>
      </Link>
      <Link className="nav-menu__link " to="/treasurer">
        Treasurer
        <i class="icons">account_balance</i>
      </Link>
      <Link className="nav-menu__link " to="/forums/general">
        Forums
        <i aria-hidden="true" className="icons ">
          forum
        </i>
      </Link>
      <Link className="nav-menu__link " to="/contact">
        Support &amp; Feedback
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
      <Link className="nav-menu__link " to="/features">
        Feature Comparison
        <i aria-hidden="true" className="icons ">
          compare_arrows
        </i>
      </Link>
    </div>
  );
};

export default BurgerBox;
