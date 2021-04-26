import React from "react";
import { QuestionObject } from "../../interfaces";

interface CompletedBoxProps {
  questions: QuestionObject[];
}

const CompletedBox = ({ questions }: CompletedBoxProps) => {
  return (
    <section className="completed-quiz">
      <div className="score">You Scored 3/10</div>
      <ul className="answers">

        {questions && questions.map((question) => (
          <li className={`${question.correct_answer === question.user_answer ? "item correct" : "item incorrect" }`}>
            <h1 className="title" dangerouslySetInnerHTML={{__html: question.question }} />
            <p className="answer">{question.user_answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CompletedBox;
