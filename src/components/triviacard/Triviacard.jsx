
import "./Triviacard.css";
import { useState } from "react";

const TriviaCard = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <article className="trivia-card">
            <h3>{question}</h3>

            <p className={`trivia-answer ${showAnswer ? "show" : ""}`}>
                {answer}
            </p>

            <button
                className="trivia-button"
                type="button"
                onClick={() => setShowAnswer(!showAnswer)}
            >
                {showAnswer ? "HIDE ANSWER" : "REVEAL ANSWER"}
            </button>
        </article>
    );
};

export default TriviaCard;
