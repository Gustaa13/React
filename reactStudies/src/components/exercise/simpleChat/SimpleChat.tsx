import { useUser } from "./contexts/UserContext";
import { SimpleChatInput } from "./SimpleChatInput";
import { SimpleChatMessages } from "./SimpleChatMessages";
import { SimpleChatNameInput } from "./SimpleChatNameInput";

export const SimpleChat = () => {

    const UserContext = useUser();

    if(!UserContext) return null;
    if(!UserContext.user) return <SimpleChatNameInput />

    return(
        <>
            <div className="border border-white/30 rounded-md">
                <div className="h-96 p-3 overflow-y-scroll">
                    <SimpleChatMessages />
                </div>
                <div className="border-t border-t-white/30 p-3">
                    <SimpleChatInput name={UserContext.user} />
                </div>
                <div className="border-t border-t-white/30 p-3">
                    <SimpleChatInput name={"bot do " + UserContext.user} />
                </div>
            </div>
        </>
    );
}