import { useContext } from "react";
import { CountClick } from "./CountClick";
import { CountClickContext } from "./CountClickContext";

export const HeaderCountClick = () => {

    const countContext = useContext(CountClickContext);

    return(
        <>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-xl my-1">Contador de cliques ({countContext?.count})</h1>
                <CountClick />
            </div>
        </>
    );
}