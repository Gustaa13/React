"use client"

import { useChat } from "./contexts/ChatContext";
import { useUser } from "./contexts/UserContext";

export const SimpleChatMessages = () => {

    const chatContext = useChat();
    const userContext = useUser();

    return (
        <>
            <div className="flex flex-col gap-1">
                {chatContext.chat.map(message => (
                    ((message.user === userContext.user || message.user === "bot do " + userContext.user) &&
                    <div key={message.id} className={`border border-white/20 rounded-md p-2 text-sm 
                        ${message.user === userContext.user ? 
                            'self-end bg-white/10' 
                            : 
                            'self-start bg-white/5'
                        }
                    `}>
                        <div className="font-bold">
                            {message.user}
                        </div>
                        <p>{message.text}</p>
                    </div>)
                ))}
            </div>
        </>
    );
}