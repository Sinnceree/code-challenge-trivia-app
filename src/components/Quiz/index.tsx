import React, { useState } from "react";
import { QuestionObject } from "../../interfaces";
import AnswersBox from "../AnswersBox";
import BorderedButton from "../BorderedButton";
import CompletedBox from "../CompletedBox";
import QuestionBox from "../QuestionBox";

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionObject[]>([{
    "category": "Entertainment: Video Games",
    "type": "boolean",
    "difficulty": "hard",
    "question": "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    }]);
  const [currentQuestionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"True" | "False" | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSelectedAnswer = (answer: "True" | "False" | null) => {
    console.log(answer)
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    // First let's check if the user answered this question or not.
    if (!selectedAnswer) {
      return console.log("Please select a answer.")
    }

    // Lets duplicate the arr temp so we can mutate it
    const newQuestionsArr = questions;
    newQuestionsArr[currentQuestionIndex].user_answer = selectedAnswer;
    setQuestions(newQuestionsArr);

    // Now lets move to next question if there is one
    const newIndex = currentQuestionIndex + 1;

    // If the new index is higher then the length of array do nothing
    if (newIndex >= questions.length) {
      return setCompleted(true)
    }

    setQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);

    console.log(questions);
  }

  return (
    <div className="quiz-wrapper">
      {!completed ? 
        <React.Fragment>
          <QuestionBox question={questions[currentQuestionIndex].question} currentIndex={currentQuestionIndex + 1} />
          <AnswersBox handleSelectedAnswer={handleSelectedAnswer} selectedAnswer={selectedAnswer} />
          <BorderedButton text="Next Question" onClick={handleNextQuestion} />
        </React.Fragment>
        :
        <CompletedBox questions={questions} />
      }

    </div>
  );
}

export default Quiz;
