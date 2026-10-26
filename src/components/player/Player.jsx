import "./Player.css";
import { Link } from "react-router-dom";

const Player = ({ name, team, image, link, buttonText = "VIEW PLAYER" }) => {
    return (
        <article className="player">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{team}</p>
            <Link to={link} className="player-button">
                {buttonText}
            </Link>
        </article>
    );
};

export default Player;