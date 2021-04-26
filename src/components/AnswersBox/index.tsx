import React from "react";

interface AnswersBoxProps {
  selectedAnswer: "True" | "False" | null;
  handleSelectedAnswer: (answer: "True" | "False" | null) => void;
}

const AnswersBox = ({ handleSelectedAnswer, selectedAnswer }: AnswersBoxProps) => {
  return (
    <section className="answer-list">
      <div className={`${selectedAnswer === "True" ? "answer selected" : "answer"}`} onClick={() => handleSelectedAnswer("True")}>True</div>
      <div className={`${selectedAnswer === "False" ? "answer selected" : "answer"}`} onClick={() => handleSelectedAnswer("False")}>False</div>
    </section>
  );
}

export default AnswersBox;
