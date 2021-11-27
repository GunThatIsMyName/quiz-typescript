import React, { useState } from "react";
import QuestionCard from "./components/questionQard";

// types
import { Difficulty, fetchQuiz } from "./utils/api";
const Total_QUESTIONS =10;


const App=()=> {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async()=>{
  }
  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{
    
  }
  const nextQuestion=()=>{
    console.log("???")
  }
  
  const hello = fetchQuiz(Total_QUESTIONS,Difficulty.Easy);
console.log(hello,"?")

  return (
    <>
      <h1>React Quiz</h1>
      <button onClick={startTrivia} >start</button>
      <p>scroe</p>
      <p>loading...</p>
      {/* <QuestionCard 
      question={questions[number].question}
      answers={questions[number].answers}
      callback={checkAnswer}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      questionNr={number + 1}
      totalQuestions={Total_QUESTIONS}
      /> */}
      <button onClick={nextQuestion}>next question</button>
    </>
  );
}

export default App;
