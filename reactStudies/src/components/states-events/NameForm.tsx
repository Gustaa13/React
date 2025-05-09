import { FullName } from "@/types/FullName";
import { useState } from "react";

export const NameForm = () => {

    const [fullName, setFullName] = useState<FullName>({ name: '', lastName: '' })

    function CleanName(){
        setFullName({ name: '', lastName: ''})
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center p-3 bg-slate-600 rounded-md">
                <input 
                    type="text" 
                    placeholder="Nome"
                    className="border border-black bg-white p-3 text-xl text-black rounded-md mb-3"
                    value={fullName.name}
                    onChange={e => setFullName({ ...fullName, name: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Sobrenome"
                    className="border border-black bg-white p-3 text-xl text-black rounded-md mb-3"
                    value={fullName.lastName}
                    onChange={e => setFullName({ ...fullName, lastName: e.target.value })}
                />
                <p className="text-lg">Meu nome completo é:</p>
                <p>{fullName.name} {fullName.lastName}</p>

                <button onClick={CleanName} className="bg-sky-500 p-2 rounded-md mt-5">Limpar tudo</button>
            </div>
        </>
    );
}