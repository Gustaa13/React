import { useContext } from "react";
import { CountClickContext } from "./CountClickContext";

export const CountClick = () => {

    const countContext = useContext(CountClickContext);

    return(
        <>
            <div>
                <p className="text-center text-lg my-1">{countContext?.count}</p>
                <button className="bg-green-600 p-1 my-1 rounded-md" onClick={() => countContext?.setCount(countContext.count + 1)}>+1</button>
            </div>
        </>
    );
}