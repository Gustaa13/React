import { use, useState } from "react";

export const Greeting = () => {

    const [time, setTime] = useState("00:00");

    const [greeting, setGreeting] = useState("Carregando...");

    const [gradientColor, setGradientColor] = useState({ from_color: "from-blue-200", to_color: "to-blue-400"});

    let hour = -1;

    function updateGreeting(hour: number) {
        if(hour >= 5 && hour < 12) {
            setGreeting("Bom dia");
            setGradientColor({ from_color: "from-blue-400", to_color: "to-blue-600"});
        } else if (hour >= 12 && hour < 18) {
            setGreeting("Boa tarde");
            setGradientColor({ from_color: "from-yellow-500", to_color: "to-yellow-700"});
        } else if (hour >= 18 && hour < 24) {
            setGreeting("Boa noite");
            setGradientColor({ from_color: "from-blue-600", to_color: "to-blue-900"});
        } else {
            setGreeting("Boa madrugada");
            setGradientColor({ from_color: "from-blue-900", to_color: "to-blue-600"});
        }
    }  

    function updateTime() {
        if(hour !== new Date().getHours()){
            hour = new Date().getHours();
            updateGreeting(hour);
        }
        
        setTime(new Intl.DateTimeFormat('pt-BR', {
            timeStyle: 'short',
            hour12: false
        }).format())
    }

    setInterval(updateTime, 1000);

    return (
        <>
            <div className={`flex flex-col justify-center items-center text-white bg-gradient-to-r ${gradientColor.from_color} ${gradientColor.to_color} my-15 p-5`}>
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