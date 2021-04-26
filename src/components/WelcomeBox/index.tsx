import React from "react";
import BorderedButton from "../BorderedButton";

interface WelcomeBoxProps {
  setQuizStarted: (bool: boolean) => void;
}

const WelcomeBox = ({ setQuizStarted }: WelcomeBoxProps) => {
  return (
    <div className="start-quiz">
      <h1 className="title">Welcome to Trivia Challenge!</h1>
      <p className="desc">{`You will be presented with 10 True or False questions. \n Do you think you can score 100%?`}</p>
      <BorderedButton text="Start Quiz" onClick={() => setQuizStarted(true)} />
    </div>
  );
}

export default WelcomeBox;
