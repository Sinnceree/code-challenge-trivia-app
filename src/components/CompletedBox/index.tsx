import React, { useEffect, useState } from "react";
import { QuestionObject } from "../../interfaces";

interface CompletedBoxProps {
  questions: QuestionObject[];
}

const CompletedBox = ({ questions }: CompletedBoxProps) => {
  const [score, setScore] = useState<number>(0);

  const calculateScore = () => {
    let correct = 0;

    for (const question of questions) {
      console.log(question)
      if (question.correct_answer === question.user_answer) {
        correct++;
      }
    }

    setScore(correct);
  }

  useEffect(() => {
    calculateScore();
  }, []);

  return (
    <section className="completed-quiz">
      <div className="score">You Scored {score}/10</div>
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
