import QuestionContainer from './QuestionContainer';
import { render, screen } from '@testing-library/react';

describe('Question container component ', () => {
    beforeEach(() => render(<QuestionContainer children={<p>Test child</p>} />));

    it('should render what\'s passed as children', () => {
        const testChildElement = screen.getByText('Test child');

        expect(testChildElement).toBeInTheDocument();
    });
});
