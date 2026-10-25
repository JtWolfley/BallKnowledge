
import "./Hero.css";
import heroImage from "./images/homepageimage.png";

const Hero = () => {
    return (
        <section id="hero">
            <img src={heroImage} alt="Anthony Edwards" />

            <div id="hero-text">
                <p id="welcome">— WELCOME TO BEYOND THE ARC</p>

                <h2>
                    BASKETBALL,<br />
                    <span>BEYOND</span> THE<br />
                    BOX SCORE.
                </h2>

                <p>
                    Explore the players, teams, history, and knowledge
                    that make the NBA more than just a game.
                </p>

                <a href="/players" className="button">Explore the NBA</a>
            </div>
        </section>
    );
};

export default Hero;
