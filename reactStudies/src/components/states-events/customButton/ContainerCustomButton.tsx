"use client"

import { CustumButton } from "./CustomButton";

export const ContainerCustomButton = () => {
    return(
        <>
            <div className="flex gap-5">
                <CustumButton label="Clique aqui 1" onClick={() => alert("Clicou no botão 1")} />
                <CustumButton label="Clique aqui 2" onClick={() => alert("Clicou no botão 2")}/>
                <CustumButton label="Clique aqui 3" onClick={() => alert("Clicou no botão 3")}/>
            </div>
        </>
    );
}