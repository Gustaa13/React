import { KeyboardEvent, useState } from "react";
import { useChat } from "./contexts/ChatContext";

export const SimpleChatInput = ({ name }: { name: string }) => {

    const chatContext = useChat();

    const [text, setText] = useState('');

    function confirmMessage(event: KeyboardEvent<HTMLInputElement>) {
        if(event.code.toLowerCase() === 'enter') {
            if(text.trim() !== '') {
                chatContext.addMessage(name, text.trim());
                setText('');
            }
        }
    }

    return(
        <>
            <input 
                type="text" 
                className="w-full text-white text-md outline-none"
                placeholder={`${name}, digite uma mensagem (e aperte enter)`}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={confirmMessage}
            />
        </>
    );
}