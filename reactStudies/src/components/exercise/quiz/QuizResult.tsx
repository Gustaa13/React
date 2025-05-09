import { QuizResultType } from "@/types/QuizResultType";

export const QuizResult = ({answers, questionList, quantityCorrectAnswers, showQuestionAnswered}: QuizResultType) => {

    return(
        <>
        <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-xl">Quadro de Questões</div>

            <div className="flex flex-row text-lg gap-3">
                {answers.map((answer, key) => (answer === questionList[key].answer ? (
                    <button onClick={() => showQuestionAnswered(answer, key)} key={key} className="bg-green-400 text-white font-bold px-3 py-1 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">{key + 1}</button>
                ) : (
                    <button onClick={() => showQuestionAnswered(answer, key)} key={key} className="bg-red-400 text-white font-bold px-3 py-1 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110">{key + 1}</button>
                )))}
            </div>

            <div className="text-center text-sm">
                <p>Porcentual de acerto: {quantityCorrectAnswers / questionList.length * 100}%</p>
                <p className="mt-1">Total de acertos: {quantityCorrectAnswers}</p>
            </div>

        </div>
        </>
    );
}