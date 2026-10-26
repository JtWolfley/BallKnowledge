import "./Quizquestion.css";

const QuizQuestion = ({ number, question, options }) => {
    return (
        <div className="quiz-question">
            <div className="question-heading">
                <span className="question-number">{number}</span>
                <h3>{question}</h3>
            </div>

            <div className="quiz-options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        type="button"
                        className="quiz-option"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
