"use client"

import { createContext, useContext, useEffect, useReducer } from "react";
import { PostList } from "./PostList";
import { PostListFooter } from "./PostListFooter";
import { PostListHeader } from "./PostListHeader";
import { PostListActions, postListReducer } from "@/redurcers/postListReducer";

const STORAGE_KEY = 'postList';

export type PostType = {
    id: number;
    title: string;
    body: string;
}

type PostListContextType = {
    postList: PostType[];
    dispatch: ({}: PostListActions) => void;
}

export const PostListContext = createContext<PostListContextType>({} as PostListContextType);

export const usePostList = () => useContext(PostListContext);

export const PostListProvider = () => {

    const [postList, dispatch] = useReducer(postListReducer, []);

    useEffect(() => {
        dispatch({
            type: 'initialize',
            payload: {
                storagePostList: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            }
        })
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(postList));
    }, [postList]);

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