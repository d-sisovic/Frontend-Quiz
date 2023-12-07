import styles from './Body.module.scss';
import { useNavigate } from 'react-router-dom';
import QuestionItem from '../../question-item/QuestionItem';
import { RoutePaths } from '../../../ts/enums/route-paths.enum';
import { useContextData } from '../../../context/QuizContextData';
import QuestionContainer from '../../ui/question-container/QuestionContainer';

const Body = () => {
    const navigate = useNavigate();
    const { quizData } = useContextData();

    const onSelectQuestion = (title: string) => navigate(RoutePaths.QUIZ + `/${title}`);

    return <div className={`container ${styles.container}`}>
        <h1 className="main__title container--mb8">Welcome to the</h1>
        <h1 className="main__title main__title--500">Frontend Quiz!</h1>

        <p className={`italic__title ${styles['container__subtitle']}`}>Pick a subject to get started.</p>

        {quizData && <QuestionContainer>
            {quizData.quizzes.map(quiz => <QuestionItem key={quiz.title} text={quiz.title} imgName={quiz.icon} onSelectQuestion={onSelectQuestion} />)}
        </QuestionContainer>}
    </div>;
};

export default Body;