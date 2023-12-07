import styles from './NotFound.module.scss';
import appStyles from '../../App.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const onGoToHomepage = () => navigate('/');

    return <div className={`${appStyles.container} ${styles.container}`}>
            <h1 className="main__title container--mb8">404 Not Found</h1>

            <p className="italic__title">Requested page has not been found</p>

            <button className="button" onClick={onGoToHomepage}>Go to homepage</button>
    </div>;
};

export default NotFound;