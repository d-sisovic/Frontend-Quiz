import styles from './QuestionContainer.module.scss';

const QuestionContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.container}>{children}</div>;
};

export default QuestionContainer;