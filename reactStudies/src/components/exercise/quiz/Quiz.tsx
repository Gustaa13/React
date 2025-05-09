import { questionList } from "@/data/questionList";
import { useState } from "react";
import { QuestionItem } from "./QuestionItem";
import { QuestionAnswered } from "@/types/QuestionAnswered";
import { QuizResult } from "./QuizResult";

export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [openedResult, setOpenedResult] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState<QuestionAnswered>({show: false, answer: 0, numberQuestion: 0});
    const [answers, setAnswers] = useState<number[]>([]);
    const [quantityCorrectAnswers, setQuantityCorrectAnswers] = useState(0);


    function updateQuestion(key: number) {
        setAnswers([...answers, key]);
        if(questionList[currentQuestion].answer === key) setQuantityCorrectAnswers(quantityCorrectAnswers + 1);

        if(currentQuestion + 1 >= questionList.length) {
            setOpenedResult(true);
            return;
        }

        setCurrentQuestion(currentQuestion + 1);
    }

    function showQuestionAnswered(answer: number, numberQuestion: number) {
        setQuestionAnswered({show: true, answer, numberQuestion})
        setOpenedResult(false);
    }

    function resetQuiz() {
        setCurrentQuestion(0);
        setOpenedResult(false);
        setQuestionAnswered({show: false, answer: 0, numberQuestion: 0});
        setAnswers([]);
        setQuantityCorrectAnswers(0);
    }

    return (
        <>
            <div className="h-180 w-full flex justify-center items-center bg-blue-600">
                <div className="w-full my-10 max-w-xl rounded-md bg-white text-black shadow shadow-black">
                    <div className="p-5 text-center font-bold text-2xl border-b border-gray-300">Quiz</div>
                    <div className="p-5">
                        {openedResult ? (
                            <QuizResult 
                                answers={answers}
                                questionList={questionList}
                                quantityCorrectAnswers={quantityCorrectAnswers}
                                showQuestionAnswered={showQuestionAnswered}
                            />
                        ) : ( questionAnswered.show ? (
                                <QuestionItem 
                                    question={questionList[questionAnswered.numberQuestion]}
                                    numberQuestion={questionAnswered.numberQuestion + 1}
                                    selectedAnswer={questionAnswered.answer}
                                />
                            ) : (
                                <QuestionItem 
                                    question={questionList[currentQuestion]}
                                    numberQuestion={currentQuestion + 1}
                                    onAnswer={updateQuestion}
                                />
                        ))} 
                    </div>
                    <div className="flex justify-end items-center p-5 border-t border-gray-300 text-center">
                        <div className="w-1/2">
                            {openedResult ? (
                                <div className="flex flex-row justify-between items-center">
                                    <p className="-translate-x-1/2">Resultado</p>
                                    <button onClick={resetQuiz} className="py-1 px-2 text-white font-bold bg-blue-400 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">Reiniciar Quiz</button>
                                </div>
                            ) : ( questionAnswered.show ? (
                                    <div className="flex flex-row justify-between items-center">
                                        <p className="-translate-x-1/2">{questionAnswered.numberQuestion + 1} de {questionList.length} pergunta{questionList.length === 1 ? "" : "s"}</p>

                                        <button onClick={() => {setOpenedResult(true)}} className="py-1 px-2 text-white font-bold bg-red-400 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">Voltar</button>
                                    </div>
                                ) : (
                                    <p className="-translate-x-1/2">{currentQuestion + 1} de {questionList.length} pergunta{questionList.length === 1 ? "" : "s"}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}