import Body from './Body';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Body component ', () => {
    it('should show initial state', () => {
        render(<MemoryRouter><Body /></MemoryRouter>);

        const elementByText = screen.getByText('Pick a subject to get started.');

        expect(elementByText).toBeVisible();
    });
});