import { useState } from "react";
import Result from "../result/Result";
import Question from "../question/Question";
import { IQuizState } from "./ts/models/quiz-state.model";
import { IQuizItem } from "../../ts/models/quiz-item.model";

const Quiz = () => {
    const [showResults, setShowResults] = useState(false);
    const [resultData, setResultData] = useState<IQuizState>({ correctAnswers: 0, totalQuestions: 0, selectedQuizData: null });

    const handleShowResult = (correctAnswers: number, totalQuestions: number, selectedQuizData: IQuizItem) => {
        setResultData({ correctAnswers, totalQuestions, selectedQuizData });
        setShowResults(true);
    };

    return <>
        {!showResults && <Question handleShowResult={handleShowResult} />}

        {showResults && <Result resultData={resultData} />}
    </>;
};

export default Quiz;
