import React, { useState } from "react";
import { QuestionObject } from "../../interfaces";
import AnswersBox from "../AnswersBox";
import BorderedButton from "../BorderedButton";
import QuestionBox from "../QuestionBox";

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionObject[]>([]);
  const [currentQuestionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"True" | "False" | null>(null)

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
    setQuestions(newQuestionsArr)

    // Now lets move to next question if there is one
    console.log(questions)
  }

  return (
    <div className="quiz-wrapper">
      <QuestionBox question={questions[currentQuestionIndex].question} currentIndex={currentQuestionIndex + 1} />
      <AnswersBox handleSelectedAnswer={handleSelectedAnswer} selectedAnswer={selectedAnswer} />
      <BorderedButton text="Next Question" onClick={handleNextQuestion} />
    </div>
  );
}

export default Quiz;
