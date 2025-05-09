import { Question } from "./Question"

export type QuestionItemType = {
    question: Question;
    numberQuestion: number;
    selectedAnswer?: number | null;
    onAnswer?: (answer: number) => void;
}