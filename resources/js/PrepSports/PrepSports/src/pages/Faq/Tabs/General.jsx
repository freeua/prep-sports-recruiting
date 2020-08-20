import React from "react";
import Accordion from "../Accordion";
import { general } from "../../../state/faqData";

const General = ({ filter }) => {
  return (
    <>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> League Commissioners </div>
        {general
          .filter(({ question }) =>
            question.toLocaleLowerCase().includes(filter)
          )
          .map(({ question, answer }) => (
            <Accordion question={question} answer={answer} />
          ))}
      </dl>

      {/* <dl className="blades ng-star-inserted">
        <div className="head-row" hidden>
          {" "}
          Team Owners{" "}
        </div>
        <dt className="ng-star-inserted">Where do I get help?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What does the green asterisk and red dot mean beside a player's name?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is Fantrax free? If not, how much does it cost?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does Fantrax make money? Is there anything I can do to help?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where do I change my password, email, or other personal info?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I change my User ID / Username?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I forgot/lost my Password. How can I retrieve it?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What time zone does Fantrax use? Can I change it?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does the Fantrax Rewards System work? How can I use my Fantrax
          Points?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">Is my league safe on Fantrax?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I join a Commissioner league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I create a Commissioner league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is a Private Commissioner league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is a Listed Commissioner league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I find all the games/leagues that you offer, both for cash
          and for free?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where do I find the league(s) that I have created or have a team in?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why should I use Fantrax over any other fantasy sports website?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I'm a sports writer and would like to work for Fantrax. Who do I
          contact?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Do you have an online tutorial on how to set up or play in one of your
          leagues or games?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where can I view Fantrax's Terms of Service?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where can I view Fantrax's Privacy Policy?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">Where do you get your stats from?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where do you get your player news from?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to see which player news sources appear to me?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What screen resolution is best to use when accessing Fantrax.com?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is a Commissioner league/game, for example NFL Commissioner?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is a Standard Commissioner league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is a Premium Commissioner league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I downgrade my Premium Commissioner league to a Standard (free)
          Commissioner league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Do you have any sample Commissioner leagues for me to try out?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I find more information on your site-wide Salary Cap
          games/contests, such as the rules, salaries and cash/prize payouts?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I see how much cash and/or credit I have in my Fantrax
          account?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What's the difference between Cash, Credit and Premium League Credit
          in my Fantrax Account?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Are Fantrax's pay-to-play games legal?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I withdraw money from my Fantrax account?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I deposit money into my Fantrax account?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I use the money in my Fantrax account?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">Are your stats accurate/reliable?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a place I can see which features you have recently
          implemented?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does FANTRAX handle tax forms?&nbsp; Will I be receiving a
          1099-MISC and if so, when does it come and by what method is the
          amount calculated?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default General;
