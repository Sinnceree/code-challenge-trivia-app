import React from "react";
import AnswersBox from "../AnswersBox";
import QuestionBox from "../QuestionBox";

const Quiz = () => {
  return (
    <div className="quiz-wrapper">
      <QuestionBox question="In &quot;The Sims&quot; series, the most members in a household you can have is 8." />
      <AnswersBox />
    </div>
  );
}

export default Quiz;
