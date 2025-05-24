"use client"

import { useTheme } from "../exercise/darkTheme/ThemeContext";
import { Title } from "./Title";
import { StudySectionType } from "@/types/StudySectionType";

export const StudySection = ({ children, titleText, className }: StudySectionType) => { {/* receiving children components */}

    const themeContext = useTheme();

    return (
        <>
            <div className={`p-5 rounded-2xl container
                ${themeContext.theme === 'dark' ? 'bg-slate-800' : 'bg-slate-400'}
            `}>
                <Title titleText={titleText}/>
                <div className={className}>
                    {children}
                </div>
            </div>
        </>
    );
}