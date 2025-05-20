import { api } from "@/utils/api";

export const AddPost = () => {

    async function AddPost() {

        const response = await api.post('/posts', {
            userId: 99,
            title: 'Título do post',
            body: 'Corpo do post'
        });

        console.log(response);

        if(response.data.id) {
            console.log("Inseriu corretamente");
        } else {
            console.log("Não inseriu");
        }
    } 

    return(
        <>
            <div className="flex justify-center container">
                <button className="px-3 py-1 bg-purple-700 rounded-md cursor-pointer hover:bg-purple-600" onClick={AddPost}>Inserir Post</button>
            </div>
        </>
    );
}