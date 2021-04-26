import React from "react";

const QuestionBox = (props: { question: string; }) => {
  return (
    <section className="question">
      <div className="completed">Question 1/10</div>
      <h1 className="text">{props.question}</h1>
    </section>
  );
}

export default QuestionBox;
