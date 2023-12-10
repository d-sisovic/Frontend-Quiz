import Switcher from './Switcher';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Switcher component ', () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');

    beforeEach(() => render(<Switcher />));

    afterEach(() => getItemSpy.mockClear());

    it('should show initial light theme', () => {
        const sunDarkIcon = screen.getByAltText('sun-dark');
        const moonDarkIcon = screen.getByAltText('moon-dark');
        const checkboxElement = screen.getByTestId('checkbox');

        expect(sunDarkIcon).toBeVisible();
        expect(moonDarkIcon).toBeVisible();
        expect(checkboxElement).not.toBeChecked();
        expect(getItemSpy).toHaveBeenCalledTimes(1);
    });

    it('should show dark theme when set', () => {
        const labelElement = screen.getByTestId('label');
        const checkboxElement = screen.getByTestId('checkbox');

        fireEvent.click(labelElement);

        const sunLightIcon = screen.getByAltText('sun-light');
        const moonLightIcon = screen.getByAltText('moon-light');

        expect(sunLightIcon).toBeVisible();
        expect(moonLightIcon).toBeVisible();
        expect(checkboxElement).toBeChecked();
    });
});
