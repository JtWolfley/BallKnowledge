import "./Playerpreview.css";
import { Link, useParams } from "react-router-dom";

import anthony from "../player/images/anthony.png";
import victorw from "../player/images/victorw.png";
import sga from "../player/images/sga.png";
import jokic from "../player/images/jokic.png";
import luka from "../player/images/luka.png";
import brunson from "../player/images/Brunson.png";
import giannis from "../player/images/giannis.png";
import curry from "../player/images/curry.png";

const players = {
    anthony: {
        name: "ANTHONY EDWARDS",
        team: "MINNESOTA TIMBERWOLVES",
        position: "SG - #5",
        image: anthony,
        stats: ["26.6 PPG", "5.7 REB", "4.5 AST"],
        description: "One of the league's most explosive young scorers, known for athleticism and aggressive shot creation. Coming off of his highest scoring season yet, there's no reason to think that Edwards will slow down anytime soon."
    },
    victorw: {
        name: "VICTOR WEMBANYAMA",
        team: "SAN ANTONIO SPURS",
        position: "C - #1",
        image: victorw,
        stats: ["24.3 PPG", "11.0 REB", "3.7 AST"],
        description: "A versatile young superstar known for his incredible height, defensive ability, and unique offensive skills."
    },
    sga: {
        name: "SHAI GILGEOUS-ALEXANDER",
        team: "OKLAHOMA CITY THUNDER",
        position: "PG/SG - #2",
        image: sga,
        stats: ["32.7 PPG", "5.0 REB", "6.4 AST"],
        description: "An elite scorer known for his footwork, efficient shooting, and ability to control the pace of the game."
    },
    jokic: {
        name: "NIKOLA JOKIC",
        team: "DENVER NUGGETS",
        position: "C - #15",
        image: jokic,
        stats: ["29.6 PPG", "12.7 REB", "10.2 AST"],
        description: "A three-time MVP known for his exceptional passing, rebounding, and basketball IQ."
    },
    luka: {
        name: "LUKA DONCIC",
        team: "LOS ANGELES LAKERS",
        position: "PG - #77",
        image: luka,
        stats: ["28.2 PPG", "8.2 REB", "7.7 AST"],
        description: "A gifted playmaker and scorer known for his creativity, step-back shooting, and court vision."
    },
    brunson: {
        name: "JALEN BRUNSON",
        team: "NEW YORK KNICKS",
        position: "PG - #11",
        image: brunson,
        stats: ["26.0 PPG", "2.9 REB", "7.3 AST"],
        description: "A skilled point guard known for his footwork, leadership, and clutch scoring."
    },
    giannis: {
        name: "GIANNIS ANTETOKOUNMPO",
        team: "MILWAUKEE BUCKS",
        position: "PF - #34",
        image: giannis,
        stats: ["30.4 PPG", "11.5 REB", "6.5 AST"],
        description: "A dominant two-way superstar known for his athleticism, finishing ability, and defensive versatility."
    },
    curry: {
        name: "STEPHEN CURRY",
        team: "GOLDEN STATE WARRIORS",
        position: "PG - #30",
        image: curry,
        stats: ["24.5 PPG", "4.4 REB", "6.0 AST"],
        description: "One of the greatest shooters in NBA history, known for his incredible three-point range and ball handling."
    }
};

const PlayerPreview = () => {
    const { id } = useParams();
    const player = players[id];

    if (!player) {
        return <h2>Player not found</h2>;
    }

    return (
        <main id="player-preview">
            <div id="preview-image">
                <img src={player.image} alt={player.name} />
            </div>

            <div id="preview-info">
                <h1>{player.name}</h1>
                <h2>{player.team}</h2>
                <h3>{player.position}</h3>

                <div id="stats">
                    {player.stats.map((stat, index) => (
                        <p key={index}>{stat}</p>
                    ))}
                </div>

                <p id="player-description">
                    {player.description}
                </p>

                <Link to="/players" className="button">
                    BACK TO PLAYERS
                </Link>
            </div>
        </main>
    );
};

export default PlayerPreview;