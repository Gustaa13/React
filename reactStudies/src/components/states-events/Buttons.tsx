"use client"

export const Buttons = () => {
    function showMsg() {
        alert('Clicou');
    }

    function showPersonalizedMsg(msg: string) {
        alert(msg);
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <button onClick={showMsg} className="p-3 bg-blue-600 text-white rounded-md font-bold cursor-pointer mr-5">Botão 1</button>
                <button onClick={() => showPersonalizedMsg('Clicou!!!!!')} className="p-3 bg-blue-600 text-white rounded-md font-bold cursor-pointer">Botão 2</button>
            </div>
        </>
    );
}