import React, { useEffect, useState } from "react";
import { QuestionObject } from "../../interfaces";
import BorderedButton from "../BorderedButton";

interface CompletedBoxProps {
  questions: QuestionObject[];
  handlePlayAgain: () => void;
}

const CompletedBox = ({ questions, handlePlayAgain }: CompletedBoxProps) => {
  const [score, setScore] = useState<number>(0);

  const calculateScore = () => {
    let correct = 0;

    for (const question of questions) {
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
      <BorderedButton text="Play Again!" onClick={handlePlayAgain} />
    </section>
  );
}

export default CompletedBox;
