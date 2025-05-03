import { StudentTableLine } from "./StudentTableLine";
import { StudentType } from "@/types/StudentType";

export const StudentTable = ({ students }:{students: StudentType[]}) => {
    return (
        <>
            <table className="flex flex-col mt-15 rounded-md overflow-hidden text-left">
                <thead>
                    <tr className="flex flex-row items-center py-3 px-4 text-white bg-gray-700">
                        <th className="basis-3/7 mr-5 md:mr-0">Nome</th>
                        <th className="basis-2/7 mr-5 md:basis-1/7 md:mr-0">Status</th>
                        <th className="hidden md:block md:basis-1/7">N1</th>
                        <th className="hidden md:block md:basis-1/7">N2</th>
                        <th className="basis-2/7 mr-5 md:basis-1/7 md:mr-0">Res</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-0.5 max-h-111 overflow-y-auto snap-y">
                    {students.map((students, index) => <StudentTableLine key={index} active={students.active} name={students.name} email={students.email} avatar={students.avatar} grade1={students.grade1} grade2={students.grade2}/>)}
                </tbody>
            </table>
        </>
    );
}