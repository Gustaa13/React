import { PostType } from "@/types/PostType";

export const Post = ({ title, image, description}: PostType) => {
    return (
        <> {/* one element (root) and camelCase ever */} 
            <div className="flex flex-col justify-center items-center mb-15">
                <h1 className="text-blue-300 text-xl font-bold mb-2 text-center">{title}</h1> 
                <img 
                    src={image}
                    alt="Foto do Post" 
                    className="rounded-md"
                />
                {description ? (
                    <p className="text-blue-100 bg-gray-400 p-4 mt-3 text-justify rounded-2xl max-w-6xl">{description}</p>
                ) : null}
            </div>
        </>
    );
}