import "./Footer.css";
import logo from "./images/basketblogo.png";

const Footer = () => {
    return (
        <footer>
            <a href="/" className="footer-logo">
                <img src={logo} alt="Beyond The Arc Logo" />
                <span>Beyond The Arc</span>
            </a>

            <a
                href="https://jtwolfley.github.io/"
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Portfolio Page
            </a>

            <p>© 2026 Beyond The Arc</p>
        </footer>
    );
};

export default Footer;