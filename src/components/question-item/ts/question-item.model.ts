import { IQuestionState } from "../../questions/ts/models/question-state.model";

export interface IQuestionItem {
    label?: string;
    imgName?: string;
    questionState?: IQuestionState;

    text: string;
    onSelectQuestion: (text: string) => void;
}
