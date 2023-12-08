import Header from '../header/Header';
import { useState, useEffect } from 'react';
import styles from './Question.module.scss';
import { useParams } from 'react-router-dom';
import Progressbar from '../ui/progressbar/Progressbar';
import QuestionItem from '../question-item/QuestionItem';
import { IQuizItem } from '../../ts/models/quiz-item.model';
import errorImage from '../../assets/images/icon-error.svg';
import { useContextData } from '../../context/QuizContextData';
import { IQuestionState } from './ts/models/question-state.model';
import { IQuizResponse } from '../../ts/models/quiz-response.model';
import QuestionContainer from '../ui/question-container/QuestionContainer';

const getQuestionLetter = (index: number) => {
    switch (index) {
        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2:
            return 'C';
        case 3:
            return 'D';
        default:
            return '';
    }
};

const calculateProgressbarWidth = (selectedQuizData: IQuizItem | null, questionCount: number) => {
    return !selectedQuizData ? '0%' : `${(((questionCount + 1) / selectedQuizData.questions.length) * 100)}%`;
};

const initialState = {
    answer: '',
    disabled: false,
    isTouched: false,
    questionCount: 0,
    selectedAnswer: { value: '', disabled: true }
};

let correctAnswers = 0;

const Question = ({ handleShowResult }: { handleShowResult: (correctAnswers: number, totalQuestions: number, selectedQuizData: IQuizItem) => void }) => {
    const { title } = useParams();
    const { quizData } = useContextData();

    const [questionState, setState] = useState<IQuestionState>(initialState);
    const [selectedQuizData, setSelectedQuizData] = useState<IQuizItem | null>(null);

    const isLastQuestion = questionState.questionCount + 1 === (selectedQuizData?.questions.length || 10);

    useEffect(() => {
        const selectedQuizData = (quizData as IQuizResponse).quizzes.find(item => item.title === title) as IQuizItem;

        setSelectedQuizData(selectedQuizData);
    }, [quizData, title]);

    const handleSelectQuestion = (answer: string) => {
        if (questionState.disabled) { return; }

        setState(previous => ({ ...previous, selectedAnswer: { value: answer, disabled: false } }));
    };

    const onSubmitQuestion = () => {
        if (questionState.selectedAnswer.value === '') {
            setState(previous => ({ ...previous, isTouched: true }));
            return;
        }

        const answer = selectedQuizData?.questions[questionState.questionCount].answer as string;

        setState(previous => ({ ...previous, disabled: true, answer }));

        if (answer === questionState.selectedAnswer.value) {
            correctAnswers += 1;
        }
    };

    const onShowNextQuestion = () => setState(previous => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { questionCount, ...rest } = initialState;

        return { ...rest, questionCount: previous.questionCount + 1 };
    });

    const onShowResults = () => {
        const questionsLength = (selectedQuizData as IQuizItem).questions.length;

        handleShowResult(correctAnswers, questionsLength, selectedQuizData as IQuizItem);
    }

    return <>
        <Header imgName={selectedQuizData?.icon} title={selectedQuizData?.title} />

        <div className={`container ${styles.container}`}>
            <div className={styles['container__question']}>
                <div>
                    <p className="italic__title">Question {questionState.questionCount + 1} of {selectedQuizData?.questions.length}</p>

                    <h1 className={styles['container__question']}>{selectedQuizData?.questions[questionState.questionCount].question}</h1>
                </div>

                <Progressbar width={calculateProgressbarWidth(selectedQuizData, questionState.questionCount)} />
            </div>

            <div>
                <QuestionContainer>
                    {selectedQuizData?.questions[questionState.questionCount].options.map((option, index) =>
                        <QuestionItem key={option} text={option} selected={questionState.selectedAnswer.value === option}
                            label={getQuestionLetter(index)} answer={questionState.answer} onSelectQuestion={() => handleSelectQuestion(option)} />)}
                </QuestionContainer>
            </div>
        </div>

        <div className={styles.submit}>
            {!questionState.disabled && <button className={`button ${styles.button}`} onClick={onSubmitQuestion}>Submit Answer</button>}

            {questionState.disabled && !isLastQuestion && <button className={`button ${styles.button}`} onClick={onShowNextQuestion}>Next Question</button>}

            {questionState.disabled && isLastQuestion && <button className={`button ${styles.button}`} onClick={onShowResults}>Show Results</button>}

            {questionState.selectedAnswer.disabled && questionState.isTouched && <div className="error__container">
                <img src={errorImage} alt="error" />

                <p>Please select an answer</p>
            </div>}
        </div>
    </>;
};

export default Question;
