import Header from '../header/Header';
import styles from './Questions.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Progressbar from '../ui/progressbar/Progressbar';
import QuestionItem from '../question-item/QuestionItem';
import { IQuizItem } from '../../ts/models/quiz-item.model';
import errorImage from '../../assets/images/icon-error.svg';
import { useContextData } from '../../context/QuizContextData';
import { IQuestionState } from './ts/models/question-state.model';
import QuestionContainer from '../ui/question-container/QuestionContainer';
import { initialQuestionItemState, calculateProgressbarWidth, getQuestionLetter } from './questions-util';

const Questions = ({ handleShowResult }: { handleShowResult: (correctAnswers: number, totalQuestions: number, selectedQuizData: IQuizItem) => void }) => {
    const { title } = useParams();
    const { quizData } = useContextData();
    const correctAnswersCount = useRef<number>(0);
    const [selectedQuizData, setSelectedQuizData] = useState<IQuizItem | null>(null);
    const [questionState, setState] = useState<IQuestionState>(initialQuestionItemState);

    useEffect(() => {
        const selectedQuizData = (quizData?.quizzes || []).find(item => item.title === title) || null;

        setSelectedQuizData(selectedQuizData);
    }, [quizData, title]);

    if (!selectedQuizData) { return null; }

    const isLastQuestion = questionState.questionCount + 1 === selectedQuizData.questions.length;
    const { answer, question, options } = selectedQuizData.questions[questionState.questionCount];

    const handleSelectQuestion = (selectedAnswer: string) => {
        if (questionState.disabled) { return; }

        setState(previous => ({ ...previous, selectedAnswer }));
    };

    const onSubmitQuestion = () => {
        if (questionState.selectedAnswer === '') {
            setState(previous => ({ ...previous, isTouched: true }));
            return;
        }

        setState(previous => ({ ...previous, disabled: true, answer }));

        if (answer === questionState.selectedAnswer) {
            correctAnswersCount.current = correctAnswersCount.current + 1;
        }
    };

    const onShowNextQuestion = () => setState(previous => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { questionCount, ...rest } = initialQuestionItemState;

        return { ...rest, questionCount: previous.questionCount + 1 };
    });

    const onShowResults = () => {
        const questionsLength = selectedQuizData.questions.length;

        handleShowResult(correctAnswersCount.current, questionsLength, selectedQuizData);
    }

    return <>
        <Header imgName={selectedQuizData.icon} title={selectedQuizData.title} />

        <div className={`container ${styles.container}`}>
            <div className={styles.question}>
                <div>
                    <p className="italic__title">Question {questionState.questionCount + 1} of {selectedQuizData.questions.length}</p>

                    <h1 className={styles['question__heading']}>{question}</h1>
                </div>

                <Progressbar width={calculateProgressbarWidth(selectedQuizData, questionState.questionCount)} />
            </div>

            <div>
                <QuestionContainer>
                    {options.map((option, index) =>
                        <QuestionItem key={option} text={option} questionState={questionState}
                            label={getQuestionLetter(index)} onSelectQuestion={() => handleSelectQuestion(option)} />)}
                </QuestionContainer>
            </div>
        </div>

        <div className={styles.submit}>
            {!questionState.disabled && <button className={`button ${styles.button}`} onClick={onSubmitQuestion}>Submit Answer</button>}

            {questionState.disabled && !isLastQuestion && <button className={`button ${styles.button}`} onClick={onShowNextQuestion}>Next Question</button>}

            {questionState.disabled && isLastQuestion && <button className={`button ${styles.button}`} onClick={onShowResults}>Show Results</button>}

            {!questionState.disabled && questionState.isTouched && <div className="error__container">
                <img src={errorImage} alt="error" />

                <p>Please select an answer</p>
            </div>}
        </div>
    </>;
};

export default Questions;
