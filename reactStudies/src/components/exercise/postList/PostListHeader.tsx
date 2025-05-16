import { PostListContext, PostType } from "@/components/exercise/postList/PostListContext";
import { useContext, useState } from "react";

export const PostListHeader = () => {

    const postContext = useContext(PostListContext);

    const [post, setPost] = useState({title: '', body: ''});

    return(
        <>
            <h3 className="text-2xl text-center uppercase">Posts</h3>
            <div className="flex flex-col gap-3 border border-dotted border-gray-700 p-3 my-4">
                <input 
                    type="text" 
                    placeholder="Digite o título" 
                    className="border border-gray-600 p-2 text-xl"
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    maxLength={60}
                />
                <textarea 
                    placeholder="Digite um corpo"
                    className="h-24 border border-gray-600 p-2"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    maxLength={300}
                ></textarea>
                <button 
                    className="bg-blue-500 p-3 text-white rounded-md"
                    onClick={() => {
                        if(post.title && post.body){
                            postContext?.dispatch({
                                type: 'add',
                                payload: {
                                    title: post.title, 
                                    body: post.body
                                }
                            });
                            post.title = '';
                            post.body = '';
                        }
                    }}
                >Adicionar</button>
            </div>
        </>
    );
}