import PrivateRoute from './PrivateRoute';
import { render} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('PrivateRoute component ', () => {
    it('should show main page', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/quiz/title']}>
                <Routes>
                    <Route
                        path="/quiz/:title"
                        element={<PrivateRoute component={<div>Question Section</div>} />}
                    />
                    <Route path="/" element={<div>Home Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        const homePageText = getByText('Home Page');

        expect(homePageText).toBeVisible();
    });
});