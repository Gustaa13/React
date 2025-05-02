import { useState } from "react";

export const SecretArea = () => {

    const [showSecret, setShowSecret] = useState(false);

    function showSecretArea() {
        setShowSecret(!showSecret);
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <button onClick={showSecretArea} className="bg-pink-500 p-3 mb-3 rounded-sm">{showSecret ? "Ocultar" : "Mostrar"}</button>
                {showSecret && 
                    <div className="p-3 bg-purple-500">Área Secreta</div>
                }
            </div>
        </>
    );
}