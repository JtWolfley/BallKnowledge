
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Player from "../../components/player/Player";
import Highlights from "../../components/highlights/Highlights";
import Numbers from "../../components/numbers/Numbers";
import Trivia from "../../components/trivia/Trivia";

import anthony from "../../components/player/images/anthony.png";
import victorw from "../../components/player/images/victorw.png";
import sga from "../../components/player/images/sga.png";

const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />

            <section id="players">
                <div id="players-title">
                    <p>AROUND THE LEAGUE</p>
                    <h2>PLAYERS TO WATCH THIS SEASON</h2>
                </div>

                <div id="player-list">
                    <Player
                        name="ANTHONY EDWARDS"
                        team="G - MINNESOTA TIMBERWOLVES"
                        image={anthony}
                        link="/players/anthony"
                    />

                    <Player
                        name="VICTOR WEMBANYAMA"
                        team="C - SAN ANTONIO SPURS"
                        image={victorw}
                        link="/players/victorw"
                    />

                    <Player
                        name="SHAI GILGEOUS-ALEXANDER"
                        team="G - OKLAHOMA CITY THUNDER"
                        image={sga}
                        link="/players/sga"
                    />
                </div>
            </section>

            <Highlights />
            <Numbers />
            <Trivia />
        </div>
    );
};

export default Home;
