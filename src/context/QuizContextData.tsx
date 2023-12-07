import { useContext } from "react";
import { Context } from "./QuizContext";

export const useContextData = () => useContext(Context);