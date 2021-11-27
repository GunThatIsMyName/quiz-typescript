import React, { useState } from "react";
import QuestionCard from "./components/questionQard";

// types
import { Difficulty, fetchQuiz, IQuizState } from "./utils/api";
const Total_QUESTIONS = 10;

type IAnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<IQuizState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<IAnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const data = await fetchQuiz(Total_QUESTIONS, Difficulty.Easy);
    setQuestions(data);
    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {
    console.log("???");
  };

  return (
    <>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === Total_QUESTIONS ? (
        <button onClick={startTrivia}>start</button>
      ) : null}
      {!gameOver && <p>scroe</p>}
      {loading && <p>loading...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestions={Total_QUESTIONS}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && (
        <button onClick={nextQuestion}>next question</button>
      )}
    </>
  );
};

export default App;
