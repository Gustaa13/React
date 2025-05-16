import { useContext } from "react";
import { PostListContext } from "./PostListContext";

export const PostListFooter = () => {

    const postContext = useContext(PostListContext);

    return(
        <>
            <footer>
                Total de posts: {postContext?.postList.length}
            </footer>
        </>
    );
}