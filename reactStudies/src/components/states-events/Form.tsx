"use client"

import { FormEvent, useState } from "react";

export const Form = () => {

    const [textInput, setTextInput] = useState('');

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Mandando...");

        /*let inputElement = document.getElementById("inputText") as HTMLInputElement;
        inputElement.value = "";*/ // With useState this is no longer necessary

        setTextInput('');
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center p-3 bg-slate-600 rounded-md">
                <h1 className="text-2xl mb-3">Form de login</h1>
                <form onSubmit={handleFormSubmit}>
                    <input className="bg-white mr-2 px-2 py-1 text-black rounded-md" type="text" id="inputText" value={textInput} onChange={e => setTextInput(e.target.value)}/>
                    <input className="bg-black py-1 px-2 rounded-xl" type="submit" value="Enviar" />
                </form>
                <p className="mt-2 p-1 text-lg bg-gray-600 rounded-md">Você digitou: {textInput}</p>
            </div>
        </>
    );
}