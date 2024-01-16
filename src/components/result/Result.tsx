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

        <div className={`container ${styles.container}`}>
            <div>
                <h1 className="main__title container--mb8">Quiz completed</h1>
                <h1 className="main__title main__title--500">You scored...</h1>
            </div>

            <div className={styles['card__wrapper']}>
                <div className={styles.card}>
                    <div className={styles['card__topic']}>
                        <img src={`${import.meta.env.BASE_URL}${imgName}.svg`} alt="quiz image" />

                        <span>{title}</span>
                    </div>

                    <div className={styles['card__answers']} data-testid="answer">
                        <span className={styles['card__answers__correct']}>{correctAnswers}</span>

                        <p className={styles['card__answers__outof']}>out of {totalQuestions}</p>
                    </div>
                </div>

                <button className={`button ${styles.button}`} onClick={onPlayAgain}>Play Again</button>
            </div>
        </div>
    </>;
};

export default Result;
