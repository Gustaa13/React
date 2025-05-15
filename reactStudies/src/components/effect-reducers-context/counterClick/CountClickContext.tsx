import { createContext, ReactNode, useState } from "react";
import { HeaderCountClick } from "./HeaderCountClick";

type CountClickContextType = {
    count: number;
    setCount: (n: number) => void;
}

export const CountClickContext = createContext<CountClickContextType | null>(null);

export const CountClickProvider = () => {

    const [count, setCount] = useState(0);

    return(
        <CountClickContext.Provider value={{count, setCount}}>
            <HeaderCountClick />
        </CountClickContext.Provider>
    );
}