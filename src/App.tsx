import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';

const App = () => <div className={styles.container}>
    <Outlet></Outlet>
</div>;

export default App;
