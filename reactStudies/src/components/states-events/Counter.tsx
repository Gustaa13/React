"use client"

import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);

    function iterateCount() {
        setCount(count + 2);
        /* setCount(count + 2); */ // it doesn't work
        setCount(oldCount => oldCount + 2);
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <button onClick={iterateCount} className="p-2 mr-3 font-bold bg-amber-500 rounded-sm">+4</button>
                <p className="text-2xl">{count}</p>
            </div>
        </>
    );
}