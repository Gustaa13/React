import { QuestionType } from "./QuestionType"

export type QuestionItemType = {
    question: QuestionType;
    numberQuestion: number;
    onAnswer: (answer: number) => void;
}