import { useRef, useState } from "react";

export const ImageUpload = () => {

    const [legendInput, setLegendInput] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    async function fileSend () {
        if(fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
            const fileItem = fileInputRef.current.files[0];
            const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

            if(allowed.includes(fileItem.type)) {

                const data = new FormData();
                data.append('image', fileItem);
                data.append('legend', legendInput);

                const response = await fetch('', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'multipart/form-data'
                    },
                    body: data
                });
                
                const json = await response.json();
                console.log(json);

            } else {
                alert("Arquivo incompatível!");
            }

        } else {
            alert("Selecione um arquivo!");
        }
    }

    return(
        <div className="container mx-auto">
            <h1 className="text-3xl text-center">Upload de Imagem</h1>

            <div className="flex flex-col max-w-md gap-3 border border-dotted border-white p-3 mt-4 mx-auto">
                <input 
                    ref={fileInputRef}
                    type="file" 
                />
                <input 
                    className="bg-white text-black px-2 py-1 rounded-md"
                    type="text" 
                    placeholder="Digite uma legenda" 
                    value={legendInput}
                    onChange={e => setLegendInput(e.target.value)}
                />
                <button onClick={fileSend}>Enviar Imagem</button>
            </div>
        </div>
    );
}