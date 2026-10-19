import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <a href="/home">Home</a>
            <a href="/players">Players</a>
            <a href="/teams">Teams</a>
            <a href="/wyh">Who's Your Hooper?</a>
            <a href="/about">About Us</a>
        </nav>
    );
};

export default Navigation;