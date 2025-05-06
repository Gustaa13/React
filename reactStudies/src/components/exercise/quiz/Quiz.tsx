import { questionsList } from "@/data/questionsList";
import { useState } from "react";
import { QuestionItem } from "./QuestionItem";

export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
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
                                    {answers.map((answer, key) => ( answer === questionsList[key].answer ? (
                                        <p key={key} className="bg-green-200 px-3 py-1 rounded-md">{key + 1}</p>
                                    ) : (
                                        <p key={key} className="bg-red-200 px-3 py-1 rounded-md">{key + 1}</p>
                                    )))}
                                </div>

                                <div className="text-center text-sm">
                                    <p>Porcentual de acerto: {quantityCorrectAnswers / questionsList.length * 100}%</p>
                                    <p className="mt-1">Total de acertos: {quantityCorrectAnswers}</p>
                                </div>

                            </div>
                        ) : (
                            <QuestionItem 
                                question={questionsList[currentQuestion]}
                                numberQuestion={currentQuestion + 1}
                                onAnswer={updateQuestion}
                            />
                        )} 
                    </div>
                    <div className="p-5 text-center border-t border-gray-300">
                        {showResult ? (
                            "Resultado"
                        ) : (
                            `${currentQuestion + 1} de ${questionsList.length} pergunta${questionsList.length === 1 ? "" : "s"}`
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}