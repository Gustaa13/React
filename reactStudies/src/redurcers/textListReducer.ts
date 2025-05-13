import { TextItem } from "@/types/TextItem";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    }
}

type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

export type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const textListReducer = (list: TextItem[], action: ListActions) => {
    switch(action.type) {
        case 'add':
            return ((list.length > 0) ? (
                    [...list, {
                        id: list[list.length - 1].id + 1,
                        text: action.payload.text.trim(),
                        done: false
                    }]
                ) : (
                    [{
                        id: 0,
                        text: action.payload.text.trim(),
                        done: false
                    }]
                )
            )
        case 'editText':
            return list.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, text: action.payload.newText.trim()}
                }

                return item;
            })
        case 'toggleDone':
            return list.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, done: !item.done};
                }
                
                return item;
            })
        case 'remove':
            return list.filter(item => item.id !== action.payload.id);
        default:  
            return list;
    }
}