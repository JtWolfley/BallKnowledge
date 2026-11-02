
import "./Player.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Player = ({
    name,
    team,
    image,
    link,
    buttonText = "VIEW PLAYER"
}) => {
    return (
        <motion.article
            className="player"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
        >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{team}</p>

            <Link to={link} className="player-button">
                {buttonText}
            </Link>
        </motion.article>
    );
};

export default Player;
