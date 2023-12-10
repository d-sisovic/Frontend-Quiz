import styles from './Header.module.scss';
import Switcher from '../ui/switcher/Switcher';
import { IHeaderProps } from './ts/header-props.model';

const Header = ({ imgName, title }: IHeaderProps) => {
    return <header className={`${styles.container} ${imgName ? styles['container--quiz'] : ''}`}>
        <div className={styles.header}>
            {imgName && <>
                <img src={`${import.meta.env.BASE_URL}/${imgName}.svg`} alt="quiz image" data-testid="header-img" />

                <span>{title}</span>
            </>}
        </div>
        
        <div>
            <Switcher />
        </div>
    </header>;
};

export default Header;
