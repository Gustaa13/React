import { ReactNode } from "react";
import { useTheme } from "./ThemeContext";

export const Container = ({ children } : { children: ReactNode}) => {

    const themeContext = useTheme();

    return(
        <div
            className={`flex flex-col items-center gap-15 w-full h-full p-15 relative
                ${themeContext.theme === 'dark' ? 'bg-slate-950' : 'bg-slate-300'}
            `}
        >
            {children}
        </div>
    );
}