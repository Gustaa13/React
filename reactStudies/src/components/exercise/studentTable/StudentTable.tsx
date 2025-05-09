import { StudentTableLine } from "./StudentTableLine";
import { Student } from "@/types/Student";

export const StudentTable = ({ studentList }:{studentList: Student[]}) => {
    return (
        <>
            <table className="flex flex-col mt-10 rounded-md overflow-hidden text-left">
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
                    {studentList.map((student, index) => <StudentTableLine key={index} active={student.active} name={student.name} email={student.email} avatar={student.avatar} grade1={student.grade1} grade2={student.grade2}/>)}
                </tbody>
            </table>
        </>
    );
}