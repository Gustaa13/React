import { KeyboardEvent, useState } from "react";
import { useUser } from "./contexts/UserContext";

export const SimpleChatNameInput = () => {

    const userContext = useUser();

    const [name, setName] = useState('');

    function confirmName(event: KeyboardEvent<HTMLInputElement>) {
        if(event.code.toLowerCase() === 'enter') {
            if(name.trim() !== '' && name !== 'bot') {
                userContext.setUser(name.trim());
            }
        }
    }

    return(
        <>
            <div className="mx-auto my-10">
                <p className="text-xl mb-4">Qual seu nome?</p>
                <div className="flex gap-3 text-lg">
                    <input 
                        type="text" 
                        className="border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onKeyUp={confirmName}
                    />
                </div>
            </div>
        </>
    );
}