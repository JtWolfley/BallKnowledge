
import "./Quiz.css";
import Quizquestion from "../../components/quizquestion/Quizquestion";

const Quiz = () => {
    return (
        <main id="quiz-page" className="page">

            <section id="quiz-hero">
                <p>FIND YOUR GAME</p>
                <h1>WHO'S YOUR HOOPER?</h1>
                <p>
                    Answer five questions and find the NBA player
                    who best matches your playstyle.
                </p>
            </section>

            <section id="quiz-content">
                <div id="quiz-title">
                    <h2>THE HOOPER QUIZ</h2>
                    <p>FIVE QUESTIONS. ONE PLAYER. WHAT'S YOUR GAME?</p>
                </div>

                <Quizquestion
                    number="01"
                    question="WHAT'S YOUR BIGGEST STRENGTH ON THE COURT?"
                    options={[
                        "SHOOTING",
                        "PLAYMAKING",
                        "ATHLETICISM",
                        "DEFENSE"
                    ]}
                />

                <Quizquestion
                    number="02"
                    question="WHEN THE GAME IS ON THE LINE, WHAT ARE YOU DOING?"
                    options={[
                        "TAKING THE SHOT",
                        "HELPING A TEAMMATE",
                        "GETTING A STOP",
                        "MAKING A BIG PLAY"
                    ]}
                />

                <Quizquestion
                    number="03"
                    question="HOW WOULD YOU DESCRIBE YOUR PLAYSTYLE?"
                    options={[
                        "EXPLOSIVE",
                        "CRAFTY",
                        "CONTROLLED",
                        "PHYSICAL"
                    ]}
                />

                <Quizquestion
                    number="04"
                    question="WHAT MATTERS MOST TO YOUR GAME?"
                    options={[
                        "SCORING",
                        "WINNING",
                        "TEAMWORK",
                        "DOMINANCE"
                    ]}
                />

                <Quizquestion
                    number="05"
                    question="PICK YOUR IDEAL ROLE ON A TEAM."
                    options={[
                        "GO-TO SCORER",
                        "FLOOR GENERAL",
                        "TWO-WAY STAR",
                        "ALL-AROUND LEADER"
                    ]}
                />

                <button id="quiz-submit" type="button">
                    SUBMIT
                </button>
            </section>

        </main>
    );
};

export default Quiz;
