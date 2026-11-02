
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ onNavigate }) => {
    return (
        <ul className="main-nav">
            <li><Link to="/" onClick={onNavigate}>Home</Link></li>
            <li><Link to="/players" onClick={onNavigate}>Players</Link></li>
            <li><Link to="/teams" onClick={onNavigate}>Teams</Link></li>
            <li><Link to="/quiz" onClick={onNavigate}>Who's Your Hooper?</Link></li>
            <li><Link to="/about" onClick={onNavigate}>About Us</Link></li>
        </ul>
    );
};

export default Navigation;
