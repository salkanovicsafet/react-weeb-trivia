import { useEffect, useState } from "react";
import CheckButton from "./components/CheckButton";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Restart from "./components/Restart";

export default function App() {
  const [isIntro, setIsintro] = useState(true);
  const [trivia, setTrivia] = useState("");
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setTrivia(data.results));
  }, [isIntro]);

  function startQuiz() {
    setIsintro(false);
    let newQuestions = trivia.map((x, index) => {
      return (
        <Question
          key={index}
          correctAnswer={x.correct_answer}
          incorrectAnswers={x.incorrect_answers}
          question={x.question}
          correct={addPoint}
          isOver={isOver}
        />
      );
    });
    setQuestions(newQuestions);
  }

  function addPoint() {
    setPoints((prevPoints) => ++prevPoints);
  }

  return (
    <div className={`main blobs ${isIntro ? "blobs--big" : "blobs--small"}`}>
      {isIntro && <Intro startQuiz={startQuiz} />}
      <div className="container">
        {questions}
        <div className="action">
          <CheckButton />
          {/*<Reset />*/}
        </div>
      </div>
    </div>
  );
}
