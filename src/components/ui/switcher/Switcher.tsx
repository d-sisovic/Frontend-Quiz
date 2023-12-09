import { useEffect, useState } from 'react';
import styles from './Switcher.module.scss';
import { Theme } from '../../../ts/enums/theme.enum';
import sunDarkSvg from '../../../assets/images/icon-sun-dark.svg';
import moonDarkSvg from '../../../assets/images/icon-moon-dark.svg';
import sunLightSvg from '../../../assets/images/icon-sun-light.svg';
import moonLigthSvg from '../../../assets/images/icon-moon-light.svg';

const Switcher = () => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);

    const onToggle = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        localStorage.setItem('frontend-quiz-theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        setTheme((localStorage.getItem('frontend-quiz-theme') || Theme.LIGHT) as Theme);
    }, []);

    useEffect(() => {
        document.querySelector('body')?.setAttribute('data-theme', theme);
    }, [theme]);

    return <div className={styles.container}>
        {theme === Theme.LIGHT && <img src={sunDarkSvg} alt="sun" />}
        {theme === Theme.DARK && <img src={sunLightSvg} alt="sun" />}

        <label className={styles.switcher}>
            <input type="checkbox" checked={theme === Theme.DARK} onChange={onToggle} />
            <span className={styles['switcher__circle']} />
        </label>

        {theme === Theme.LIGHT && <img src={moonDarkSvg} alt="moon" />}
        {theme === Theme.DARK && <img src={moonLigthSvg} alt="moon" />}
    </div>;
};

export default Switcher;