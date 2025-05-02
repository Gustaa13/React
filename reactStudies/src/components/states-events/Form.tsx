"use client"

import { FormEvent } from "react";

export const Form = () => {

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Mandando...");

        let inputElement = document.getElementById("inputText") as HTMLInputElement;
        inputElement.value = " ";
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl mb-3">Form de login</h1>
                <form onSubmit={handleFormSubmit}>
                    <input className="bg-white mr-2 text-black" type="text" id="inputText"/>
                    <input className="bg-black py-1 px-2 rounded-xl" type="submit" value="Enviar" />
                </form>
            </div>
        </>
    );
}