import Progressbar from './Progressbar';
import { render, screen } from '@testing-library/react';

describe('Progressbar component ', () => {
    beforeEach(() => render(<Progressbar width={'56%'} />));

    it('should have progressbar element of 56%', () => {
        const progressbar = screen.getByTestId('progressbar');

        expect(progressbar.style.width).toBe('56%');
    });
});
