import { textListReducer } from "@/redurcers/textListReducer";
import { useReducer, useState } from "react";
import { TextItemList } from "./TextItem";


export const TextList = () => {
    const [list, dispatch] = useReducer(textListReducer, []);

    const [textInput, setTextInput] = useState('');

    return (
        <>
            <div className="flex flex-col p-5 gap-5 justify-center items-center bg-indigo-950 mt-15">
                <h3 className="text-2xl text-center">Lista de tarefas 2.0</h3>
                <div className="flex flex-row items-center p-5 w-full max-w-lg bg-indigo-400 rounded-md">
                    <input 
                        className="px-3 py-2 w-full bg-white text-black border-2 border-indigo-950 rounded-4xl outline-none"
                        type="text" 
                        placeholder="O que deseja adicionar"
                        value={textInput}
                        onChange={e => setTextInput(e.target.value)}
                        maxLength={80}
                    />
                    <button className="px-3 py-1 ml-5 bg-indigo-900 rounded-2xl font-bold cursor-pointer transform transition-transform duration-200 hover:scale-105" onClick={() => {
                        (textInput && 
                            dispatch({
                                type: 'add',
                                payload: {
                                    text: textInput
                                }
                            }),
                            setTextInput('')
                        )
                    }}>Adicionar</button>
                </div>
                {list.length > 0 &&
                    <ul className="flex flex-col w-full max-w-xl p-5 gap-5 bg-indigo-400 rounded-md">
                            {list.map((item, index) => (
                                <li key={index}>
                                    <TextItemList item={item} dispatch={dispatch} />
                                </li>
                            ))}
                    </ul>
                }
            </div>
        </>
    );
}