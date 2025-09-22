import { PillProps } from "@/interfaces";
import React from "react";

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-full border transition-all font-medium text-sm sm:text-base ${active ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}>
             {label}   
        </button>
    );
};

export default Pill;