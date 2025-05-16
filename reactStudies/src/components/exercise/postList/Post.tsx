import { useState } from "react";
import { PostType, usePostList } from "./PostListContext";

export const Post = ({ post }: {post: PostType}) => {

    const listContext = usePostList();    

    const [editText, setEditText] = useState({
        show: false,
        title: '',
        body: ''
    });

    return(
        <>
            <div className="flex flex-row justify-between p-3 border-b border-gray-700">
                {editText.show ? (
                    <div className="w-full">
                        <input
                            className="w-full py-1 pl-2 pr-4 mb-1 bg-white text-black border-1 border-indigo-950 rounded-md outline-none"
                            type="text"
                            value={editText.title}
                            onChange={e => setEditText({...editText, title: e.target.value})}
                            maxLength={60}
                        />
                        <textarea
                            className="h-15 w-full pl-2 pr-4 bg-white text-sm text-black border-1 border-indigo-950 rounded-md outline-none"
                            value={editText.body}
                            onChange={e => setEditText({...editText, body: e.target.value})}
                            maxLength={300}
                        />
                    </div>
                ) : (
                    <div>
                        <h4 className="mb-2 text-xl break-all">{post.title}</h4>
                        <p className="text-sm break-all">{post.body}</p>
                    </div>
                )}
                <div className="flex flex-col gap-2 justify-center ml-6">
                    <button className="text-xs px-3 py-1 bg-blue-500 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-103" onClick={() => {
                        (editText.show ? (
                            listContext.dispatch({type: 'edit', paylaod: {id: post.id, title: editText.title, body: editText.body}}),
                            setEditText({show: false, title: '', body: ''})
                        ) : (
                            setEditText({show: true, title: post.title, body: post.body})
                        ))
                    }}>{editText.show ? "Concluir" : "Editar"}</button>
                    {!editText.show && 
                        <button className="text-xs px-3 py-1 bg-blue-500 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-103" onClick={() => 
                            listContext.dispatch({type: 'remove', payload: {id: post.id}})}
                        >Remover</button>
                    }
                </div>
            </div>
        </>
    );
}