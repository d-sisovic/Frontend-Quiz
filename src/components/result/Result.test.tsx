import Result from './Result';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';

const resultData = { correctAnswers: 5, totalQuestions: 10, selectedQuizData: { icon: 'icon-html', title: 'HTML', questions: [] } };

describe('Result component ', () => {
    beforeEach(() => render(<MemoryRouter><Result resultData={resultData} /></MemoryRouter>));

    it('should show correctly "out of" sentence', () => {
        const answerContainer = screen.getByTestId('answer');

        expect(within(answerContainer).getByText(5)).toBeVisible();
        expect(within(answerContainer).getByText(`out of ${10}`)).toBeVisible();
    });
});
