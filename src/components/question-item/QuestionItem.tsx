import styles from './QuestionItem.module.scss';
import { IQuestionItem } from './ts/question-item.model';
import iconCorrectImg from '../../assets/images/icon-correct.svg';
import iconIncorrectImg from '../../assets/images/icon-incorrect.svg';

const QuestionItem = ({ text, imgName, label, selected, answer, onSelectQuestion }: IQuestionItem) => {
    const onClick = () => onSelectQuestion(text);
    const selectedStyle = selected ? styles['container--selected'] : '';
    const showCorrectIcon = answer && answer === text && !selected;
    const correctStyle = answer && answer === text && selected ? styles['container--correct'] : '';
    const incorrectStyle = answer && answer !== text && selected ? styles['container--incorrect'] : '';

    return <div className={`${styles.container} ${selectedStyle} ${correctStyle} ${incorrectStyle}`} onClick={onClick}>
        {imgName && <img src={`src/assets/images/${imgName}.svg`} alt="question image" />}

        {!imgName && <span className={styles.img}>{label}</span>}

        <div className={styles['container__text']}>
            <p>{text}</p>

            {(correctStyle || showCorrectIcon) && <img src={iconCorrectImg} alt="correct image" />}

            {incorrectStyle && <img src={iconIncorrectImg} alt="incorrect image" />}
        </div>
    </div>;
};

export default QuestionItem;