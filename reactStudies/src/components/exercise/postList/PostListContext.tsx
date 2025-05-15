import { createContext, useState } from "react";
import { PostList } from "./PostList";
import { PostListFooter } from "./PostListFooter";
import { PostListHeader } from "./PostListHeader";

export type PostType = {
    id: number;
    title: string;
    body: string;
}

type PostListContextType = {
    postList: PostType[];
    addPost: (title: string, body: string) => void;
}

export const PostListContext = createContext<PostListContextType | null>(null)

export const PostListProvider = () => {

    const [postList, setPostList] = useState<PostType[]>([]);

    const addPost = (title: string, body: string) => {

        if(postList.length === 0) {
            setPostList([{
                id: 0,
                title,
                body
            }])

            return;
        }

        setPostList([
            {
                id: postList[0].id + 1,
                title,
                body
            },
            ...postList,
        ]);
    }

    return(
        <> 
            <PostListContext.Provider value={{ postList, addPost }}>
                <div className="m-auto mt-10 p-3 bg-slate-900 rounded-md max-w-2xl">

                    <PostListHeader />
                    <PostList />
                    <PostListFooter />
                    
                </div>
            </PostListContext.Provider>
        </>
    );
}