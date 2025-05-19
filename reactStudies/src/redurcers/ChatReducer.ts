import { Message } from "@/types/Message";

type InitializeAction = {
    type: 'initialize';
    payload: {
        storageChat: Message[];
    }
}

type AddAction = {
    type: 'add';
    payload: {
        user: string;
        text: string;
    }
}

type ChatActions = AddAction | InitializeAction;

export const chatReducer = ( state: Message[], action: ChatActions ) => {
    switch(action.type) {
        case 'initialize':

            return action.payload.storageChat;

        case 'add':
            
            return [...state, {
                id: state.length,
                user: action.payload.user,
                text: action.payload.text
            }];

        default:
            return state;
    }
}