import { useState } from "react";
import Intro from "./components/Intro";

export default function App() {
  const [isIntro, setIsintro] = useState(true);

  function startQuiz() {
    setIsintro(false);
  }

  return (
    <div className={`main blobs ${isIntro ? "blobs--big" : "blobs--small"}`}>
      {isIntro && <Intro startQuiz={startQuiz} />}
    </div>
  );
}
