import React from "react";

interface ActionButtonProps {
    label: string;
    onClick: () => void;
    color?: "orange" | "blue";
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, color = "orange" }) => {
    const colorClass = color === "blue" ? "text-blue-400" : "text-orange-500";
    return (
        <button
            onClick={onClick}
            className={`text-[10px] font-black uppercase ${colorClass}`}
        >
            {label}
        </button>
    );
};

export default ActionButton;
