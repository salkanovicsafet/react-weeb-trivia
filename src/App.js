import { useState } from "react";
import CheckButton from "./components/CheckButton";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Restart from "./components/Restart";

export default function App() {
  const [isIntro, setIsintro] = useState(true);

  function startQuiz() {
    setIsintro(false);
  }

  return (
    <div className={`main blobs ${isIntro ? "blobs--big" : "blobs--small"}`}>
      {isIntro && <Intro startQuiz={startQuiz} />}
      <div className="container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <div className="action">
          {/*<CheckButton />*/}
          <Restart />
        </div>
      </div>
    </div>
  );
}
