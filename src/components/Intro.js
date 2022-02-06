export default function Intro(props) {
  return (
    <div className="intro">
      <h1 className="intro__title">Weeb trivia</h1>
      <h2 className="intro__description">
        How big of a weeb are you? Click the button below and find out!
      </h2>
      <button onClick={props.startQuiz} className="intro__btn">
        Start quiz
      </button>
    </div>
  );
}
