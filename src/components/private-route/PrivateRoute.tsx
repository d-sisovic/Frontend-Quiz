import { Navigate, useParams } from "react-router-dom";
import { useContextData } from "../../context/QuizContextData";

const PrivateRoute = ({ component }: { component: JSX.Element }) => {
  const { title } = useParams();
  const { quizData } = useContextData();
  const showQuestionSection = quizData?.quizzes.find(item => item.title === title);
  
  return showQuestionSection ? component : <Navigate to={'/'} replace />
};

export default PrivateRoute;

