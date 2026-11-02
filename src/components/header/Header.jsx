
import "./Header.css";
import { useState } from "react";
import logo from "./images/basketblogo.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="main-header">
            <div className="header-logo">
                <img src={logo} alt="Beyond The Arc Logo" />
                <h1>Beyond The Arc</h1>
            </div>

            <button
                className="menu-toggle"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="header-navigation"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav
                id="header-navigation"
                className={`header-navigation ${menuOpen ? "open" : ""}`}
                aria-label="Main navigation"
            >
                <Navigation onNavigate={closeMenu} />
            </nav>
        </header>
    );
};

export default Header;
