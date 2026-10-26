
import "./Teams.css";
import Team from "../../components/team/Team";

import wolves from "../../components/team/images/twolves.png";
import celtics from "../../components/team/images/Celtics.png";
import lakers from "../../components/team/images/Lakers.png";
import knicks from "../../components/team/images/knicks.png";
import nuggets from "../../components/team/images/nuggets.png";
import bulls from "../../components/team/images/bulls.jpg";

const Teams = () => {
    return (
        <main id="teams-page" className="page">

            <div id="teams-heading">
                <p>AROUND THE LEAGUE</p>
                <h1>NBA TEAMS</h1>
                <p>
                    Explore NBA teams and learn about their
                    conferences, players, and accomplishments.
                </p>
            </div>

            <div id="team-search">
                <label htmlFor="team-search-input">
                    FIND A TEAM
                </label>

                <div id="team-search-fields">
                    <input
                        id="team-search-input"
                        type="text"
                        placeholder="SEARCH TEAMS..."
                    />

                    <select defaultValue="all">
                        <option value="all">ALL CONFERENCES</option>
                        <option value="east">EASTERN CONFERENCE</option>
                        <option value="west">WESTERN CONFERENCE</option>
                    </select>
                </div>
            </div>

            <div id="teams-grid">
                <Team
                    name="MINNESOTA TIMBERWOLVES"
                    conference="WESTERN CONFERENCE"
                    image={wolves}
                    link="/teams/wolves"
                />

                <Team
                    name="BOSTON CELTICS"
                    conference="EASTERN CONFERENCE"
                    image={celtics}
                    link="/teams/celtics"
                />

                <Team
                    name="LOS ANGELES LAKERS"
                    conference="WESTERN CONFERENCE"
                    image={lakers}
                    link="/teams/lakers"
                />

                <Team
                    name="NEW YORK KNICKS"
                    conference="EASTERN CONFERENCE"
                    image={knicks}
                    link="/teams/knicks"
                />

                <Team
                    name="DENVER NUGGETS"
                    conference="WESTERN CONFERENCE"
                    image={nuggets}
                    link="/teams/nuggets"
                />

                <Team
                    name="CHICAGO BULLS"
                    conference="EASTERN CONFERENCE"
                    image={bulls}
                    link="/teams/bulls"
                />
            </div>

        </main>
    );
};

export default Teams;
