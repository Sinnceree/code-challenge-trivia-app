import React, { useState } from "react";
import "./assets/css/main.scss"
import Quiz from "./components/Quiz";
import WelcomeBox from "./components/WelcomeBox";

const App = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  return (
    <div className="App">
      {quizStarted && <Quiz /> }
      {!quizStarted && <WelcomeBox setQuizStarted={setQuizStarted} />}
    </div>
  );
}

export default App;
