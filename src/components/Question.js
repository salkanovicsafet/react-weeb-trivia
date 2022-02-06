export default function Question(props) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const allAnswers = props.incorrectAnswers;
  allAnswers.push(props.correctAnswer);
  shuffleArray(allAnswers);

  return (
    <div className="question-container">
      <h3 className="question">{props.question}</h3>
      <div className="answers-container">
        <button className="answer answer--unselected">Italy</button>
      </div>
      <hr className="question__line" />
    </div>
  );
}
