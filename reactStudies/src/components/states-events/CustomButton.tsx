import { CustomButtonType } from "@/types/CustomButtonType";

export const CustumButton = ({ label, onClick }: CustomButtonType) => {
    return (
        <button onClick={onClick} className="p-3 text-white bg-green-700 cursor-pointer rounded-md">{label}</button>
    );
}