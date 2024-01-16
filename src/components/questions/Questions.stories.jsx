import Questions from './Questions';
import { action } from '@storybook/addon-actions';
import QuizContext from '../../context/QuizContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
    tags: ['autodocs'],
    title: 'Questions',
    component: Questions,
    decorators: [(story) =>
        <MemoryRouter initialEntries={['/quiz/HTML']}>
            <Routes>
                <Route path="/quiz/:title" element={<QuizContext>{story()}</QuizContext>} />
            </Routes>
        </MemoryRouter>]
}

export const QuestionsComponent = {
    args: {
        handleShowResult: (correctAnswer, questionsQuestion, quizData) => action('Final result')(correctAnswer, questionsQuestion, quizData)
    }
}