"use client"

import { QuestionItemType } from "@/types/QuestionItemType";

export const QuestionItem = ({question, numberQuestion, selectedAnswer = null,  onAnswer}: QuestionItemType) => {

    function checkQuestion(key: number) {
        if(onAnswer !== undefined) {
            onAnswer(key);
        }
    }

    return(
        <>
            <div>
                <div className="text-2xl font-bold mb-5">{numberQuestion}. {question.question}</div>
                <div>
                    {question.options.map((option, key) => (
                        <div
                            key={key}
                            onClick={() => checkQuestion(key)}
                            className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300 

                            ${selectedAnswer === null && "cursor-pointer hover:opacity-80"}
                            ${selectedAnswer !== null && key === question.answer && `bg-green-100 border-green-300`}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && `bg-red-100 border-red-300`}

                            `}
                        >{option}</div>
                    ))}
                </div>
            </div>
        </>
    );
}