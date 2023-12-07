export interface IQuestionState {
    answer: string;
    disabled: boolean;
    isTouched: boolean;
    questionCount: number;
    selectedAnswer: { value: string, disabled: boolean };
}
