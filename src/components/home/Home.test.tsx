import Home from './Home';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Home component ', () => {
    it('should show initial state', () => {
        render(<MemoryRouter><Home /></MemoryRouter>);

        const elementByText = screen.getByText('Pick a subject to get started.');

        expect(elementByText).toBeVisible();
    });
});