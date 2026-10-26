import "./Triviacard.css";

const TriviaCard = ({ question, answer }) => {
    return (
        <article className="trivia-card">
            <h3>{question}</h3>

            <p className="trivia-answer">{answer}</p>

            <button className="trivia-button">
                REVEAL ANSWER
            </button>
        </article>
    );
};

export default TriviaCard;