export default function Question(props) {
  return (
    <div className="question-container">
      <h3 className="question">
        In which country was the caesar salad invented?
      </h3>
      <div className="answers-container">
        <button className="answer answer--unselected">Italy</button>
        <button className="answer answer--unselected">Portugal omegalul</button>
        <button className="answer answer--unselected">
          The Great Kingdom of Bosnia
        </button>
        <button className="answer answer--unselected">
          Le baguette oui oui je parles Français
        </button>
      </div>
      <hr className="question__line" />
    </div>
  );
}
