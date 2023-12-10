import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header component ', () => {
    it('should render switcher component label', () => {
        render(<Header />);

        const labelElement = screen.getByTestId('label');

        expect(labelElement).toBeVisible();
    });

    it('should render image if imgName is passed', () => {
        render(<Header imgName={'icon-html'} title={'HTML'} />);

        const imgElement = screen.getByTestId('header-img');

        expect(imgElement).toBeVisible();
    });
});