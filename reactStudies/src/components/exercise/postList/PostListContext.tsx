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
            ...postList,
            {
                id: postList[postList.length - 1].id + 1,
                title,
                body
            }
        ]);
    }

    return(
        <> 
            <PostListContext.Provider value={{ postList, addPost }}>
                <div className="mt-10 p-3 bg-slate-900 rounded-md">

                    <PostListHeader />
                    <PostList />
                    <PostListFooter />
                    
                </div>
            </PostListContext.Provider>
        </>
    );
}