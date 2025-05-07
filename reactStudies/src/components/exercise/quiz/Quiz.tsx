import { questionsList } from "@/data/questionsList";
import { useState } from "react";
import { QuestionItem } from "./QuestionItem";
import { QuestionAnswered } from "@/types/QuestionAnswered";

export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState<QuestionAnswered>({show: false, answer: 0, numberQuestion: 0});
    const [answers, setAnswers] = useState<number[]>([]);
    const [quantityCorrectAnswers, setQuantityCorrectAnswers] = useState(0);


    function updateQuestion(key: number) {
        setAnswers([...answers, key]);
        if(questionsList[currentQuestion].answer === key) setQuantityCorrectAnswers(quantityCorrectAnswers + 1);

        if(currentQuestion + 1 >= questionsList.length) {
            setShowResult(true);
            return;
        }

        setCurrentQuestion(currentQuestion + 1);
    }

    function showQuestionAnswered(answer: number, numberQuestion: number) {
        setQuestionAnswered({show: true, answer, numberQuestion})
        setShowResult(false);
    }

    function resetQuiz() {
        setCurrentQuestion(0);
        setShowResult(false);
        setQuestionAnswered({show: false, answer: 0, numberQuestion: 0});
        setAnswers([]);
        setQuantityCorrectAnswers(0);
    }

    return (
        <>
            <div className="w-full flex justify-center items-center bg-blue-600">
                <div className="w-full my-10 max-w-xl rounded-md bg-white text-black shadow shadow-black">
                    <div className="p-5 text-center font-bold text-2xl border-b border-gray-300">Quiz</div>
                    <div className="p-5">
                        {showResult ? (
                            <div className="flex flex-col items-center justify-center gap-5">
                                <div className="text-xl">Quadro de Questões</div>

                                <div className="flex flex-row text-lg gap-3">
                                    {answers.map((answer, key) => (answer === questionsList[key].answer ? (
                                        <button onClick={() => showQuestionAnswered(answer, key)} key={key} className="bg-green-400 text-white font-bold px-3 py-1 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">{key + 1}</button>
                                    ) : (
                                        <button onClick={() => showQuestionAnswered(answer, key)} key={key} className="bg-red-400 text-white font-bold px-3 py-1 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">{key + 1}</button>
                                    )))}
                                </div>

                                <div className="text-center text-sm">
                                    <p>Porcentual de acerto: {quantityCorrectAnswers / questionsList.length * 100}%</p>
                                    <p className="mt-1">Total de acertos: {quantityCorrectAnswers}</p>
                                </div>

                            </div>
                        ) : ( questionAnswered.show ? (
                                <QuestionItem 
                                    question={questionsList[questionAnswered.numberQuestion]}
                                    numberQuestion={questionAnswered.numberQuestion + 1}
                                    selectedAnswer={questionAnswered.answer}
                                />
                            ) : (
                                <QuestionItem 
                                    question={questionsList[currentQuestion]}
                                    numberQuestion={currentQuestion + 1}
                                    onAnswer={updateQuestion}
                                />
                        ))} 
                    </div>
                    <div className="flex justify-end items-center p-5 border-t border-gray-300 text-center">
                        <div className="w-1/2">
                            {showResult ? (
                                <div className="flex flex-row justify-between items-center">
                                    <p className="-translate-x-1/2">Resultado</p>
                                    <button onClick={resetQuiz} className="py-1 px-2 text-white font-bold bg-blue-500 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">Resetar Quiz</button>
                                </div>
                            ) : ( questionAnswered.show ? (
                                    <div className="flex flex-row justify-between items-center">
                                        <p className="-translate-x-1/2">{questionAnswered.numberQuestion + 1} de {questionsList.length} pergunta{questionsList.length === 1 ? "" : "s"}</p>

                                        <button onClick={() => {setShowResult(true)}} className="py-1 px-2 text-white font-bold bg-red-500 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">Voltar</button>
                                    </div>
                                ) : (
                                    <p className="-translate-x-1/2">{currentQuestion + 1} de {questionsList.length} pergunta{questionsList.length === 1 ? "" : "s"}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}