import { chatReducer } from "@/redurcers/ChatReducer";
import { Message } from "@/types/Message";
import { createContext, ReactNode, use, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = 'chatStorage';

type ChatContext = {
    chat: Message[];
    addMessage: (user: string, text: string) => void;
}

export const ChatContext = createContext<ChatContext>({} as ChatContext);

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }: { children: ReactNode }) => {

    const [chat, dispatch] = useReducer(chatReducer, []);

    function addMessage(user: string, text: string) {
        dispatch({
            type: 'add',
            payload: {
                user,
                text
            }
        });
    }

    useEffect(() => {
        dispatch({
            type: 'initialize',
            payload: {
                storageChat: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            }
        })
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chat));
    }, [chat]);

    return(
        <ChatContext.Provider value={{ chat, addMessage }}>
            {children}
        </ChatContext.Provider>
    );
}