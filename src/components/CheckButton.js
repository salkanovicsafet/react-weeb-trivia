export default function CheckButton(props) {
  return (
    <button onClick={props.endGame} className="action__btn">
      Check answers
    </button>
  );
}
