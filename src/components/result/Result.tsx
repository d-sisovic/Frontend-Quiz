import Header from '../header/Header';
import styles from './Result.module.scss';
import { useNavigate } from 'react-router-dom';
import { IQuizState } from '../quiz/ts/models/quiz-state.model';

const Result = ({ resultData }: { resultData: IQuizState }) => {
    const { correctAnswers, totalQuestions, selectedQuizData } = resultData;

    const navigate = useNavigate();
    const onPlayAgain = () => navigate('/');

    const title = selectedQuizData?.title;
    const imgName = selectedQuizData?.icon;

    return <>
        <Header imgName={imgName} title={title} />

        <div className="container">
            <h1 className="main__title container--mb8">Quiz completed</h1>
            <h1 className="main__title main__title--500">You scored...</h1>

            <div className={styles.card}>
                <div className={styles['card__topic']}>
                    <img src={`src/assets/images/${imgName}.svg`} alt="quiz image" />

                    <span>{title}</span>
                </div>

                <div className={styles['card__answers']}>
                    <span className={styles['card__answers__correct']}>{correctAnswers}</span>

                    <p className={styles['card__answers__outof']}>out of {totalQuestions}</p>
                </div>
            </div>

            <button className="button" onClick={onPlayAgain}>Play Again</button>
        </div>
    </>;
};

export default Result;
