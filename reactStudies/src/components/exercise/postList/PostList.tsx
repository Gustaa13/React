import { useContext } from "react";
import { PostListContext } from "./PostListContext";

export const PostList = () => {

    const listContext = useContext(PostListContext);

    return(
        <>
            <div className="my-3">
                {listContext?.postList.map((post) => (
                    <div key={post.id} className="p-3 border-b border-gray-700">
                        <h4 className="mb-2">{post.title}</h4>
                        <p className="text-sm">{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}