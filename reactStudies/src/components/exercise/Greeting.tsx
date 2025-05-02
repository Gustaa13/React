import { useState } from "react";

export const Greenting = () => {

    const [time, setTime] = useState(
        new Intl.DateTimeFormat('pt-BR', {
            timeStyle: 'short',
            hour12: false
        }).format()
    );

    const hour = new Date().getHours();
    let greeting: string;
    let from_color: string;
    let to_color: string;

    if(hour >= 5 && hour < 12) {
        greeting = "Bom dia";
        from_color = "from-blue-400";
        to_color = "to-blue-600"; 
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde";
        from_color = "from-yellow-500";
        to_color = "to-yellow-700"
    } else if (hour >= 18 && hour < 24) {
        greeting = "Boa noite";
        from_color = "from-blue-600";
        to_color = "to-blue-900";
    } else {
        greeting = "Boa madrugada";
        from_color = "from-blue-900";
        to_color = "to-blue-600";
    }

    return (
        <>
            <div className={`flex flex-col justify-center items-center text-white bg-gradient-to-r ${from_color} ${to_color} my-15 p-5`}>
                <div className="text-6xl">
                    {time}
                </div>  
                <div className="text-2xl font-bold">
                    {greeting}
                </div>
            </div>
        </>  
    );
}