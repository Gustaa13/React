import { ListActions } from "@/redurcers/textListReducer";
import { TextItem } from "@/types/TextItem";
import { useState } from "react";

type TextItemListType = {
    item: TextItem;
    dispatch: ({}: ListActions) => void;
}

export const TextItemList = ({item, dispatch}: TextItemListType) => {

    const [editText, setEditText] = useState({
        show: false,
        text: ''
    });

    return(
        <div className="flex flex-row justify-between items-center px-3 py-2 bg-indigo-600 rounded-md">
            {editText.show ? (
                <div className="w-full">
                    <input
                        className="w-full pl-2 pr-4 bg-white text-black border-1 border-indigo-950 rounded-xl outline-none"
                        type="text"
                        value={editText.text}
                        onChange={e => setEditText({...editText, text: e.target.value})}
                        maxLength={80}
                    />
                </div>
            ) : (
                <div className="flex flex-row items-center">
                    <input className="w-4 h-4" onChange={() => dispatch({type: 'toggleDone', payload: {id: item.id}})} type="checkbox" checked={item.done} />
                    <div className={`mx-3 break-all ${item.done ? `line-through` : ''}`}>
                        {item.text}
                    </div>
                </div>
            )}
            <div className="flex flex-row ml-4">
                {!item.done &&
                    <button className="text-xs px-3 py-1 bg-indigo-900 rounded-xl" onClick={() => {
                        editText.show ? (
                            editText.text ? (
                                dispatch({type: 'editText', payload: {id: item.id, newText: editText.text}}),
                                setEditText({show: false, text: ''})
                            ) : (
                                dispatch({type: 'remove', payload: {id: item.id}}),
                                setEditText({show: false, text: ''})
                            )
                        ) : (
                            setEditText({show: true, text: item.text})
                        )
                    }}>{editText.show ? "Concluir" : "Editar"}</button>
                }
                <button className="ml-2 text-xs px-3 py-1 bg-indigo-900 rounded-xl" onClick={() => dispatch({type: 'remove', payload: {id: item.id}})}>Remover</button>
            </div>
        </div>
    );
}