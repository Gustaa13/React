import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);

    function iterateCount() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <button onClick={iterateCount} className="p-2 mr-3 font-bold bg-amber-500 rounded-sm">+1</button>
                <p className="text-2xl">{count}</p>
            </div>
        </>
    );
}