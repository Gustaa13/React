import { Title } from "./Title";
import { StudySectionType } from "@/types/StudySectionType";

export const StudySection = ({ children, titleText }: StudySectionType) => { {/* receiving children components */}
    return (
        <>
            <div className="bg-gray-500 mx-4 my-5 p-4 rounded-2xl">
                <Title titleText={titleText}/>
                {children}
            </div>
        </>
    );
}