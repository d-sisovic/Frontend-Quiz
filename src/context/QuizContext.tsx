import { IQuizContext } from "../ts/models/quiz-context.model";
import { useEffect, createContext, useMemo, useState } from "react";

const initialState = { quizData: null } as IQuizContext;

export const Context = createContext(initialState);

const QuizContext = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<IQuizContext>(initialState);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('data.json');
                const quizData = await response.json();

                setData(previousState => ({ ...previousState, quizData }));
            } catch (_) {
                setData(previousState => ({ ...previousState, quizData: null }));
            }
        })();
    }, []);

    const value = useMemo(() => ({ ...data }), [data]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default QuizContext;

