import React from "react";
import { roster } from "../../../state/faqData";
import Accordion from "../Accordion";

const Roster = ({ filter }) => {
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

      {/* <dt className="ng-star-inserted">
          {" "}
          How can I change the position(s) that a player is eligible at in my
          league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I configure a Team Kicking roster position for my league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I configure a Team Quarterback (QB) position for my league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          If I remove a position from my league's roster setup, what will happen
          to players on rosters who are already in that position slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What is the difference between setting the "Min/Max Games Played"
          restrictions for Starting Pitchers (SP) and Relief Pitchers (RP) in
          the "League Setup --&gt; Rosters" screen, and setting the "Games
          Started" and "Relief Appearances" restrictions in the "League Setup
          --&gt; Scoring --&gt; Min-Max" screen?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What will happen if I remove position eligibility from a player while
          that player is already set to that position on an owner's team for the
          current and/or previous periods?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I add or create a custom roster position to my league's roster
          setup that you don't already have available?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there an option that allows teams to move players on bye weeks to
          the Injured Reserve slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to allow the commissioner and/or other league owners to
          view other teams' rosters for upcoming periods in a Duplicate Player
          league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I create custom fields for players in the Team Roster screen
          that I can enter anything in?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there an easy way to force a team's roster for a particular period
          to be illegal and thus not accumulate stats?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there an easy way to force a team's illegal roster for a particular
          period to be legal and thus accumulate stats, without executing any
          transactions?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Where can I set the position eligibility rules according to Games
          Played?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I'm moving my league over from another site. How do I import rosters
          and other items from the previous site?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to make a roster illegal if a player in the Minors slot
          does not qualify for the Minors slot anymore?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why can't I set the total max per position for any type of Flex
          position?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there any way to lock position eligibility throughout the season so
          that no new eligibility can be gained?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there any way to make all players only eligible at 1 position
          throughout the season?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to force owners to move players out of the Injured
          Reserve slot once they become healthy?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to use Reserves with the "Count Best" feature?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way I can set min/max per position requirements for the
          number of rookies allowed on a team?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there any way to "link" 2 players together in the Team Roster
          screen? Specifically, when a player is moved to the IR slot and
          another player is called up to replace him, I want those 2 players
          linked somehow so that when the injured player is healthy again and
          reactivated, that team owner would know which player replaced him as
          that player must be dropped.
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Is there a way to adjust my league's roster restrictions only going
          forward, so that it doesn't affect previous periods?
        </dt>
        <dd className="ng-star-inserted"></dd> */}
      {/* 
      <dl className="blades ng-star-inserted">
        <div className="head-row"> Team Owners </div>
        <dt className="ng-star-inserted">What is an illegal roster?</dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do I see what players are starting today?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I automatically start active players?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why do some players say "Not On Team" on my Team Roster?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How do I see the stats and points that my Reserve players would have
          had?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why does the same player appear twice on my team roster under 2
          different position groups?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          How come I can see the same player on more than one team?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why can't I set my players to <i>Reserve</i> status in the Team Roster
          page? I only see the option to set to <i>Active</i>.{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why am I getting the message "You are not allowed to view this team's
          roster for any future periods"?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I put any hitter in the DH slot? If not, then which position do I
          need to use?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why does it show 2 Lineup Periods in advance when I go to the Team
          Roster screen?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where can I view probable opposing starters for my hitters and
          pitchers?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Is there a way to view all team rosters on 1 page?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Where can I find upcoming/scheduled/probable starts for my pitchers?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I view all PROBABLE 2-start pitchers in the league, or on my
          team?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can suspended players be moved to the Injured Reserve slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          When can I move a player to the Injured Reserve slot on my team
          roster? How do you determine player injuries?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why can't I move my player to the Injured Reserve slot when there is a
          red flag beside his name?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why is my team not accumulating any stats/points for 1 or more
          periods?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why are players in the Minors slot allowed to stay there after they
          don't qualify anymore based on my league's rules?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What does the "Prevent Illegal Rosters" rule mean?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          The dropdowns in the <i>Status</i> and <i>Position</i> columns don't
          appear in the Team Roster page and I thus can't make any lineup
          changes. Why is this happening?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why am I allowed to keep a player in the Injured Reserve slot now that
          he's healthy? How long do I have until I have to activate or reserve
          him?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What determines which players are eligible to be moved to the Minors
          slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can a team use separate lineups/rosters for each different matchup my
          team has in a scoring period (e.g. if I had a double-header)?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How can I view 2018 (or any previous year's) stats on the Team Roster
          screen?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What does it mean when a player is set to Active status in the Team
          Roster screen?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What does it mean when a player is moved to the Reserve slot in the
          Team Roster screen?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How do auto substitutions work in EPL leagues?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Can I move players on bye weeks to the Injured Reserve slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Why can't I or any other team view team rosters for upcoming periods
          in my Duplicate Player league?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          Can I copy my roster from one league to another?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          My player is in the minors on a rehab assignment, so why does he does
          not appear with a green flag next to his name and thus qualify to be
          moved to the Minors slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          If I have an illegal roster, do my Games Played or any other stats get
          counted towards the min/max restrictions?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          {" "}
          What formula do you use for "pace" in the Min/Max tab in the Team
          Roster screen?{" "}
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How does your "Injured Reserve Enforcement Type" premium feature work?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          Why are teams being allowed to carry more reserve players than
          allowed?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          How many games must a player play at a new position to gain
          eligibility at that position?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I have a player in the minors who got injured but doesn't have the red
          injury flag next to his name. How come?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I have a suspended player who just got sent to the NFL IR. Will he get
          the red flag next to his name so I can move him to the IR slot?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          I have an injured player who just got suspended. Which flag will
          appear next to his name?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What happens to the status of players who are sent to the World Junior
          Championships in my NHL league?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">
          What does the "(R)" mean next to a player's name?
        </dt>
        <dd className="ng-star-inserted"></dd>
        <dt className="ng-star-inserted">How does the keeper rollover work?</dt>
        <dd className="ng-star-inserted"></dd>
      </dl> */}
    </>
  );
};

export default Roster;
