import Quiz from './Quiz';
import QuizContext from '../../context/QuizContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
    title: 'Quiz',
    component: Quiz,
    tags: ['autodocs'],
    decorators: [(story) =>
        <MemoryRouter initialEntries={['/quiz/CSS']}>
            <Routes>
                <Route path="/quiz/:title" element={<QuizContext>{story()}</QuizContext>} />
            </Routes>
        </MemoryRouter>]
}

export const QuizState = {
    args: {}
}
