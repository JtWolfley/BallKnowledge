
import "./Players.css";
import Player from "../../components/player/Player";

import anthony from "../../components/player/images/anthony.png";
import victorw from "../../components/player/images/victorw.png";
import sga from "../../components/player/images/sga.png";
import jokic from "../../components/player/images/jokic.png";
import luka from "../../components/player/images/luka.png";
import brunson from "../../components/player/images/Brunson.png";
import giannis from "../../components/player/images/giannis.png";
import curry from "../../components/player/images/curry.png";

const Players = () => {
    return (
        <main id="players-page" className="page">

            <div id="players-heading">
                <p>AROUND THE LEAGUE</p>
                <h1>NBA PLAYERS</h1>
                <p>
                    Explore the stars of the NBA and learn about their teams,
                    positions, accomplishments, and performance on the court.
                </p>
            </div>

            <div id="player-search">
                <label>FIND A PLAYER</label>

                <div id="search-fields">
                    <input
                        type="text"
                        placeholder="SEARCH PLAYERS..."
                    />

                    <select defaultValue="all">
                        <option value="all">ALL POSITIONS</option>
                        <option value="PG">POINT GUARD</option>
                        <option value="SG">SHOOTING GUARD</option>
                        <option value="SF">SMALL FORWARD</option>
                        <option value="PF">POWER FORWARD</option>
                        <option value="C">CENTER</option>
                    </select>
                </div>
            </div>

            <div id="players-grid">
                <Player
                    name="ANTHONY EDWARDS"
                    team="SG - MINNESOTA TIMBERWOLVES"
                    image={anthony}
                    link="/players/anthony"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="VICTOR WEMBANYAMA"
                    team="C - SAN ANTONIO SPURS"
                    image={victorw}
                    link="/players/victorw"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="SHAI GILGEOUS-ALEXANDER"
                    team="PG/SG - OKLAHOMA CITY THUNDER"
                    image={sga}
                    link="/players/sga"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="NIKOLA JOKIC"
                    team="C - DENVER NUGGETS"
                    image={jokic}
                    link="/players/jokic"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="LUKA DONCIC"
                    team="PG - LOS ANGELES LAKERS"
                    image={luka}
                    link="/players/luka"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="JALEN BRUNSON"
                    team="PG - NEW YORK KNICKS"
                    image={brunson}
                    link="/players/brunson"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="GIANNIS ANTETOKOUNMPO"
                    team="PF - MILWAUKEE BUCKS"
                    image={giannis}
                    link="/players/giannis"
                    buttonText="VIEW STATS"
                />

                <Player
                    name="STEPHEN CURRY"
                    team="PG - GOLDEN STATE WARRIORS"
                    image={curry}
                    link="/players/curry"
                    buttonText="VIEW STATS"
                />
            </div>

        </main>
    );
};

export default Players;
