import { PhotoType } from "./PhotoType";

export type PhotoItemType = {
    photo: PhotoType;
    onClick: () => void;
}