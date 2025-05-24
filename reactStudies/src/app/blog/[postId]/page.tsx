import { PostType } from "@/components/exercise/postList/PostListContext";
import axios from "axios";

type PageProps = {
    params: {
        postId: string;
    }
}

const Page = async ({ params }: PageProps) => {

    const { postId } = await params;

    const postRequest = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            id: postId
        }
    });

    const post: PostType = postRequest.data[0]; 

    if (!post) {
        return <div className="text-center">Post não encontrado</div>
    }
    
    return(
        <div className="text-center">
            <div>ID: {post.id}</div>
            <h1 className="text-3xl uppercase my-3">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Page;

export const generateStaticParams = async () => {
    const postsRequest = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts: PostType[] = await postsRequest.data;

    return posts.map(post => ({
        postId: post.id.toString()
    }));
}