import React from "react";

interface QuestionBoxProps {
  question: string;
  currentIndex: number;
  maxQuestions: number;
}

const QuestionBox = ({ question, currentIndex, maxQuestions }: QuestionBoxProps) => {
  return (
    <section className="question">
      <div className="completed">Question {currentIndex}/{maxQuestions}</div>
      <h1 className="text" dangerouslySetInnerHTML={{__html: question }} />
    </section>
  );
}

export default QuestionBox;
