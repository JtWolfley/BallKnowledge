import "./Header.css";
import logo from "./logo.png";
import Navigation from "../navigation/Navigation";
const Header = () => {
    return (
        <header className="main-header">
            <img src="logo.png" alt="Ball Knowledge Logo" />
            <h1>Ball Knowledge</h1>
        </header>
    );
};

export default Header;