import { useContext } from "react";
import { Post } from "./Post";
import { PostListContext } from "./PostListContext";

export const PostList = () => {

  const listContext = useContext(PostListContext);  

    return(
        <>
            <div className="my-3">
                {listContext?.postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}