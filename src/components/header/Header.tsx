import styles from './Header.module.scss';
import Switcher from '../ui/switcher/Switcher';
import { IHeaderProps } from './ts/header-props.model';

const Header = ({ imgName, title }: IHeaderProps) => {
    return <header className={`${styles.container} ${imgName ? styles['container--quiz'] : ''}`}>
        <div className={styles.header}>
            {imgName && <>
                <img src={`src/assets/images/${imgName}.svg`} alt="quiz image" />

                <span>{title}</span>
            </>}
        </div>

        <div>
            <Switcher />
        </div>
    </header>;
};

export default Header;
