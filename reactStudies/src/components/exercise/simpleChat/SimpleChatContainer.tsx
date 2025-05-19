import { SimpleChat } from "./SimpleChat";
import { ChatProvider } from "./contexts/ChatContext";
import { UserProvider } from "./contexts/UserContext";

export const SimpleChatContainer = () => {
    return(

        <div className="flex flex-col max-w-2xl m-auto p-5 mt-15 bg-gray-950 rounded-md">
            <UserProvider>
                <ChatProvider>

                    <h1 className="text-2xl text-center">Chat simples</h1>

                    <SimpleChat />

                </ChatProvider>
            </UserProvider>
        </div>
    );
}