import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/quiz">Who's Your Hooper?</Link></li>
            <li><Link to="/about">About Us</Link></li>
        </ul>
    );
};

export default Navigation;