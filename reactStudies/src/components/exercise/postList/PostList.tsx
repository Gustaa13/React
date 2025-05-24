"use client"

import { Post } from "./Post";
import { usePostList } from "./PostListContext";

export const PostList = () => {

  const listContext = usePostList();  

    return(
        <>
            <div className="my-3">
                {listContext.postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}