import { useState } from 'react';
import styles from './Switcher.module.scss';
import sunDarkSvg from '../../../assets/images/icon-sun-dark.svg';
import moonDarkSvg from '../../../assets/images/icon-moon-dark.svg';

const Switcher = () => {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => setIsToggled(!isToggled);

    return <div className={styles.container}>
        <img src={sunDarkSvg} alt="sun" />

        <label className={styles.switcher}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className={styles['switcher__circle']} />
        </label>

        <img src={moonDarkSvg} alt="moon" />
    </div>;
};

export default Switcher;