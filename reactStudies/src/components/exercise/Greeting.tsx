export const Greenting = () => {

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    let greeting: string;

    if(hour >= 5 && hour < 12) {
        greeting = "Bom dia";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde";
    } else if (hour >= 18 && hour < 24) {
        greeting = "Boa noite";
    } else {
        greeting = "Boa madrugada";
    }

    let stringHour = hour.toString();
    let stringMinutes = minutes.toString();

    if(hour < 10) stringHour = "0" + stringHour;
    if(minutes < 10) stringMinutes = "0" + stringMinutes;

    return (
        <>
            <div className="flex flex-col justify-center items-center text-white bg-gradient-to-r from-blue-400 to-blue-600 my-15 p-5">
                <div className="text-6xl">
                    {`${stringHour}:${stringMinutes}`}
                </div>  
                <div className="text-2xl font-bold">
                    {greeting}
                </div>
            </div>
        </>  
    );
}