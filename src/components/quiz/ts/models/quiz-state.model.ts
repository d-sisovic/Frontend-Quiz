import { IQuizItem } from "../../../../ts/models/quiz-item.model";

export interface IQuizState {
    correctAnswers: number;
    totalQuestions: number;
    selectedQuizData: IQuizItem | null;
}
