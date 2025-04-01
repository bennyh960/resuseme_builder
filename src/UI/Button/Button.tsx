import React, { FC, ReactNode, useState } from "react";

type ButtonProps = {
  children: ReactNode; // Text displayed on the button
  onClick?: () => void; // Event handler for button click
  disabled?: boolean; // Disables the button when true
  variant?: "primary" | "secondary" | "danger"; // Style variants for the button
  cssClass?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false, variant = "primary", cssClass }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (disabled || isLoading) return;
    setIsLoading(true);
    if (onClick) onClick();
    setTimeout(() => setIsLoading(false), 1000); // Simulates async loading
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "secondary":
        return "bg-gray-200 hover:bg-gray-300 text-gray-800";
      case "danger":
        return "bg-red-600 hover:bg-red-700 text-white";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`px-4 py-2 rounded-lg ${getVariantStyles()} cursor-pointer ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${cssClass ?? ""}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
