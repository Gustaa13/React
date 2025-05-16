import { createContext, useReducer } from "react";
import { PostList } from "./PostList";
import { PostListFooter } from "./PostListFooter";
import { PostListHeader } from "./PostListHeader";
import { PostListActions, postListReducer } from "@/redurcers/postListReducer";

export type PostType = {
    id: number;
    title: string;
    body: string;
}

type PostListContextType = {
    postList: PostType[];
    dispatch: ({}: PostListActions) => void;
}

export const PostListContext = createContext<PostListContextType | null>(null)

export const PostListProvider = () => {

    const [postList, dispatch] = useReducer(postListReducer, [])

    return(
        <> 
            <PostListContext.Provider value={{ postList, dispatch }}>
                <div className="m-auto mt-10 p-3 bg-slate-900 rounded-md max-w-2xl">

                    <PostListHeader />
                    <PostList />
                    <PostListFooter />
                    
                </div>
            </PostListContext.Provider>
        </>
    );
}