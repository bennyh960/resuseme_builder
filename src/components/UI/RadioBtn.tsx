import React from "react";

const RadioBtn = ({ onClick, active, label }: { onClick: () => void; active: boolean; label: string }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
          active ? "border-blue-500" : "border-gray-300"
        }`}
      >
        {active && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
};

export default RadioBtn;
