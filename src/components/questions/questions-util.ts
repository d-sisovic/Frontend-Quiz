import { IQuizItem } from "../../ts/models/quiz-item.model";

export const getQuestionLetter = (index: number) => {
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

export const calculateProgressbarWidth = (selectedQuizData: IQuizItem | null, questionCount: number) => {
    return !selectedQuizData ? '0%' : `${(((questionCount + 1) / selectedQuizData.questions.length) * 100)}%`;
};

export const initialQuestionItemState = {
    answer: '',
    disabled: false,
    isTouched: false,
    questionCount: 0,
    selectedAnswer: ''
};