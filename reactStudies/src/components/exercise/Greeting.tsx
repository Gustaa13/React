import { GradientColor } from "@/types/GradientColor";

export const Greeting = () => {

    let time = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
    }).format();

    let greeting: string;

    let gradientColor: GradientColor;

    let hour = new Date().getHours();

    if(hour >= 5 && hour < 12) {

        greeting = "Bom dia";
        gradientColor = { from_color: "from-blue-400", to_color: "to-blue-600" };

    } else if (hour >= 12 && hour < 18) {

        greeting = "Boa tarde";
        gradientColor = { from_color: "from-yellow-500", to_color: "to-yellow-700" };

    } else if (hour >= 18 && hour < 24) {

        greeting = "Boa noite";
        gradientColor = { from_color: "from-blue-600", to_color: "to-blue-900" };

    } else {

        greeting = "Boa madrugada";
        gradientColor = { from_color: "from-blue-900", to_color: "to-blue-600" };

    }

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