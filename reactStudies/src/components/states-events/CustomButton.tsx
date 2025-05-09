import { CustomButton } from "@/types/CustomButton";

export const CustumButton = ({ label, onClick }: CustomButton) => {
    return (
        <button onClick={onClick} className="p-3 text-white bg-green-700 cursor-pointer rounded-md">{label}</button>
    );
}