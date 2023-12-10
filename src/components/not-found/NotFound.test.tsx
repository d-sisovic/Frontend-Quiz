import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('NotFound component ', () => {
    it('should show initial state', () => {
        render(<MemoryRouter><NotFound /></MemoryRouter>);

        const elementByText = screen.getByText('404 Not Found');

        expect(elementByText).toBeVisible();
    });
});