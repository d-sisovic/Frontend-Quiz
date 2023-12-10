import Quiz from './Quiz';
import Result from '../result/Result';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Quiz component ', () => {
    it('should show correctly Question component', () => {
        const { queryByTestId } = render(<Quiz />);
        const contentElement = queryByTestId('content');

        expect(contentElement).toBeNull();
    });

    it('should show correctly Result component', () => {
        const resultData = { correctAnswers: 1, totalQuestions: 1, selectedQuizData: null };
        const { getByText } = render(<MemoryRouter><Result resultData={resultData} /></MemoryRouter>);
      
        const headingElement = getByText('Quiz completed');
      
        expect(headingElement).toBeVisible();
    });
});
