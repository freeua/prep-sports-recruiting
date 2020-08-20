import React from "react";
import Accordion from "../Accordion";
import { scoring } from "../../../state/faqData";

const Scoring = ({ filter }) => {
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
      {/* <dt className="ng-star-inserted">
          {" "}
          Can I apply my league's minimum and maximum requirements for Games
          Played or other scoring categories for the entire season, for my
          Head-to-Head league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          If I make changes to our league's scoring system after the season has
          started, do I need to update the scores/stats/standings?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I add or create a custom scoring category to my scoring system
          that you don't already have available?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How can I award fractional or decimal points in my scoring system?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do i add or subtract points to a team's score in the standings?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Do you have the "Tackles for Loss" category available?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way for me to set whether or not pitchers accumulate
          hitting stats?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I configure the scoring for our league's Flex (RB/WR/TE) position
          so that it's dependent on the position of the player in that Flex
          position?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to penalize players playing who are not playing agaisnt
          Division I FBS opponents in my NCAA league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to allow owners to designate a captain for their team,
          so that the captain earns double (2x) the points he normally would?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to change my scoring system during the season so that
          it only takes effect going forward, and not retroactively?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I set a specific timeframe where stats become locked and stat
          corrections cannot occur anymore?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why did a team's score for a previous period change?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I run a playoff in my Rotisserie league at the end of the season?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to do weekly Rotisserie scoring instead of yearly?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does the "Count Best" feature work? Does it count the best players
          on a daily/weekly basis?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          <span>
            If a team's opponent is not a Division 1 FBS team, will that game
            count in my NCAA league?
          </span>
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl>
      <dl className="blades ng-star-inserted">
        <div className="head-row"> Team Owners </div>
        <dt className="ng-star-inserted">
          Why are Nascar stage points behind in live scoring?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does a Rotisserie-Based scoring system work?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          On the new Live Scoring screen, how can I see the view most similar to
          the old Live Scoring screen?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does a Points-Based scoring system work?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does a Head-to-Head scoring system work?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where can I find the definition/explanation of a scoring category?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a simple way to view which teams have illegal rosters for
          which lineup periods, without having to go through every team and
          every period?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What happens if a team does not meet the Minimum GP (Games Played)
          required for a particular position?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What happens if a team exceeds the Maximum GP (Games Played) allowed
          for a particular position?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          If I have a Relief Pitcher who starts a game, does it count as a Game
          Played (GP) against the RP or SP position?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Will my pitchers accumulate hitting stats?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How are partial Innings Pitched (IP) scored? Do you count them, or
          just the full IP?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why didn't my Team Defense/Special Teams get credit for a Blocked
          Field Goal, but the opposing NFL team did?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why didn't my Team Defense/Special Teams get credit for a Blocked
          Extra Point, but the opposing NFL team did?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Does the Extra Point (XP) kicked after a Touchdown count against the
          Team Defense or Special Teams?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do Assisted Tackles and Solo Tackles count towards total Tackles?
          Are Assisted Tackles worth half a Tackle?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Will players traded to a real (MLB, NFL, etc.) team outside of my
          league's player pool continue to accumulate stats/points?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why are players of a specific position not accumulating any
          stats/points on my team for 1 or more periods?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why does it show that my Reserve players are accumulating stats/points
          in the Team Roster page?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted"> What is a Scoring Period? </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What happens to my league's scoring with a game that is resumed on
          another day? Which lineup period will it apply to?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What does the "Players will always accumulate stats in all scoring
          category groups" rule mean in the League Rules Summary page?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why is my team showing zero for a scoring category when he definitely
          has scored that stat?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why are the point totals on the Team Roster screen not matchup up with
          the point totals in the standings?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why is the "Overtime Losses (OTL)" scoring category not available in
          my NHL Playoff Commissioner league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What happens to the stats of golfers who disqualify or withdraw from a
          PGA tournament?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why are both my Starting and Relief Pitchers not accumulating any
          stats anymore?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          When do stats and scores get updated for PGA tournaments?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How are fake field goals and fake punts scored? Do the Special Teams
          get credit?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I view stat corrections that have been made, and how long
          after games occur can stats be changed?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How are suspended games treated? Which date/period do they count
          towards?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How are postponed games treated? Which date/period do they count
          towards?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          <span className="collab-selectable-content-wrapper">
            Why does Live Scoring show different games/minutes played totals
            than the team roster or standings screens?
          </span>
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why does the Period view for my Head-to-Head matchup in Live Scoring
          show more Active players than the roster restrictions allow (and more
          than the Period view on my Team Roster)?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to view the scoring for my bench/reserve players?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          My Live Scoring is not calculating stats properly. Will this get
          fixed?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why aren't certain games/teams being scored live in Live Scoring in my
          NCAAF league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why do my points in Live Scoring not match up with my points in the
          Standings or Team Roster screens?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why does my player's fantasy points in the player profile game log not
          match up with his points in the Team Roster or Live Scoring screen for
          a particular game?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          If I have a player that has a double gameweek in my EPL league, is
          there a way to count only one of those games, or will both games
          count?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How come my player didn't get credit for a Clean Sheet Against
          Defender?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          <span>
            Why can't I tell which players are being counted in my "count best"
            league?
          </span>
        </dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default Scoring;
