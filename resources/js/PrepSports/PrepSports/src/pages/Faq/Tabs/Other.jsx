import React from "react";
import { general } from "../../../state/faqData";
import Accordion from "../Accordion";

const Other = ({ filter }) => {
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
        <div className="head-row"> League Commissioners </div>
        <dt className="ng-star-inserted"> How do I create a league? </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted"> How do I delete a league? </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I invite my friends to join a league I have created?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why is the "Send Invitations" box disabled/greyed out in{" "}
          <i>League Setup --&gt; Teams &amp; Schedules --&gt; Teams</i>?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I create a consolation/losers' playoff bracket (A.K.A. "Toilet
          Bowl") for my head-to-head league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I add my own team to my league which I am the Commissioner of?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I schedule double-headers/multiple matchups per scoring period for
          teams in my head-to-head league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I want to prevent colluding/cheating in my league as much as possible.
          Are there any rules to prevent this?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I make changes to my league settings/rules after the draft has
          been completed?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I make my league a keeper league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I upload a logo for my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I create/join my own team in a league that I am the
          Commissioner of?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I duplicate/make a copy of my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When can I renew my league for the upcoming season?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I delete a post or thread I made in the message forums?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I upload team logos for the owners in my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I add or invite a 2nd owner (or multiple owners) to a team?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I assign a co-commissioner or multiple commissioners in my
          league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where do I replace or remove the owner of a team in my league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there any way to merge the period during the All-Star Break with
          the period before or after it?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there any way to have my head-to-head playoffs span 2 scoring
          periods each round, instead of 1 period per round?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where do I configure the playoff matchups/schedule for my head-to-head
          league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">What is Commissioner Mode?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I remove or delete a fantasy team along with its owner from my
          league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I make my league public and available for any Fantrax user to
          join?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I add a scoring category to my league so that I can view it in
          various pages (Team Roster, Standings, Players, etc.) but not count
          scoring for it?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way to exclude/filter out players from the available player
          pool who are not signed to a pro team (NFL, MLB, NBA, NHL, etc.)?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I remove an individual player from the player pool/entire
          league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What does the List Your League button do in the League Setup screens?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          There are matchups missing from certain teams in my league's H2H
          schedule. How can I regenerate the entire schedule so that all teams
          have an even number of matchups?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I make my league viewable to the public (i.e. users who don't own
          a team in my league)?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I messed my league up - is there a way to restore/recover it as of a
          previous date?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why is our league home page showing the wrong league champion at the
          end of our season? Can I change that?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way to hide messages in the live chat window in the league
          home page?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I lock the player pool so that no new players get added to our
          league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I set the # of teams that make the playoffs in my Head-to-Head
          league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I'm bringing my league over from another website and want to import my
          league's historical data, including all team rosters and transactions.
          Is this possible?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I add or remove a co-commissioner in my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          My NFL league has an odd number of teams. Is there a way to schedule
          the odd-team-out each week against the average score of all teams in
          the league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why is the Import Players/Offline Draft screen not available?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What happens exactly if I uncheck the "lock player pool" box in League
          Setup --&gt; Player Pool?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to disable email/chat/forum posting privileges in my
          league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I manually change the teams in the pool for my playoff league?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default Other;
