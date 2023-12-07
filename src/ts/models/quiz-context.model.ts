import { IQuizResponse } from "./quiz-response.model";

export interface IQuizContext {
    quizData: IQuizResponse | null;
}