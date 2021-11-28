import styled from "styled-components";
import { IAnswerObject } from "../App";

type IProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: IAnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: IProps) => {
  return (
    <div>
      <p className="number">
        question :{questionNr}/{totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => {
          return (
            <Button
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

type IButton = {
  correct: boolean;
  userClicked: boolean;
};

const Button = styled.div<IButton>`
button{
  background: ${({correct,userClicked})=>correct?"green": !correct && userClicked ? "red" : null}
}
`;
export default QuestionCard;
