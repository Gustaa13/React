import { GradientColor } from "@/types/GradientColor";
import { useEffect, useState } from "react";

export const Greeting = () => {

    const [time, setTime] = useState(new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
    }).format());

    const [timeOfDay, setTimeOfDay] = useState("Carregando...");

    const [gradientColor, setGradientColor] = useState<GradientColor>({ from_color: "from-blue-200", to_color: "to-blue-400"});

    function updateTimeOfDayAndColorGreeting(hour: number) {
        if(hour >= 5 && hour < 12) {
            setTimeOfDay("Bom dia");
            setGradientColor({ from_color: "from-blue-400", to_color: "to-blue-600"});
        } else if (hour >= 12 && hour < 18) {
            setTimeOfDay("Boa tarde");
            setGradientColor({ from_color: "from-yellow-500", to_color: "to-yellow-700"});
        } else if (hour >= 18 && hour < 24) {
            setTimeOfDay("Boa noite");
            setGradientColor({ from_color: "from-blue-600", to_color: "to-blue-900"});
        } else {
            setTimeOfDay("Boa madrugada");
            setGradientColor({ from_color: "from-blue-900", to_color: "to-blue-600"});
        }
    }

    function updateGreeting() {
        updateTimeOfDayAndColorGreeting(new Date().getHours());

        setTime(new Intl.DateTimeFormat('pt-BR', {
            timeStyle: 'short',
            hour12: false
        }).format())
    }  

    useEffect(() => {
        updateGreeting();

        const interval = setInterval(() => {
            updateGreeting();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={`flex flex-col justify-center items-center text-white bg-gradient-to-r ${gradientColor.from_color} ${gradientColor.to_color} my-15 p-5`}>
                <div className="text-6xl">
                    {time}
                </div>  
                <div className="text-2xl font-bold">
                    {timeOfDay}
                </div>
            </div>
        </>  
    );
}