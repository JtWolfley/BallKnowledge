
import "./Numbers.css";

const Numbers = () => {
    return (
        <section id="numbers">
            <p id="numbers-small">THE NBA</p>

            <h2>BY THE NUMBERS</h2>

            <div id="number-list">
                <article className="number">
                    <h3>30</h3>
                    <p>TEAMS</p>
                </article>

                <article className="number">
                    <h3>2</h3>
                    <p>CONFERENCES</p>
                </article>

                <article className="number">
                    <h3>82</h3>
                    <p>GAMES</p>
                </article>
            </div>

            <h3 id="champion">ONE LEAGUE. ONE CHAMPION.</h3>
        </section>
    );
};

export default Numbers;
