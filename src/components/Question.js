import { useEffect, useState } from "react";

export default function Question(props) {
  useEffect(() => {
    if (props.isOver && selectedAnswer === indexOfCorrectAnswer) {
      setCorrect(true);
      props.correct();
    }
  }, [props.isOver]);

  function groupAnswers() {
    let allAnswers = props.incorrectAnswers.map((x) => htmlDecode(x));
    allAnswers.push(htmlDecode(props.correctAnswer));
    shuffleArray(allAnswers);
    return allAnswers;
  }

  const [answers, setAnswers] = useState(groupAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [correct, setCorrect] = useState(false);

  const indexOfCorrectAnswer = answers.findIndex(
    (x) => x === htmlDecode(props.correctAnswer)
  );

  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function select(id) {
    if (props.isOver) return;
    setSelectedAnswer(id);
  }

  const answerElements = answers.map((x, index) => {
    let isSelected = index === selectedAnswer ? true : false;
    let classes = "";

    if (props.isOver) {
      if (isSelected) {
        if (correct) {
          classes = classes + "answer--correct";
        } else classes = classes + "answer--incorrect";
      } else classes = classes + "answer--locked";
    } else {
      if (isSelected) classes = classes + "answer--selected";
      else classes = classes + "answer--unselected";
    }

    return (
      <button
        onClick={() => select(index)}
        key={index}
        className={`answer ${classes}`}
      >
        {x}
      </button>
    );
  });

  return (
    <div className="question-container">
      <h3 className="question">{htmlDecode(props.question)}</h3>
      <div className="answers-container">{answerElements}</div>
      <hr className="question__line" />
    </div>
  );
}
