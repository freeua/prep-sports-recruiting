import React from "react";
import Sports from "../../Sports";
import SportAbbreviationCard from "../SportAbbreviationCard/SportAbbreviationCard";
import { Link } from "react-router-dom";
import { chunk } from "../../helpers/utils";

const Footer = () => {
  const chunkedSports = chunk(Sports, 9);

  return (
    <layout-footer className="ng-star-inserted">
      <footer tabindex="-1" className="footer">
        <div className="footer__content content--center hide--phablet">
          <div className="footer__content--left">
            <Link routerlink="/" className="footer__logo" to="/"></Link>
            <div className="footer__slogan">The Home of Fantasy Sports</div>
            {/* <div className="footer__social">

              <a
                href="https://twitter.com/fantrax"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social__twitter"
              ></a>

              <a
                href="https://www.facebook.com/Fantrax-103021783376489/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social__facebook"
              ></a>
            </div> */}
          </div>

          <div className="footer__links">
            <Link routerlink="/plans" to="/plans">
              Subscription Plans
            </Link>
            <Link routerlink="/colleague-search" to="/colleague-search">
              College Search
            </Link>
            <Link routerlink="/contact" to="/contact">
              Contact Us
            </Link>
            <Link routerlink="/faq" to="/faq">
              FAQ &amp; Help
            </Link>
            <Link routerlink="/about" to="/about">
              Abous Us
            </Link>
            <Link routerlink="/about" to="/about">
              Forums (coming soon)
            </Link>
            <Link routerlink="/about" to="/about">
              Prep Sports Academy (coming soon)
            </Link>
          </div>

          <div className="footer__content--right">
            {chunkedSports.map(Sports => (
              <div className="footer__tiles">
                {Sports.map(sport => (
                  <SportAbbreviationCard
                    smallAbbreviation={sport.smallAbbreviation}
                    abbreviation={sport.abbreviation}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bar">
          <nav className="footer__bar__nav content--center mobile-clearance">
            <div className="footer__bar__nav__links">
              <Link routerlink="/about" className="hide--phone" to="/about">
                About
              </Link>
              <Link routerlink="/contact" to="/contact">
                Contact
              </Link>
              <Link routerlink="/terms-of-service" to="/terms-of-service">
                Terms
              </Link>
              <Link routerlink="/privacy-policy" to="/privacy-policy">
                Privacy
              </Link>
              <Link routerlink="/responsible-play" to="/responsible-play">
                Responsible Play
              </Link>
            </div>
            {/* <ul className="footer__bar__partners hide--phablet">
              <li>
                <span className="icon icon--paypal">PayPal</span>
              </li>
              <li>
                <span className="icon icon--amex">American Express</span>
              </li>
              <li>
                <span className="icon icon--visa">Visa</span>
              </li>
              <li>
                <span className="icon icon--discover hide--phone">
                  Discover Network
                </span>
              </li>
              <li>
                <span className="icon icon--mastercard">Mastercard</span>
              </li>
              <li>
                <span className="icon icon--fsta">FSTA</span>
              </li>
              <li>
                <span className="icon icon--stats">Stats</span>
              </li>
            </ul> */}
          </nav>
        </div>
        <div className="footer__legal content--center mobile-clearance">
          <p className="hide--desktop margin--smallest">
            Fantrax - The Home of Fantasy Sports
          </p>
          <p className="margin--tiny">
            {" "}
            © 2008-2020{" "}
            <Link routerlink="/" to="/">
              Fantrax
            </Link>{" "}
            All Rights Reserved.{" "}
            <span className="footer__time margin--left-small hide--phablet">
              {" "}
              Sun Apr 26, 2020{" "}
              <span className="margin--left-smaller">
                Version 17.0.0 - 18.0.2
              </span>
            </span>
          </p>
        </div>
      </footer>
    </layout-footer>
  );
};

export default Footer;
