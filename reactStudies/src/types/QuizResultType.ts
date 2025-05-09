import { Question } from "./Question";

export type QuizResultType = {
    answers: number[];
    questionList: Question[];
    quantityCorrectAnswers: number;
    showQuestionAnswered: (answer: number, key: number) => void;
}