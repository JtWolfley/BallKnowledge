import "./Header.css";
import logo from "./basketblogo.png";
import Navigation from "../navigation/Navigation";
const Header = () => {
    return (
        <header className="main-header">
            <img src="/images/basketblogo.png" alt="Beyond The Arc Logo" />
            <h1>Ball Knowledge</h1>
        </header>
    );
};

export default Header;