"use client"

import { Task } from "@/types/Task";
import { use, useState } from "react";

export const TaskList = () => {

    const [itemInput, setItemInput] = useState('');

    const [taskList, setTaskList] = useState<Task[]>([
        { id: 1, label: 'Fazer atividade', checked: false },
        { id: 2, label: 'Comprar bolo', checked: false }
    ]);

    function addTask() {
        if(itemInput.trim() === '') return;

        if(taskList.length === 0){
            setTaskList([{ id: 1, label: itemInput, checked: false }]);
        } else {
            setTaskList([
                ...taskList,
                { id: taskList[taskList.length - 1].id + 1, label: itemInput, checked: false}
            ]);
        }

        setItemInput('');
    }

    function deleteTask(taskIndex: number) {
        setTaskList(
            taskList.filter((task) => task.id !== taskIndex ? true : false)
        );
    }

    function toggleCheckedTask(index: number) {
        let newTaskList = [...taskList];
        
        for(let task of newTaskList){
            if(task.id === index){
                task.checked = !task.checked; 
            }
        }

        setTaskList(newTaskList);
    }

    return (
        <>
            <div className="flex flex-col items-center p-5 text-lg bg-gray-800 rounded-md">
                <h1 className="text-2xl mb-3">Lista de Tarefas</h1>

                <div className="flex justify-center items-center flex-wrap w-full max-w-lg p-4 rounded-md bg-gray-700 border-2 border-gray-500">
                    <input 
                        type="text" 
                        placeholder="O que deseja fazer?" 
                        className="basis-3/4 bg-white border border-black p-3 text-lg text-black rounded-md mr-3 text-center"
                        value={itemInput}
                        onChange={e => setItemInput(e.target.value)}
                        maxLength={30}
                    />
                    <button onClick={addTask} className="px-2 py-3 bg-white text-gray-700 rounded-md">Adicionar</button>
                </div>

                <p className="my-3 uppercase font-bold">Itens na lista: {taskList.length}</p>

                <ul className="flex flex-col flex-wrap gap-3 w-full max-w-lg bg-cyan-800 py-5 px-10 rounded-md">
                    {taskList.map((task) => 
                        <li key={task.id} className="flex flex-row items-center p-2 bg-cyan-700">
                            <input onChange={() => toggleCheckedTask(task.id)} type="checkbox" checked={task.checked} className="mr-2 w-5 h-5"/>
                            <div className="basis-4/5">
                                {task.label}
                            </div>
                            <button onClick={() => deleteTask(task.id)} className="ml-3 p-1 bg-cyan-950 text-sm rounded-md basis-1/5">deletar</button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}