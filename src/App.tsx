import React, { useState } from "react";
import QuestionCard from "./components/questionQard";

// types
import { Difficulty, fetchQuiz, IQuizState } from "./utils/api";
const Total_QUESTIONS = 10;

export type IAnswerObject = {
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
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if(correct)setScore (prev=>prev+1);
      const userAnswers = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer,
      }
      setUserAnswers(prev=>[...prev,userAnswers])
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number+1;
    if(nextQuestion === Total_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === Total_QUESTIONS ? (
        <button onClick={startTrivia}>start</button>
      ) : null}
      {!gameOver && <p>score : {score}</p>}
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
