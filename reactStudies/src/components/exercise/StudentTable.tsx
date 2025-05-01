import { students } from "@/data/students";
import { StudentTableLine } from "./StudentTableLine";

export const StudentTable = () => {
    return (
        <>
            <div className="flex flex-col gap-0.5 mt-15 rounded-xl overflow-hidden">
                <div className="flex flex-row items-center py-3 px-4 text-white font-bold bg-gray-700">
                    <div className="basis-2/5 mr-5 md:mr-0">Nome</div>
                    <div className="flex flex-row basis-3/5 justify-around">
                        <div className="basis-1/2 mr-5 md:basis-1/4 md:mr-0">Status</div>
                        <div className="hidden md:block md:basis-1/4">N1</div>
                        <div className="hidden md:block md:basis-1/4">N2</div>
                        <div className="basis-1/2 mr-5 md:basis-1/4 md:mr-5">Res</div>
                    </div>
                </div>
                {students.map(students => <StudentTableLine key={students.id} id={students.id} active={students.active} name={students.name} email={students.email} avatar={students.avatar} grade1={students.grade1} grade2={students.grade2} />)}
            </div>
        </>
    );
}