import { ReactNode } from "react";
import { Title } from "./Title";

type Props = {
    children: ReactNode;
    titleText: string;
}

export const StudySection = ({ children, titleText }: Props) => { {/* receiving children components */}
    return (
        <>
            <div className="bg-gray-500 m-5 p-5 rounded-2xl">
                <Title titleText={titleText}/>
                {children}
            </div>
        </>
    );
}