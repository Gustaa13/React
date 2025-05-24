"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type UserContext = {
    user: string;
    setUser: (newUser: string) => void;
}

export const UserContext = createContext<UserContext>({} as UserContext);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState('');

    return(
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    );
}