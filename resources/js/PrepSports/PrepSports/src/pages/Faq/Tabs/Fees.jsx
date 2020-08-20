import React from "react";
import { scoring } from "../../../state/faqData";
import Accordion from "../Accordion";

const Fees = ({ filter }) => {
  return (
    <>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> League Commissioners </div>
        {scoring
          .filter(({ question }) =>
            question.toLocaleLowerCase().includes(filter)
          )
          .map(({ question, answer }) => (
            <Accordion question={question} answer={answer} />
          ))}
      </dl>
      {/* <dl className="blades ng-star-inserted">
        <div className="head-row"> League Commissioners </div>
        <dt className="ng-star-inserted">
          How do I override or change fees for claim or drop?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I'm tired of collecting the entry fees and transaction fees from all
          the owners in my league! Is there a way to get Fantrax to automate
          this?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I link the League Prizes setup with the Fantrax Treasurer, so that
          the money collected via the Treasurer will automatically be
          distributed to the winners at the end of the season?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When can I distribute the money from the Fantrax Treasurer to my
          league owners?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I distribute the money/payouts from the Fantrax Treasurer pool
          to my league owners?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there any way to distribute just part of the funds (submitted via
          the Treasurer) at the end of the season, and carry over the remaining
          funds into the new season when I renew my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I give a discount to another owner for their Fantrax Treasurer
          entry fee?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I edit a team owner's transaction fee (i.e. a lineup change,
          claim/drop, or trade) for an executed transaction?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why are some teams' transaction fees accrued not adding up correctly
          in the Team Info or Team Finances page?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I remove an owner from a league who's already made a Fantrax
          Treasurer payment? Can the payment be kept in the league, without the
          owner receiving a refund?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> Team Owners </div>
        <dt className="ng-star-inserted">
          Where can I track which owners have paid or still owe for their
          Fantrax Treasurer entry fees, transaction fees, etc.?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I request/receive a refund for the Fantrax Treasurer entry fee I
          paid in my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is the Fantrax Treasurer used for?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I pay for another team's league entry fee via the Fantrax
          Treasurer?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I win cash and/or prizes in any Fantrax leagues?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I had remaining funds carry over to a new season. How do I apply that
          to the premium fee?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why does my Paypal or Check Withdrawal show as Pending?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I see who has paid their share of the premium league fee?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I pay for another owner's share of the premium league fee?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I quit my league after I've made a Fantrax Treasurer payment?
          Will I get a refund?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What currency is being displayed on the site?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is it possible to quit and receive a full refund in your public
          Classic Draft contest?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default Fees;
