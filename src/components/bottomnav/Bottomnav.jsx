import "./Bottomnav.css";

const BottomNav = () => {
    return (
        <nav id="bottom-nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/players">Players</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/quiz">Who's Your Hooper?</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </nav>
    );
};

export default BottomNav;