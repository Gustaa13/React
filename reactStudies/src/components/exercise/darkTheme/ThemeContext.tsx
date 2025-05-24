"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const STORAGE_KEY = 'themeContextKey';

type ThemeContext = {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: {children: ReactNode}) => {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        setTheme(localStorage.getItem(STORAGE_KEY) || 'dark');
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}