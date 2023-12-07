export interface IQuestionItem {
    label?: string;
    answer?: string;
    imgName?: string;
    selected?: boolean;

    text: string;
    onSelectQuestion: (text: string) => void;
}
