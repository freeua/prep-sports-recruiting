import React from "react";
import { roster } from "../../../state/faqData";
import Accordion from "../Accordion";

const Salaries = ({ filter }) => {
  return (
    <>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> League Commissioners </div>
        {roster
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
          {" "}
          How can I reset all Free Agent or Waiver Wire player salaries to the
          default salary or a specific value?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I reset all Free Agent or Waiver Wire player contracts to the
          default contract or a specific contract?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I generate player salaries for my league? What formula is
          used?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to convert all players with a specific salary to
          another salary?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to convert all players with a specific contract type to
          another contract type?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to adjust the salary of all players up or down by a
          specific amount?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I adjust a specific team's salary cap? Can it be done for a
          specific period/week?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to import all of the players and their
          salaries/contracts into an Excel spreadsheet, edit that spreadsheet,
          and then upload it back to the site?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there to make players with certain contract types of my choosing
          undroppable?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to apply a cap hit penalty to team owners?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Do cap hit penalties change or carry over when I renew my league for
          the upcoming season?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I make every team's FAAB equal to their salary cap at all
          times?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> Team Owners </div>
        <dt className="ng-star-inserted">
          In my NBA/NHL league, there are contracts that say 2015. When exactly
          do they expire?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does Fantrax's automated contract system work?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted"> How do contract extensions work? </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Generated salaries changed and they don't look correct. Why?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why does my team's total salary not include all of the players on my
          team?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted"> Where do I edit salaries? </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What does a default contract mean?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way to display salaries in the thousands for leagues that
          use large salary figures?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way to choose the number of decimals that are displayed for
          every player's salary?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Which sports do you have real player salaries and cap hits for, and
          when do they get updated?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why am I not able to extend certain contracts in the Keeper Admin
          screen? The checkboxes are disabled.
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What happens to a player's contract after he is traded to another
          team?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default Salaries;
