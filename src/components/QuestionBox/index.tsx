import React from "react";

interface QuestionBoxProps {
  question: string;
  currentIndex: number;
}

const QuestionBox = ({ question, currentIndex }: QuestionBoxProps) => {
  return (
    <section className="question">
      <div className="completed">Question {currentIndex}/10</div>
      <h1 className="text">{question}</h1>
    </section>
  );
}

export default QuestionBox;
