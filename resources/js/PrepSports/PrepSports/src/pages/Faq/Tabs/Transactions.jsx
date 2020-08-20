import React from "react";
import Accordion from "../Accordion";
import { general } from "../../../state/faqData";

const Transactions = ({ filter }) => {
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
        <dt className="ng-star-inserted">
          {" "}
          How do I allow off-season player claims and drops?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I allow off-season trades?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I manually send all Free Agents to the Waiver Wire?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I manually run the Waiver Wire processing system?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I reverse/undo a lineup change so that it's completely removed
          from my league's transaction history?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I reverse/undo a claim/drop transaction so that it's
          completely removed from my league's transaction history?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I execute a claim/drop for another team, retroactive to a
          previous lineup period?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I execute a lineup change for another team, retroactive to a
          previous lineup period?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I execute a trade for any teams, retroactive to a previous
          lineup period?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I manually edit the WW (Waiver Wire) or FA (Free Agent) claim
          priority order?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there an automated way to make all players go on waivers at a set
          time every day/week or when their games start?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there any way that I can adjust the players on the "Can't Drop
          List"?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way to allow myself or any team to view other teams'
          pending claims &amp; bids?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I choose between a blind or open Free Agent Bidding system?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there any way to process a trade immediately, or do we have to wait
          until the voting period ends?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to control whether or not failed claims/bids can be
          seen, the reason for the failed claim/bid, and who sees them?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to prevent players who were dropped one week/period
          from being claimed until the next week/period?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to lock transactions for specific team owners?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to disable claim/drop privileges in my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to disable lineup change privileges in my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to disable trading privileges in my league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to lock transactions for teams that have not qualified
          for the playoffs in our league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I want to make all available players always remain on waivers for the
          entire season, with a rolling WW priority order where a team with a
          successful claim goes to the bottom of the order. All claims are
          processed every week, and players are never available for FCFS (First
          Come First Serve) pickup. How do I accomplish this?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I make it so that every player goes on waivers once his game
          begins?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I want to set up my NFL league so that all players are on waivers once
          their game starts for the week.&nbsp; Then they continue to be on
          waivers until waivers are processed on Wednesday morning at 3 am,
          according to the reverse order of the standings.&nbsp; Any unclaimed
          player will become a free agent and can be claimed on a first come
          first serve basis right up until their game time that week, at which
          time they'll be waived again. All players dropped from teams should
          remain on waivers for 2 days (48 hours), and then become a free agent
          (unless claimed of course).
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there an option to automatically waive all available players that
          have been activated by their pro team (MLB, NFL, etc.) from the
          minors, Injured Reserve, or suspension?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can players be traded during the draft?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to see which owners have vetoed a trade?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to have weekly lineup periods for claims/drops and
          trades, and daily lineup periods for lineup changes?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to have daily lineup periods for lineup changes that
          involve an injured player, and weekly lineup periods for everything
          else (all other lineup changes, claims/drops and trades)?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I change a player's status from Waiver Wire to Free Agent or vice
          versa?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to change a specific player's off-waiver date?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there an option that will force an owner to move an injured player
          out of an Active slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> Team Owners </div>
        <dt className="ng-star-inserted">
          {" "}
          How does the Waiver Wire process work?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          League Transaction History is not showing on my league home screen.
          Why?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How does Fantrax's Free Agent Bidding system work? Is it blind or
          open?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What is a Lineup Period and what are the different types?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I reverse/undo a lineup change that I made so that it's
          completely removed from the Transaction History screen?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I reverse/undo a claim/drop transaction that I made so that
          it's completely removed from the Transaction History screen?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I cancel a pending claim that I made before it gets processed?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I order/prioritize my pending claims/drops and make them
          contingency-based?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          I claimed a player and the Transaction History page says it was
          successfully executed, but I don't see him on my team. How come?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          I dropped a player and the Transaction History page says it was
          successfully executed, but I still see him on my team. How come?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When exactly do my maximum claims allowed per week get reset?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why doesn't my league allow trades? I don't see the <i>Trade</i> menu
          link anywhere.{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why doesn't my league allow claims or drops? I don't see the{" "}
          <i>Claim/Drop</i> menu link anywhere.{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I adjust the bid amount for my Free Agent claim without having to
          re-do that claim?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I adjust the order of my Free Agent or Waiver Wire claims, without
          having to re-do them?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do i create conditional Waiver Wire or Free Agent claims/bids?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why can't I make lineup changes? The dropdown boxes for the Status and
          Position columns are greyed out and disabled!{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Am I able to make claims/drops and trades in the off-season (i.e. once
          the season is over)?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When do players go on waivers (i.e. the Waiver Wire)?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When do players become Free Agents?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          When I claim/add a FA/WW player, will I acquire his stats/points from
          the beginning of the season? If not, then how can this be done?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When I drop a player from my team, will I lose the stats or points
          that he previously accumulated for my team while he was in an Active
          slot? If not, then how can this be done?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          When I make a trade, will I acquire the stats/points from the players
          I acquired from the beginning of the season, and will I lose the
          stats/points from the players I traded away? If not, then how can this
          be done?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          I'm having trouble making lineup changes due to an error in your
          system. What happens if this isn't fixed before the deadline? Am I
          screwed?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          My claim was denied due to the reason "The maximum # of claims set for
          the Pending Claim Group that this player was in was reached". What
          does that mean?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why were only 1 of my own or my league members' claims successful,
          when we each had several pending claims?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">What is the "Can't Drop List"?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How exactly does the trade deadline work? What is the last day that
          trades can be made?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How come teams in my league are being allowed to exceed the max claims
          per week limit?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do the different trade voting systems work?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why do I get the message "This league does not allow a player to be
          claimed without dropping one, or a player to be dropped without
          claiming one" when trying to just claim or just drop a player?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is it possible to execute a claim/drop that will take effect for the
          following week or lineup period, even if one of the players has not
          played in the current week?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          I submitted a Waiver Wire claim, yet when I look at the execution date
          in the Pending Transactions screen, it doesn't show the next WW
          processing date, rather the one after that instead. How come?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          I have pending claims for free agent players and waiver wire players.
          Which ones will be processed first?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why do I have to prioritize my bids for the same player from highest
          to lowest bid amount?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I make lineup changes (i.e. move 1 or more players to an
          Active, Reserve, Injured Reserve or Minors slot)?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why isn't the Waiver Wire claim order ever being reset according to
          the reverse order of the standings?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why isn't the Free Agent claim order ever being reset according to the
          reverse order of the standings?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Are 3-way/multi-team trades possible?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to view the reason why a claim/bid was denied for my
          team and/or other teams?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          A player was dropped in my league and went directly to Free Agency
          instead of going to the Waiver Wire. What Happened?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to drop multiple players at once, conditional upon my
          claim being successful?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When voting on a trade, for teams with multiple owners, does each
          owner get a vote or is it just 1 vote per team?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Do claims count against the max in the off-season or before the draft?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          The Free Agent bid tiebreaker is set to "Reverse order of the
          standings", but what happens when bids are tied before the season
          begins?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Our Waiver Wire priority order is set to the "Reverse order of the
          standings", but what happens before the season begins?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          The claim processing system ran a bit later than it was supposed to.
          Is there something wrong with it or my league settings?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does the maximum claims per week setting work with merged periods?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why didn't a free agent player get awarded to the highest bidder?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I view trade comments or notes?
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default Transactions;
