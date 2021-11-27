type IProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
            <div>
              <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}}></span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
