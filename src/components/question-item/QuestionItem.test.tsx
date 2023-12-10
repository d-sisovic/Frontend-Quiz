import QuestionItem from './QuestionItem';
import { render, screen } from '@testing-library/react';
import { initialQuestionItemState } from '../questions/questions-util';

const onSelectQuestion = vi.fn();
const answer = 'Hypertext Markup Language';

describe('QuestionItem component ', () => {
    it('renders with initial state', () => {
        render(<QuestionItem text={answer} label='A' imgName={'icon-html'}
            questionState={initialQuestionItemState} onSelectQuestion={onSelectQuestion} />);

        const textElement = screen.getByText(answer);

        expect(textElement).toBeVisible();
    });

    it('should have selected class of component', () => {
        const questionState = { ...initialQuestionItemState, answer, selectedAnswer: answer, isTouched: true };

        render(<QuestionItem text={answer} label='A' imgName={'icon-html'}
            questionState={questionState} onSelectQuestion={onSelectQuestion} />);

        const textElement = screen.getByTestId('question-item');

        expect(textElement.getAttribute('class')).toContain('container--selected');
    });

    it('should have correct class of component', () => {
        const questionState = { ...initialQuestionItemState, answer, selectedAnswer: answer, isTouched: true, disabled: true };

        render(<QuestionItem text={answer} label='A' imgName={'icon-html'}
            questionState={questionState} onSelectQuestion={onSelectQuestion} />);

        const textElement = screen.getByTestId('question-item');

        expect(textElement.getAttribute('class')).toContain('container--correct');
    });

    it('should have incorrect class of component', () => {
        const questionState = { ...initialQuestionItemState, answer: 'Some other answer', selectedAnswer: answer, isTouched: true, disabled: true };

        render(<QuestionItem text={answer} label='A' imgName={'icon-html'}
            questionState={questionState} onSelectQuestion={onSelectQuestion} />);

        const textElement = screen.getByTestId('question-item');

        expect(textElement.getAttribute('class')).toContain('container--incorrect');
    });
});