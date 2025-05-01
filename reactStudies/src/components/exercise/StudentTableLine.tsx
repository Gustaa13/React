import { StudentType } from "@/types/StudentType";

export const StudentTableLine = ({ active, name, email, avatar, grade1, grade2}: StudentType) => {

    const average = (grade1 + grade2) / 2;

    return (
        <>
            <div className="flex flex-row p-4 bg-gray-400">
                <div className="flex items-center basis-2/5 mr-5 md:mr-0">
                    <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-5 hidden md:block"/>
                    <div className="text-black text-sm">
                        <p className="font-bold">{name}</p>
                        <p className="hidden sm:block">{email}</p>
                    </div>
                </div>
                <div className="flex flex-row basis-3/5 items-center text-black">
                    <div className="flex mr-5 basis-1/2 text-white md:basis-1/4 md:mr-0">
                        {active ? (
                                <div className="bg-green-500 py-1 px-2 rounded-md">
                                    active
                                </div>
                            ) : (
                                <div className="bg-red-500 py-1 px-2 rounded-md">
                                    inactive
                                </div>
                            )
                        }
                    </div>
                    <div className="hidden md:block md:basis-1/4">
                        {grade1.toFixed(1)}
                    </div>
                    <div className="hidden md:block md:basis-1/4">
                        {grade2.toFixed(1)}
                    </div>
                    <div className="basis-1/2 mr-5 font-bold md:basis-1/4 md:mr-0">
                        {active ? average.toFixed(1) : "--"}
                    </div>
                </div>
            </div>
        </>
    );
}