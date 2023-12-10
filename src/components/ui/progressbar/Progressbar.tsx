import styles from './Progressbar.module.scss';

const Progressbar = ({ width }: { width: string }) => {
    return <div className={styles.container}>
        <div className={styles.progress} style={{ width }} data-testid="progressbar"></div>
    </div>;
};

export default Progressbar;