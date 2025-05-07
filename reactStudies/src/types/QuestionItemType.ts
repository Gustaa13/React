import { QuestionType } from "./QuestionType"

export type QuestionItemType = {
    question: QuestionType;
    numberQuestion: number;
    selectedAnswer?: number | null;
    onAnswer?: (answer: number) => void;
}