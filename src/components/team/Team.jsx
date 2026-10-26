import "./Team.css";
import { Link } from "react-router-dom";

const Team = ({ name, conference, image, link }) => {
    return (
        <article className="team">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{conference}</p>
            <Link to={link} className="team-button">
                VIEW TEAM
            </Link>
        </article>
    );
};

export default Team;