import "./Header.css";
import logo from "./images/basketblogo.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-logo">
                <img src={logo} alt="Beyond The Arc Logo" />
                <h1>Ball Knowledge</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;