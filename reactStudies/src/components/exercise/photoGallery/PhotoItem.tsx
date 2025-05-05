import { PhotoItemType } from "@/types/PhotoItemType";

export const PhotoItem = ({ photo, onClick }: PhotoItemType) => {
    return (
        <>
            <div onClick={onClick} className="cursor-pointer hover:opacity-80">
                <img src={`/assets/photoGallery/${photo.url}`} alt="Fotos" className="object-cover w-full h-full"></img>
            </div>
        </>
    );
}