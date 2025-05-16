import { usePostList } from "./PostListContext";

export const PostListFooter = () => {

    const postContext = usePostList();

    return(
        <>
            <footer>
                Total de posts: {postContext.postList.length}
            </footer>
        </>
    );
}