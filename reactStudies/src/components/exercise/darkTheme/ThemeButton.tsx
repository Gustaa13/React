import { useTheme } from "./ThemeContext";

export const ThemeButton = () => {

    const themeContext = useTheme();

    function toggleTheme() {
        themeContext.setTheme(themeContext.theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button
            className={`flex justify-center items-center fixed right-3 bottom-3 w-10 h-10 rounded-full cursor-pointer duration-300 bg-center bg-no-repeat
                ${themeContext.theme === 'dark' ? 
                    'bg-slate-700 bg-[url(/assets/themeButton/moon-26.png)]' 
                    : 
                    'bg-slate-100 bg-[url(/assets/themeButton/sun-26.png)]'}
                ${themeContext.theme === 'dark' ? 
                    'hover:bg-slate-100 hover:bg-[url(/assets/themeButton/sun-26.png)]' 
                    : 
                    'hover:bg-slate-700 hover:bg-[url(/assets/themeButton/moon-26.png)]'}
            `}
            onClick={toggleTheme}
        >
        </button>
    );
}