import React from 'react';
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.style';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNo,
    totalQuestion
}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNo} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(ans => (
                <ButtonWrapper
                    key={ans}
                    correct={userAnswer?.correctAnswer === ans}
                    userClicked={userAnswer?.answer === ans}
                >
                    <button disabled={!!userAnswer} value={ans} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: ans }}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);
export default QuestionCard;