import { useTheme } from "../exercise/darkTheme/ThemeContext";

type TitleProps = {
    titleText: string;
}

export const Title = ({ titleText }: TitleProps) => { {/* or ({titleText}: {titleText: string}) // standard props */}

    const themeContext = useTheme()

    return (
        <>
            <h1 className={`font-bold text-2xl mb-5 uppercase
                ${themeContext.theme === 'dark' ? 'text-slate-400' : 'text-slate-800'}
            `}>
                {titleText}
            </h1>
        </>
    );
}