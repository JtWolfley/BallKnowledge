
import "./About.css";
import Contact from "../../components/contact/Contact";
import { Link } from "react-router-dom";

import basketball from "../../components/contact/images/about.png";

const About = () => {
    return (
        <main id="about-page" className="page">

            <section id="about-hero">
                <p>AROUND THE ARC</p>
                <h1>ABOUT US</h1>
                <p>
                    Ball is basketball fans who want to explore the players,
                    teams, history, and knowledge that make the NBA more
                    than just a game.
                </p>
            </section>

            <section id="about-content">
                <div id="about-intro">
                    <img src={basketball} alt="Basketball arena" />

                    <div id="about-intro-text">
                        <h2>MORE THAN THE BOX SCORE</h2>
                        <p>
                            Beyond The Arc is a basketball website built for
                            fans who want to learn more about the NBA.
                            Explore players, discover teams, compare stats,
                            and learn more about the game.
                        </p>
                    </div>
                </div>

                <div id="about-links">
                    <div className="about-card">
                        <h3>PLAYERS</h3>
                        <p>
                            Explore NBA stars, their positions, teams,
                            accomplishments, and stats.
                        </p>
                        <Link to="/players">EXPLORE</Link>
                    </div>

                    <div className="about-card">
                        <h3>TEAMS</h3>
                        <p>
                            Discover teams from across the league and
                            learn about their players and history.
                        </p>
                        <Link to="/teams">EXPLORE</Link>
                    </div>

                    <div className="about-card">
                        <h3>WHO'S YOUR HOOPER?</h3>
                        <p>
                            Take the quiz and find the NBA player who
                            matches your playstyle.
                        </p>
                        <Link to="/quiz">TAKE QUIZ</Link>
                    </div>
                </div>
            </section>

            <Contact />

        </main>
    );
};

export default About;
