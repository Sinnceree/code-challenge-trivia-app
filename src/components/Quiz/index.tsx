import React, { useEffect, useState } from "react";
import { QuestionObject } from "../../interfaces";
import AnswersBox from "../AnswersBox";
import BorderedButton from "../BorderedButton";
import CompletedBox from "../CompletedBox";
import QuestionBox from "../QuestionBox";

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionObject[]>([]);
  const [currentQuestionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"True" | "False" | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchQuestions = async () => {
    const questionsRaw = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
    const questionsData = await questionsRaw.json();
    setQuestions(questionsData.results);
    setLoading(false);

  }

  const handleSelectedAnswer = (answer: "True" | "False" | null) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    // First let's check if the user answered this question or not.
    if (!selectedAnswer) {
      return alert("Please select a answer!")
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
  }

  const handlePlayAgain = () => {
    // Lets reset all the game state
    setLoading(true)
    setSelectedAnswer(null);
    setQuestions([]);
    setQuestionIndex(0);
    setCompleted(false);

    // Now lets fetch new questions
    fetchQuestions();
  }

  // Fetch questions on component mount.
  useEffect(() => {
    fetchQuestions();
  }, [])

  return (
    <div className="quiz-wrapper">
      {!completed && !loading &&
        <React.Fragment>
          <QuestionBox question={questions[currentQuestionIndex].question} currentIndex={currentQuestionIndex + 1} maxQuestions={questions.length} />
          <AnswersBox handleSelectedAnswer={handleSelectedAnswer} selectedAnswer={selectedAnswer} />
          <BorderedButton text="Next Question" onClick={handleNextQuestion} />
        </React.Fragment>
      }

      {completed && !loading && <CompletedBox questions={questions} handlePlayAgain={handlePlayAgain} />}

    </div>
  );
}

export default Quiz;
