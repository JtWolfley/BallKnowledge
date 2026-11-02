
import "./Highlights.css";

const Highlights = () => {
    return (
        <section id="highlights">
            <div id="highlights-title">
                <p>BEYOND THE GAME</p>
                <h2>NBA HIGHLIGHTS</h2>
            </div>

            <p id="highlights-description">
                Watch some of the most exciting moments of modern basketball
                and experience what makes the NBA special.
            </p>

            <div id="highlights-video">
                <iframe
                    src="https://www.youtube.com/embed/ujGSt-93qZo"
                    title="NBA Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default Highlights;
