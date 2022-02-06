import Confetti from "react-confetti";

export default function Restart(props) {
  return (
    <div className="restart">
      You scored {props.points}/5 correct answers
      {props.points === 5 && <Confetti />}
      <button onClick={props.restartGame} className="action__btn btn--restart">
        Play again
      </button>
    </div>
  );
}
