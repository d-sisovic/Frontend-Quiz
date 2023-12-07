import { IQuizQuestionItem } from "./quiz-question-item.model";

export interface IQuizItem {
    icon: string;
    title: string;
    questions: IQuizQuestionItem[];
}