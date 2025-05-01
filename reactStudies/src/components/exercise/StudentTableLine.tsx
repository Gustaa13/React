import { StudentType } from "@/types/StudentType";

export const StudentTableLine = ({ active, name, email, avatar, grade1, grade2}: StudentType) => {

    const average = (grade1 + grade2) / 2;

    return (
        <>
            <tr className="flex flex-row p-4 items-center bg-gray-400 text-black snap-start">
                <td className="flex items-center basis-3/7 mr-5 md:mr-0">
                    <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-5 hidden object-cover md:block"/>
                    <div className="text-black text-sm">
                        <p className="font-bold">{name}</p>
                        <p className="hidden sm:block">{email}</p>
                    </div>
                </td>
                <td className="flex mr-5 basis-2/7 text-white md:basis-1/7 md:mr-0">
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
                </td>
                <td className="hidden md:block md:basis-1/7">
                    {grade1.toFixed(1)}
                </td>
                <td className="hidden md:block md:basis-1/7">
                    {grade2.toFixed(1)}
                </td>
                <td className="basis-2/7 mr-5 font-bold md:basis-1/7 md:mr-0">
                    {active ? average.toFixed(1) : "--"}
                </td>
            </tr>
        </>
    );
}