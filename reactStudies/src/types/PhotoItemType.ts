import { Photo } from "./Photo";

export type PhotoItemType = {
    photo: Photo;
    onClick: () => void;
}