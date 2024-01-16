import Questions from "./Questions";
import { render, screen } from '@testing-library/react';

const handleShowResult = vi.fn();

const quizData = {
    quizzes: [
        {
            icon: 'icon-html',
            title: 'HTML',
            questions: [{
                answer: "Hyper Text Markup Language",
                question: "What does HTML stand for?",
                options: [
                    "Hyper Trainer Marking Language",
                    "Hyper Text Marketing Language",
                    "Hyper Text Markup Language",
                    "Hyper Text Markup Leveler"
                ]
            }]
        }
    ]
};

vi.mock('../../context/QuizContextData', () => ({
    ...vi.importActual('../../context/QuizContextData'),
    useContextData: vi.fn(() => ({ quizData }))
}));

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useParams: () => ({ title: 'HTML' })
  }));

describe('Questions component ', () => {
    it('renders with initial state', () => {
        const { queryByTestId } = render(<Questions handleShowResult={handleShowResult} />);
        const contentElement = queryByTestId('content');

        expect(contentElement).toBeNull();
    });

    it('should render 4 questions', () => {
        render(<Questions handleShowResult={handleShowResult} />);

        const questionItems = screen.getAllByTestId('question-item');

        expect(questionItems).toHaveLength(4);
    });
});